import React from 'react'

export class Name extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        //name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <h3>Raw Material</h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    </div>
                    <input  type="text"
                            className="form-control"
                            placeholder="Material"
                            value={this.props.name}
                            onChange={this.handleChange}
//                            style={{textTransform: "capitalize"}}
                            />
                </div>
            </div>
        )
    }

}