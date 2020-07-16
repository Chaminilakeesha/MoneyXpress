import React from 'react';
import Steppers from './Stepper'


function Inforfrom() {
    return (
        <div className=' h-auto' >
            <div className='h-auto w-100 p-5' style={{ backgroundColor: '#012169', color: 'white' }}>
                <p className='ml-5 ' style={{ fontSize: '20px' }}>Compare Fixed Deposits</p>
                <p className='ml-5 mt-n2' style={{ fontSize: '40px' }}>Invest Now in a Fixed Deposit</p>
            </div>
            <div className='h-auto w-100 p-5' style={{ backgroundColor: '#b8d4e7' }}>
                <div className=' w-50 mx-auto h-auto p-5 bg-white'>
                    <Steppers></Steppers>
                </div>
                <div className='m-5' >
                    <p className='text-center'>Why are we asking these Questions?</p>
                </div>
            </div>
        </div>
    );
}

export default Inforfrom;