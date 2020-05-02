import React from 'react';

import { MySlider } from './myslider';

export class Curing extends React.Component {
    constructor(props){
        super(props);

        this.handleChangeSlide = this.handleChangeSlide.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }

    handleChangeSlide(e) {
        const value = e.target.value;
        this.props.onChange(["value"], value);
    }

    handleChangeTime(e) {
        const value = e.target.value;
        this.props.onChange([e.target.name], value);
    }

    render() {
        return (
            <div>
                <h3>Curing</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <MySlider 
                            value={Number(this.props.value)}
                            onChange={this.handleChangeSlide}
                        />
                    </div>

                    <div className="form-group col-md-6">
                    
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Time</span>
                            </div>
                            <input  type="text" 
                                    className="form-control" 
                                    name="time"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default"
                                    value={this.props.time}
                                    onChange={this.handleChangeTime}></input>
                            <div className="input-group-append">
                                <span className="input-group-text">h</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}