import React from 'react';
import './FD1Segment7.css'
import think from '../../assests/Bankruptcy-pana.svg'



function Segment7() {
    return (
        <div className='container-fluid h-auto mt-5 '>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-5'>
                    <img src={think} alt='image1' className='position-absolute fd-page-think'></img>
                </div>
                <div className="col-7 pb-5 ">

                    <div className="text-center my-5" style={{ fontSize: '38px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Limitations of a Fixed Deposit</div>

                    <div className="row text-center ml-5">
                        <div className="col-5">

                            <div className='py-3 mx-4' style={{ fontSize: '27px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Need a minimum amount </div>
                            <p className='mx-4' style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                                Some financial institutions ask for a minimum deposit amount to invest in a fixed deposit.
                        </p>
                        </div>
                        <div className="col-5 offset-2">

                            <div className='py-3 mx-4' style={{ fontSize: '27px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Rates will not change</div>
                            <p className='mx-4' style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                                If the deposit rates are going up you will lose the opportunity
                                of enjoying the higher interest rate.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Segment7;