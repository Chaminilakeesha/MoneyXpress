
import React from 'react';
import Save4 from '../../assests/icons8-percentage-160.png'
import Save5 from '../../assests/icons8-coin-in-hand-128.png';
import Save6 from '../../assests/icons8-easy-80.png'


function Saveadva() {
    return (

        <div className="container-fluid h-auto py-5" style={{ backgroundColor: '#F4F9FF' }}>

            <div className="text-center mb-5" style={{ fontSize: '38px', color: '#414E63', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Advantages of Having a Savings Account</div>

            <div className="row text-center">
                <div className='col'>
                    <img src={Save4} style={{ height: '120px', width: '120px' }} alt="Save4" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Keep your Money Safe</div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        The simplest way for you to keep your money safe
                        </p>
                </div>
                <div className='col'>
                    <img src={Save5} className="my-3" style={{ height: '90px', width: '90px' }} alt="Save5" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Convenient Money Management</div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        24x7 access to cash with online banking and mobile banking facilities
                        </p>
                </div>
                <div className='col'>

                    <img src={Save6} style={{ height: '120px', width: '120px' }} alt="Save6" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Debit Card Facility </div>
                    <p className='mx-5 ' style={{ fontSize: '18px', color: 'black', fontFamily: 'Poppins-Regular' }}>
                        Pay all your utility bills and shop online with the debit card
                        </p>
                </div>
            </div>

        </div>
    );
}
export default Saveadva;