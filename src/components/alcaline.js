import React from 'react'

export class Alcaline extends React.Component {

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
                <h3>Alcaline Solution</h3>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">M-OH</span>
                                </div>
                                <input  type="text" 
                                        className="form-control" 
                                        name="MOH"
                                        value={this.props.MOH}
                                        onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">M2-SiO3</span>
                                </div>
                                <input  type="text" 
                                        className="form-control" 
                                        name="M2"
                                        value={this.props.M2}
                                        onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">M</span>
                                </div>
                                <input  type="text" 
                                        className="form-control" 
                                        name="M"
                                        value={this.props.M}
                                        onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">MR</span>
                                </div>
                                <input  type="text" 
                                        className="form-control" 
                                        name="RM"
                                        value={this.props.RM}
                                        onChange={this.handleChange} />
                            </div>
                        </div>

                    </div>
            </div>
        )
    }

}