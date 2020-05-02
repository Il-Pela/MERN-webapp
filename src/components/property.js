import React from 'react'

export class Property extends React.Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
/*         console.log([e.target.name]); */
        this.props.onChange([e.target.name], value);
    }

    render() {
        return (
            <div>
                <h3>Property</h3>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">C.S(Mpa)</span>
                                </div>
                                <input  type="text" 
                                        className="form-control" 
                                        name="first"
                                        value={this.props.first}
                                        onChange={this.handleChange}
                                        />
                            </div>
                        </div>


                        <div className="form-group col-md-6">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">S/L</span>
                                </div>
                                <input  type="text" 
                                        className="form-control second" 
                                        name="second" 
                                        value={this.props.second}
                                        onChange={this.handleChange}
                                        />
                            </div>
                        </div>

                    </div>
            </div>
        )
    }

}