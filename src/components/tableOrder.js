import React from 'react';
import axios from 'axios';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const Material = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.materials);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table className="table table-striped table-bordered table-sm" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                    <th className="th-sm" style={{ backgroundColor: 'powderblue' }}>
                        {/* <button type="button"
                            onClick={() => requestSort('material_name')}
                            className={getClassNamesFor('material_name')}>
                            MaterialName
                        </button> */}
                        MaterialName
                    </th>
                    <th colSpan="10" style={{ backgroundColor: 'coral' }}> ChemicalComposition</th>
                </tr>
                <tr>
                    <th></th>

                    <th>
                        {/* <button type="button"
                            onClick={() => requestSort('chemical_composition.SiO2')}
                            className={getClassNamesFor('chemical_composition.SiO2')}>
                            SiO2
                        </button> */}
                        SiO2
                    </th>
                    <th>Al2O3</th>
                    <th>NaO3</th>
                    <th>Fe2O3</th>
                    <th>K2O</th>
                    <th>TiO2</th>
                    <th>CaO</th>
                    <th>MgO</th>
                    <th>P2O5</th>
                    <th>SO3</th>

                </tr>
            </thead>

            <tbody>
                {/* {materialList(props.materials)} */}
                {items.map((item) => (
                    <tr key={item._id}>
                        <td>{item.material_name}</td>
                        {item.chemical_composition.SiO2 ? <td>{item.chemical_composition.SiO2}%</td> : <td></td>}
                        {item.chemical_composition.Al2O3 ? <td>{item.chemical_composition.Al2O3}%</td> : <td></td>}
                        {item.chemical_composition.NaO3 ? <td>{item.chemical_composition.NaO3}%</td> : <td></td>}
                        {item.chemical_composition.Fe2O3 ? <td>{item.chemical_composition.Fe2O3}%</td> : <td></td>}
                        {item.chemical_composition.K2O ? <td>{item.chemical_composition.K2O}%</td> : <td></td>}
                        {item.chemical_composition.TiO2 ? <td>{item.chemical_composition.TiO2}%</td> : <td></td>}
                        {item.chemical_composition.CaO ? <td>{item.chemical_composition.CaO}%</td> : <td></td>}
                        {item.chemical_composition.MgO ? <td>{item.chemical_composition.MgO}%</td> : <td></td>}
                        {item.chemical_composition.P2O5 ? <td>{item.chemical_composition.P2O5}%</td> : <td></td>}
                        {item.chemical_composition.SO3 ? <td>{item.chemical_composition.SO3}%</td> : <td></td>}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default class Table extends React.Component {

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

    render() {
        return (
            <Material materials={this.state.materials} />
        )



        /* ); */
    }
}