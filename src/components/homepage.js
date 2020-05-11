import React, { Component } from 'react';
import axios from 'axios';

import { Name } from './name';
import { Composition } from './composition.js';
import { Alcaline } from './alcaline.js';
import { Property } from './property.js';
import { Application } from './application.js';
import { Curing } from './curing.js';
/* import { MyPdfViewer } from './pdf.js'; */

import FileUpload from './fileUpload.js';

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this);
        this.changeChemicals = this.changeChemicals.bind(this);
        this.changeAlcaline = this.changeAlcaline.bind(this);
        this.changeProperty = this.changeProperty.bind(this);
        this.changeApplication = this.changeApplication.bind(this);
        this.changeCuring = this.changeCuring.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.changePDF = this.changePDF.bind(this);
        
        this.state = this.props.material;
    }

    changeName = async function(newName) {
        await this.setState({
            material_name: newName
        });

        this.props.onChange(this.state);
    }

    changeChemicals = async function(name, value) {
        var some = { ...this.state.chemical_composition, [name]: value };

        await this.setState({
            chemical_composition: some
        });

        this.props.onChange(this.state);
    }

    changeAlcaline = async function(name, value) {
        var some = { ...this.state.alcaline, [name]: value };

        await this.setState({
            alcaline: some
        });

        this.props.onChange(this.state);
    }

    changeProperty = async function(name, value) {

        var some = { ...this.state.property, [name]: value };

        await this.setState({
            property: some
        });

        this.props.onChange(this.state);
    }

    changeApplication = async function(newName) {
        await this.setState({
            application: newName
        });

        this.props.onChange(this.state);
    }

    changeCuring = async function(name, value) {
        var some = { ...this.state.curing, [name]: value };

        await this.setState({
            curing: some
        });

        this.props.onChange(this.state);
    }

    onSubmit = async function(e) {
        e.preventDefault();

        console.log('Form submitted: ');
        console.log(`Material name: ${this.state.material_name}
                    \nChamicals.SiO2:${this.state.chemical_composition.SiO2}
                    \nChamicals.Al2O3:${this.state.chemical_composition.Al2O3}
                    \nChamicals.NaO3:${this.state.chemical_composition.NaO3}
                    \nChamicals.Fe2O3:${this.state.chemical_composition.Fe2O3}
                    \nChamicals.K2O:${this.state.chemical_composition.K2O}
                    \nChamicals.TiO2:${this.state.chemical_composition.TiO2}
                    \nChamicals.CaO:${this.state.chemical_composition.CaO}
                    \nChamicals.MgO:${this.state.chemical_composition.MgO}
                    \nChamicals.P2O5:${this.state.chemical_composition.P2O5}
                    \nChamicals.SO3:${this.state.chemical_composition.SO3}
                    \nAlcaline.MOH:${this.state.alcaline.MOH} 
                    \nAlcaline.M2:${this.state.alcaline.M2} 
                    \nAlcaline.M:${this.state.alcaline.M} 
                    \nAlcaline.RM:${this.state.alcaline.RM} 
                    \nPoperty.first:${this.state.property.first} 
                    \nProperty.second:${this.state.property.second}
                    \nApplication: ${this.state.application}
                    \nCuring.value:${this.state.curing.value}
                    \nCuring.time:${this.state.curing.time}
        `);

        //communication to the backend
        const newMat = {
            material_name: this.state.material_name,
            chemical_composition: {...this.state.chemical_composition},
            alcaline: {...this.state.alcaline},
            property: {...this.state.property},
            curing: {...this.state.curing},
            application: this.state.application
        }

        axios.post('http://localhost:4000/materials/add', newMat)
            .then(res => console.log(res.data));

        //restore homepage
        let cancel = {
            material_name: '',
            chemical_composition: {
                SiO2: '',
                Al2O3: '',
                NaO3: '',
                Fe2O3: '',
                K2O: '',
                TiO2: '',
                CaO: '',
                MgO: '',
                P2O5: '',
                SO3: ''
            },
            alcaline: {
                MOH: '',
                M2: '',
                M: '',
                RM: '',
            },
            property: {
                first: '',
                second: ''
            },
            application: '',
            curing: {
                value: Number(0),
                time: ''
            },
            filename: ''
        };

        await this.setState(cancel);

        this.props.onChange(this.state);
    }

    changePDF = async function(uploadedFile){
        await this.setState({
            filename: uploadedFile
        });

        this.props.onChange(this.state);
    }

    render() {
        return (
            <div className="row">
                <div className="col" style={{ marginTop: 20 }}>
                    {/* <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                        </div>
                    </div> */}
                    
                    <FileUpload src={this.state.filename}
                                onChange={this.changePDF}/>

                    {/* <MyPdfViewer /> */}
                </div>
                <div className="col" style={{ marginTop: 20 }}>
                    <form onSubmit={this.onSubmit}>
                        <Name
                            name={this.state.material_name}
                            onChange={this.changeName} />
                        <Composition
                            SiO2={this.state.chemical_composition.SiO2}
                            Al2O3={this.state.chemical_composition.Al2O3}
                            NaO3={this.state.chemical_composition.NaO3}
                            Fe2O3={this.state.chemical_composition.Fe2O3}
                            K2O={this.state.chemical_composition.K2O}
                            TiO2={this.state.chemical_composition.TiO2}
                            CaO={this.state.chemical_composition.CaO}
                            MgO={this.state.chemical_composition.MgO}
                            P2O5={this.state.chemical_composition.P2O5}
                            SO3={this.state.chemical_composition.SO3}
                            onChange={this.changeChemicals} />
                        <Alcaline
                            MOH={this.state.alcaline.MOH}
                            M2={this.state.alcaline.M2}
                            M={this.state.alcaline.M}
                            RM={this.state.alcaline.RM}
                            onChange={this.changeAlcaline} />
                        <Property
                            first={this.state.property.first}
                            second={this.state.property.second}
                            onChange={this.changeProperty} />
                        <Application 
                            application={this.state.application}
                            onChange={this.changeApplication}
                        />
                        <Curing
                            value={this.state.curing.value}
                            time={this.state.curing.time}
                            onChange={this.changeCuring}
                        />
                        <div className="form-group">
                            <input  type="submit" 
                                    value="Save Material" 
                                    className="btn btn-primary btn-lg btn-block" />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
