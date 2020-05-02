const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Material = new Schema({
    material_name: {
        type: String
    },
    chemical_composition: {
        SiO2: {
            type: Number
        },
        Al2O3: {
            type: Number
        },
        NaO3: {
            type: Number
        },
        Fe2O3: {
            type: Number
        },
        K2O: {
            type: Number
        },
        TiO2: {
            type: Number
        },
        CaO: {
            type: Number
        },
        MgO: {
            type: Number
        },
        P2O5: {
            type: Number
        },
        SO3: {
            type: Number
        }
    },
    alcaline: {
        MOH: {
            type: String
        },
        M2: {
            type: String
        },
        M: {
            type: String
        },
        RM: {
            type: String
        },
    },
    property: {
        first: {
            type: Number
        },
        second: {
            type: Number
        }
    },
    curing: {
        value: {
            type: Number,
            min: 0,
            max: 100
        },
        time: {
            type: Number
        }
    },
    application: {
        type: String
    }
});

module.exports = mongoose.model('Material', Material);