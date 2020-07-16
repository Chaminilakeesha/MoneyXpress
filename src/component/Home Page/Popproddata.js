import React, { useState } from 'react';
import Popprodcard from './Popprodcard';



const Popproddata = (props) => {







    const [det, setDet] = useState([
        { title: "Smart Fixed Deposits", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Commercial Bank" },
        { title: "Smart Fixed Deposits", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Hatton National Bank" },
        { title: "Smart Fixed Deposits", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Sampath Bank" },
        { title: "Smart Fixed Deposits", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Peoples Bank" },

        { title: "Personal Loans", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Commercial Bank" },
        { title: "Personal Loans", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Hatton National Bank" },
        { title: "Personal Loans", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Sampath Bank" },
        { title: "Personal Loans", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Peoples Bank" },

        { title: "Leasings", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Commercial Bank" },
        { title: "Leasings", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Hatton National Bank" },
        { title: "Leasings", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Sampath Bank" },
        { title: "Leasings", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Peoples Bank" },

        { title: "Credit Cards", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Commercial Bank" },
        { title: "Credit Cards", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Hatton National Bank" },
        { title: "Credit Cards", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Sampath Bank" },
        { title: "Credit Cards", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Peoples Bank" },

        { title: "Savings Accounts", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Commercial Bank" },
        { title: "Savings Accounts", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Hatton National Bank" },
        { title: "Savings Accounts", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Sampath Bank" },
        { title: "Savings Accounts", t1: "8.75", t2: "10.25", t3: "12.00", t4: "14.75", bank: "Peoples Bank" },
    ])








    return (
        <div>
            <div >


                <div className="row">
                    {/* {det.map(x => <Popprodcard det={{ ...x }} />)} */}

                    {det.map((x) => {
                        if (x.title == props.title)
                            return <Popprodcard det={{ ...x }} />
                    })}

                </div>











            </div>
        </div >
    );
}

export default Popproddata;