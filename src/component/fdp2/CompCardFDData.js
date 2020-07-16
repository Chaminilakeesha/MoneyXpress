import React, { useState } from 'react';
import CompCard from './CompCardFD';



const CardCredData = (props) => {







    const [carddet, setCardDet] = useState([
        { category: "bank", type: "Regular Savings Account", institute: "Commercial Bank", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Regular Savings Account", institute: "Sampath Bank", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Regular Savings Account", institute: "Peoples Bank", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Regular Savings Account", institute: "Hatton National bank", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Regular Savings Account", institute: "LB Finance", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Regular Savings Account", institute: "Vallibel Finance", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Regular Savings Account", institute: "Commercial Credit & Finance PLC", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Regular Savings Account", institute: "Kanrich Finance Ltd", Srate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Power Saver Account", institute: "Commercial Bank", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Power Saver Account", institute: "Sampath Bank", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Power Saver Account", institute: "Peoples Bank", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Power Saver Account", institute: "Hatton National bank", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Power Saver Account", institute: "LB Finance", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Power Saver Account", institute: "Vallibel Finance", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Power Saver Account", institute: "Commercial Credit & Finance PLC", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Power Saver Account", institute: "Kanrich Finance Ltd", Srate: 5.00, Brate: 5.00, MinDepAmount: 5000.00, FitchRating: "AA-" },

        { category: "bank", type: "Leasing", institute: "Commercial Bank", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "bank", type: "Leasing", institute: "Sampath Bank", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "bank", type: "Leasing", institute: "Peoples Bank", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "bank", type: "Leasing", institute: "Hatton National bank", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "non-bank", type: "Leasing", institute: "LB Finance", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "non-bank", type: "Leasing", institute: "Vallibel Finance", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "non-bank", type: "Leasing", institute: "Commercial Credit & Finance PLC", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },
        { category: "non-bank", type: "Leasing", institute: "Kanrich Finance Ltd", Lrate: 5.00, IntMaturity: 5000.00, TotalAmountMaturity: 21000.00 },

        { category: "bank", type: "Fixed Deposit", institute: "Commercial Bank", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Fixed Deposit", institute: "Sampath Bank", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Fixed Deposit", institute: "Peoples Bank", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "bank", type: "Fixed Deposit", institute: "Hatton National bank", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Fixed Deposit", institute: "LB Finance", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Fixed Deposit", institute: "Vallibel Finance", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Fixed Deposit", institute: "Commercial Credit & Finance PLC", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },
        { category: "non-bank", type: "Fixed Deposit", institute: "Kanrich Finance Ltd", Srate: 5.00, IntMaturity: 5000.00, FitchRating: "AA-" },

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





        carddet.map((x) => {
            if ((x.type == props.type) && (x.category == props.category))
                return <CompCard carddet={{ ...x }} />




        })












    );
}

export default CardCredData;