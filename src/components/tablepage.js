import React, { Component } from 'react';
import axios from 'axios';

const Material = props => (
    <tr>
        <td>{props.material.material_name}</td>
        <td>{props.material.chemical_composition.SiO2}%</td>
        <td>{props.material.chemical_composition.Al2O3}%</td>
        <td>{props.material.chemical_composition.NaO3}%</td>
        <td>{props.material.chemical_composition.Fe2O3}%</td>
        <td>{props.material.chemical_composition.K2O}%</td>
        <td>{props.material.chemical_composition.TiO2}%</td>
        <td>{props.material.chemical_composition.CaO}%</td>
        <td>{props.material.chemical_composition.MgO}%</td>
        <td>{props.material.chemical_composition.P2O5}%</td>
        <td>{props.material.chemical_composition.SO3}%</td>
    </tr>
)

export default class TablePage extends Component {

    constructor(props) {
        super(props);

        this.state = { materials: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/materials')
            .then(res => {
                this.setState({ materials: res.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    materialList() {
        return this.state.materials.map(function (currentMat, index) {
            return <Material material={currentMat} key={index} />
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h3>Search selection for</h3>
                            <div className="dropdown" style={{
                                height: 150,
                                marginTop: 20,
                            }}>
                                <button className="btn btn-secondary dropdown-toggle btn-lg"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Select One
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div className="dropdown-item">Raw Material</div>
                                    <div className="dropdown-item">Final Material</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h3>Which Material?</h3>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Material"
                                        value={this.props.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div>
                                <h3>Which Chemical Composition?</h3>
                                <div className="form-row">

                                    <div className="form-group col-md-2">
                                        <label htmlFor="SiO2" className="col-form-label col-form-label-sm">SiO2</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="SiO2"
                                                value={this.props.SiO2}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="Al2O3" className="col-form-label col-form-label-sm">Al2O3</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="Al2O3"
                                                value={this.props.Al2O3}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="NaO3" className="col-form-label col-form-label-sm">NaO3</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="NaO3"
                                                value={this.props.NaO3}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="Fe2O3" className="col-form-label col-form-label-sm">Fe2O3</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="Fe2O3"
                                                value={this.props.Fe2O3}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="K2O" className="col-form-label col-form-label-sm">K2O</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="K2O"
                                                value={this.props.K2O}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="TiO2" className="col-form-label col-form-label-sm">TiO2</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="TiO2"
                                                value={this.props.TiO2}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="CaO" className="col-form-label col-form-label-sm">CaO</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="CaO"
                                                value={this.props.CaO}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="MgO" className="col-form-label col-form-label-sm">MgO</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="MgO"
                                                value={this.props.MgO}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="P2O5" className="col-form-label col-form-label-sm">P2O5</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="P2O5"
                                                value={this.props.P2O5}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="SO3" className="col-form-label col-form-label-sm">SO3</label>
                                        <div className="input-group mb-6">
                                            <input type="text"
                                                className="form-control"
                                                name="SO3"
                                                value={this.props.SO3}
                                                onChange={this.handleChange} />
                                            <div className="input-group-append">
                                                <span className="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3> Materials List</h3>
                <table className="table table-striped table-bordered table-sm" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th className="th-sm" style={{ backgroundColor: 'powderblue' }}>MaterialName</th>
                            <th colSpan="10" style={{ backgroundColor: 'coral' }}> ChemicalComposition</th>
                            {/*                        <th colSpan="4"> Alcaline</th>
                            <th colSpan="2"> Property</th>
                            <th colSpan="2"> Curing</th>
                            <th>Application</th> */}
                        </tr>
                        <tr>
                            <th></th>

                            <th>SiO2</th>
                            <th>Al2O3</th>
                            <th>NaO3</th>
                            <th>Fe2O3</th>
                            <th>K2O</th>
                            <th>TiO2</th>
                            <th>CaO</th>
                            <th>MgO</th>
                            <th>P2O5</th>
                            <th>SO3</th>

                            {/*                             <th>MOH</th>
                            <th>M2</th>
                            <th>M</th>
                            <th>RM</th>

                            <th>first</th>
                            <th>second</th>

                            <th>value</th>
                            <th>time</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {this.materialList()}
                    </tbody>
                </table>
            </div>
        );
    }
}