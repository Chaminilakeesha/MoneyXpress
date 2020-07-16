import React from 'react';

import icon1 from '../../assests/icons8-renew-50.png'
import icon2 from '../../assests/icons8-document-128.png';
import icon3 from '../../assests/icons8-more-details-100.png'

function Segment3() {
    return (
        <div className="container-fluid h-auto pb-5 bg-white">

            <div className="text-center my-5" style={{ fontSize: '38px', color: '#414E63', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>How to get the best rates for your Fixed Deposit</div>

            <div className="row text-center">
                <div className='col'>
                    <img src={icon1} style={{ height: '120px', width: '120px' }} alt="icon" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Don’t Auto renew</div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        Don’t trust your local bank to have the highest rates.
                        You definitely need to do the research.
                    </p>
                </div>
                <div className='col'>
                    <img src={icon2} className="my-3" style={{ height: '90px', width: '90px' }} alt="icon" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Compare Quotes</div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        Read all the documentations and policies they offer before taking it
                    </p>
                </div>
                <div className='col'>

                    <img src={icon3} style={{ height: '120px', width: '120px' }} alt="icon" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Accurate Details </div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        Give us accurate details to provide the best tailor made solution for you
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Segment3;