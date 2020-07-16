import React, { useState } from 'react';
import Table1 from './Table1';



const Table1Data = (props) => {







    const [tabledet, setTableDet] = useState([
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },
        { institution: "Commercial Bank", type: "Regular Savings Account", month1: "89%", months3: "25%", months6: "25%", year1: "25%", years2: "25%", years5: "25%", years10: "25%" },


    ])








    return (



        <>
            {tabledet.map((x) => {
                if (x.type == props.type)
                    return <Table1 tabledet={{ ...x }} />
                // else { tabledet.map(x => <Table1 tabledet={{ ...x }} />) }
            })}
        </>










    );
}

export default Table1Data;