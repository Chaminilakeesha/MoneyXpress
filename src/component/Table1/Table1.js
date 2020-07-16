import React from 'react';
import Card from 'react-bootstrap/Card'

import Table from 'react-bootstrap/Table'


const Table1 = (props) => {



    return (

        <tr>
            <td>{props.tabledet.institution}</td>
            <td>{props.tabledet.type}</td>
            <td>{props.tabledet.month1}</td>
            <td>{props.tabledet.months3}</td>
            <td>{props.tabledet.months6}</td>
            <td>{props.tabledet.year1}</td>
            <td>{props.tabledet.years2}</td>
            <td>{props.tabledet.years5}</td>
            <td>{props.tabledet.years10}</td>
        </tr>




    );

}

export default Table1;