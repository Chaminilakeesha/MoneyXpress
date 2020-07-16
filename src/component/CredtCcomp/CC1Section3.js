import React from 'react';
import './CC1Section3.css'
import icon4 from '../../assests/correct-icon-clipart-2.png'

function Section3() {
    return (
        <div className='container-fluid h-auto pl-5 main-background pb-5' >
            <p className='mb-5 ml-3 pt-5' style={{ color: 'black', fontSize: '38px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Advantages of Credit cards</p>
            <div className="row mt-3 mb-5 pl-3">
                {<div className='col-auto my-auto'><img src={icon4} style={{ width: '35px', height: '35px' }} alt="icon" /></div>}
                <div className='col-3  px-4 my-auto' style={{ fontSize: '28px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Cash Advance</div>
                <div className='col-3    ml-n5 pr-5 my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                    You can use credit cards if you are running out of money
                    </div>
            </div>
            <div className="row mt-3 mb-5 pl-3">
                {<div className='col-auto my-auto'><img src={icon4} style={{ width: '35px', height: '35px' }} alt="icon" /></div>}
                <div className='col-3  px-4 my-auto' style={{ fontSize: '28px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Special Offers</div>
                <div className='col-3    ml-n5 pr-5 my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                    Companies give unbelievable offers for credit card purchases
                    </div>
            </div>
            <div className="row mt-3 mb-5 pl-3">
                {<div className='col-auto my-auto'><img src={icon4} style={{ width: '35px', height: '35px' }} alt="icon" /></div>}
                <div className='col-3  px-4 my-auto' style={{ fontSize: '28px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Less Cash onHand</div>
                <div className='col-3    ml-n5 pr-5 my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                    Less cash in your pocket and increased security
                </div>
            </div>
            <div className="row mt-3 mb-3 pl-3">
                {<div className='col-auto my-auto'><img src={icon4} style={{ width: '35px', height: '35px' }} alt="icon" /></div>}
                <div className='col-3  px-4 my-auto' style={{ fontSize: '28px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Interest Free Period</div>
                <div className='col-3   ml-n5 pr-5 my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                    You don’t have to pay anything if you are  settling the advance on time
                    </div>
            </div>


        </div>
    );
}

export default Section3;