import React from 'react';

import icon4 from '../../assests/icons8-percentage-160.png'
import icon5 from '../../assests/icons8-coin-in-hand-128.png';
import icon6 from '../../assests/icons8-easy-80.png'

function Segment5() {
    return (

        <div className="container-fluid h-auto pb-5 mb-4" style={{ backgroundColor: '#F4F9FF' }}>

            <div className="text-center pt-5" style={{ fontSize: '38px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Advantages of Fixed Deposits</div>

            <div className="row text-center mt-5">
                <div className='col'>
                    <img src={icon4} style={{ width: '120px', height: '120px' }} alt="icon" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>High rate of return</div>
                    <p className='mx-4' style={{ fontSize: "15px", fontFamily: 'Poppins-Regular' }}>
                        Credit cards can offer a viable alternative to personal loans
                        since they can be available with 0% interest and may offer some grace periods
                        </p>
                </div>
                <div className='col'>
                    <img src={icon5} style={{ width: '120px', height: '120px' }} alt="icon" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Low risk</div>
                    <p className='mx-4' style={{ fontSize: "15px", fontFamily: 'Poppins-Regular' }}>
                        Current account holders can make payments out of its
                        current account and even if it exceeds its available balance.
                    </p>
                </div>
                <div className='col'>

                    <img src={icon6} style={{ width: '120px', height: '120px' }} alt="icon" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>No upfront or ongoing fees </div>
                    <p className='mx-4' style={{ fontSize: "15px", fontFamily: 'Poppins-Regular' }}>
                        If you want a loan till your Salary is credited to your account then
                        you can go for a short term loan.Easy and convenient
                    </p>
                </div>
                <div className='col'>

                    <img src={icon6} style={{ width: '120px', height: '120px' }} alt="icon" />
                    <div className='py-3' style={{ fontSize: '26px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Known interest </div>
                    <p className='mx-4' style={{ fontSize: "15px", fontFamily: 'Poppins-Regular' }}>
                        Borrow money from your friends and family
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Segment5;