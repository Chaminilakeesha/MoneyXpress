import React from 'react';

import Loan4 from '../../assests/icons8-percentage-160.png'
import Loan5 from '../../assests/icons8-coin-in-hand-128.png';
import Loan6 from '../../assests/icons8-easy-80.png'


function Alter() {
    return (
        <div className="container-fluid h-auto pb-5" style={{ backgroundColor: "#F4F9FF", color: "black" }}>

            <p className="text-center pt-5" style={{ fontSize: '38px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Alternatives for Loans</p>

            <div className="row text-center mt-5">
                <div className='col'>
                    <img src={Loan4} style={{ width: '120px', height: '120px' }} alt="Loan" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Credit Cards</div>
                    <p className='mx-4' style={{ fontFamily: 'Poppins-Regular', fontSize: "15px" }}>
                        Credit cards can offer a viable alternative to personal loans since they
                        can be available with 0% interest and may offer some grace periods
                    </p>
                </div>
                <div className='col'>
                    <img src={Loan5} style={{ width: '120px', height: '120px' }} alt="Loan" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Overdrafts</div>
                    <p className='mx-4' style={{ fontFamily: 'Poppins-Regular', fontSize: "15px" }}>
                        Current account holders can make payments out of its current account and even if it exceeds
                        its available balance.

                </p>
                </div>
                <div className='col'>

                    <img src={Loan6} style={{ width: '120px', height: '120px' }} alt="Loan" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Short term loans </div>
                    <p className='mx-4' style={{ fontFamily: 'Poppins-Regular', fontSize: "15px" }}>
                        If you want a loan till your Salary is credited to your
                        account then you can go for a short term loan.Easy and convenient
                </p>
                </div>
                <div className='col'>

                    <img src={Loan6} style={{ width: '120px', height: '120px' }} alt="Loan" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Cash Advance </div>
                    <p className='mx-4' style={{ fontFamily: 'Poppins-Regular', fontSize: "15px" }}>
                        Some FDs give you upto 90% of the Fixed Deposit Amount as a Cash advance
                </p>
                </div>
            </div>

        </div>
    );
}

export default Alter;