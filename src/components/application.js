import React from 'react'

export class Application extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }


    

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <h3>Application</h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    </div>
                    <input  type="text" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default"
                            value={this.props.application}
                            onChange={this.handleChange} />
                </div>
            </div>
        )
    }

}