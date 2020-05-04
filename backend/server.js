const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser'); //middleware
const cors = require('cors'); //middleware
const mongoose = require('mongoose'); //link to mongoDB
const materialRoutes = express.Router();
const PORT = 4000; //localmachine port where the server works

let Material = require('./material.model');

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

mongoose.connect('mongodb://127.0.0.1:27017/materials', { useNewUrlParser: true, useUnifiedTopology: true }); //connection to the db
const connection = mongoose.connection; //connection reference

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

//endpoint for retrieve all materials
materialRoutes.route('/').get(function (req, res) {
    Material.find(function (err, materials) {
        if (err) {
            console.log(err);
        } else {
            res.json(materials);
        }
    });
});

//retrieve ONE material
materialRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Material.findById(id, function (err, material) {
        res.json(material);
    });
});

//add material to db
materialRoutes.route('/add').post(function (req, res) {
    let material = new Material(req.body);
    material.save()
        .then(material => {
            res.status(200).json({ 'material': 'material added sucessfully' });
        })
        .catch(err => {
            res.status(400).send('adding new material failed');
        });
});

//update an existing material item
materialRoutes.route('/update/:id').post(function (req, res) {
    Material.findById(req.params.id, function (err, material) {
        if (!material) {
            res.status(404).send('Data not found');
        } else {
            material.material_name = req.body.material_name;
            //ToDo the same for other params


            //in the end we have to save the update
            material.save()
                    .then(material => {
                        res.json('Todo updated')
                    })
                    .catch(err => {
                        res.status(400).send('Update not possible');
                    });
        }
    });
});

//Upload Endpoint
materialRoutes.route('/upload').post((req, res) => {
    if(req.files === null){
        return res.status(400).json({ msg: 'No file uploaded'});
    }

    const file = req.files.file;

    /* ${_dirname} */
    file.mv(`../public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});

    })

})

app.use('/materials', materialRoutes);

app.listen(PORT, function () {
    console.log("Server up and Running on Port: " + PORT);
});
