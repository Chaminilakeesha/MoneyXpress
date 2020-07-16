import React from 'react';
import Button from 'react-bootstrap/Button'
import save from '../../assests/Power Saver Savings Account.png'



function Savenow() {
    return (
        <div className='container-fluid h-auto'>
            <div className='row pb-5 px-5' >

                <div className="col-6 pb-5 mt-5" style={{ paddingLeft: '7rem' }}>

                    <div className=" my-5" style={{ fontSize: '38px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>START SAVING NOW!</div>

                    <p style={{ fontSize: '25px', fontFamily: 'Poppins-Regular' }}>
                        Most financial institutions offer,
                    </p>

                    <ul className='pb-5 ml-n3 ' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        <li>Online banking Facilities</li>
                        <li>Mobile banking facilities</li>
                        <li>Debit Cards for online shopping</li>
                        <li>E - Statements</li>
                        <li>SMS alerts</li>
                    </ul>
                    <Button style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px', fontFamily: 'Poppins-Regular' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>
                    <img src={save} alt='image1' style={{ width: '55rem', marginLeft: '-10%' }}></img>
                </div>
            </div>
        </div>
    );
}

export default Savenow;