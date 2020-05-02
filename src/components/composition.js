import React from 'react'

export class Composition extends React.Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.onChange([e.target.name], value);
    }

    render() {
        return (
            <div>
                <h3>Chemical Composition</h3>
                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                            <label htmlFor="SiO2" className="col-form-label col-form-label-sm">SiO2</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="SiO2"
                                        value={this.props.SiO2}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="Al2O3" className="col-form-label col-form-label-sm">Al2O3</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="Al2O3"
                                        value={this.props.Al2O3}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="NaO3" className="col-form-label col-form-label-sm">NaO3</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="NaO3"
                                        value={this.props.NaO3}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="Fe2O3" className="col-form-label col-form-label-sm">Fe2O3</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="Fe2O3"
                                        value={this.props.Fe2O3}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="K2O" className="col-form-label col-form-label-sm">K2O</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="K2O"
                                        value={this.props.K2O}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="TiO2" className="col-form-label col-form-label-sm">TiO2</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="TiO2"
                                        value={this.props.TiO2}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="CaO" className="col-form-label col-form-label-sm">CaO</label>
                            <div className="input-group mb-6">
                                <input  type="text"
                                        className="form-control" 
                                        name="CaO"
                                        value={this.props.CaO}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="MgO" className="col-form-label col-form-label-sm">MgO</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="MgO"
                                        value={this.props.MgO}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="P2O5" className="col-form-label col-form-label-sm">P2O5</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
                                        className="form-control" 
                                        name="P2O5"
                                        value={this.props.P2O5}
                                        onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="SO3" className="col-form-label col-form-label-sm">SO3</label>
                            <div className="input-group mb-6">
                                <input  type="text" 
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
        )
    }

}