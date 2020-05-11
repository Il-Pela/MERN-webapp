import React from 'react';
/* import axios from 'axios'; */

const Row = (props) => {
    return (
        < tr >
            <td>{props.material.material_name}</td>
            {props.material.chemical_composition.SiO2 ? <td>{props.material.chemical_composition.SiO2}%</td> : <td></td>}
            {props.material.chemical_composition.Al2O3 ? <td>{props.material.chemical_composition.Al2O3}%</td> : <td></td>}
            {props.material.chemical_composition.NaO3 ? <td>{props.material.chemical_composition.NaO3}%</td> : <td></td>}
            {props.material.chemical_composition.Fe2O3 ? <td>{props.material.chemical_composition.Fe2O3}%</td> : <td></td>}
            {props.material.chemical_composition.K2O ? <td>{props.material.chemical_composition.K2O}%</td> : <td></td>}
            {props.material.chemical_composition.TiO2 ? <td>{props.material.chemical_composition.TiO2}%</td> : <td></td>}
            {props.material.chemical_composition.CaO ? <td>{props.material.chemical_composition.CaO}%</td> : <td></td>}
            {props.material.chemical_composition.MgO ? <td>{props.material.chemical_composition.MgO}%</td> : <td></td>}
            {props.material.chemical_composition.P2O5 ? <td>{props.material.chemical_composition.P2O5}%</td> : <td></td>}
            {props.material.chemical_composition.SO3 ? <td>{props.material.chemical_composition.SO3}%</td> : <td></td>}
        </tr >
    )
}

function Material(props) {
    return (props.materials.map(function (currentMat, index) {
        return <Row material={currentMat} key={index} />
    })
    )
}

export default class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = { materials: [] };

    }

/*     componentDidMount() {
        axios.get('http://localhost:4000/materials')
            .then(res => {
                this.setState({ materials: res.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    } */

    materialList() {
        /*         return this.state.materials.map(function (currentMat, index) { */
        return <Material materials={this.state.materials} />
        /*         }) */
    }


    render() {
        return (<table className="table table-striped table-bordered table-sm" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                    <th className="th-sm" style={{ backgroundColor: 'powderblue' }}>
                        MaterialName
                    </th>
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
        </table>);
    }
}