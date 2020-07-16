import React, { useState } from 'react';
import Card from './CardLoan';



const CardCredData = (props) => {







    const [carddet, setCardDet] = useState([
        { type: "Regular Savings Account", bank: "Commercial Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Regular Savings Account", bank: "Sampath Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Regular Savings Account", bank: "Peoples Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Regular Savings Account", bank: "Hatton National bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Fixed Deposit", bank: "Commercial Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Fixed Deposit", bank: "Sampath Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Fixed Deposit", bank: "Peoples Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Fixed Deposit", bank: "Hatton National bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Leasing", bank: "Commercial Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Leasing", bank: "Sampath Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Leasing", bank: "Peoples Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Leasing", bank: "Hatton National bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Credit Card", bank: "Commercial Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Credit Card", bank: "Sampath Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Credit Card", bank: "Peoples Bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { type: "Credit Card", bank: "Hatton National bank", intrate: "28%", AnnFee: 5000.00, intFreePeriod: 21 },
        { category: "bank", type: "Personal Loan", institute: "Commercial Bank", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "bank", type: "Personal Loan", institute: "Sampath Bank", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "bank", type: "Personal Loan", institute: "Peoples Bank", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "bank", type: "Personal Loan", institute: "Hatton National bank", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "non-bank", type: "Personal Loan", institute: "LB Finance", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "non-bank", type: "Personal Loan", institute: "Vallibel Finance", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "non-bank", type: "Personal Loan", institute: "Commercial Credit & Finance PLC", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },
        { category: "non-bank", type: "Personal Loan", institute: "Kanrich Finance Ltd", Mrate1: 5.00, Mrate2: 8.25, MonAmount: 5000.00, TotalPayInt: 21000.00 },


    ])








    return (



        <div >
            {carddet.map((x) => {
                if ((x.type == props.type) && (x.category == props.category))
                    return <Card carddet={{ ...x }} />
                else if ((x.type == props.type) && !props.category)
                    return <Card carddet={{ ...x }} />



            })}
        </div>










    );
}

export default CardCredData;