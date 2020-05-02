import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

export const MySlider = (props) => {

    const handleChange = (e) => {
        props.onChange(e);
    }

    
    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-1">
                    <h3>0</h3>
                </div>

                <div className="form-group col-md-8">
                    <RangeSlider
                        value={props.value}
                        onChange={changeEvent => {
                            handleChange(changeEvent)
                        }}
                        min={0}
                        max={100}
                    />
                </div>

                <div className="form-group col-md-3">
                    <h3>100</h3>
                </div>

            </div>
        </div>
    );
}