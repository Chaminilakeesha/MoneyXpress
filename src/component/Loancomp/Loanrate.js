
import React from 'react';
import renew from '../../assests/icons8-renew-50.png';
import document from '../../assests/icons8-document-128.png';
import detail from '../../assests/icons8-more-details-100.png';


function Loanrate() {
    return (

        <div className="container-fluid h-auto pb-5 bg-white">

            <div className="text-center my-5" style={{ fontSize: '38px', color: '#414E63', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>How to get the best rates for your loans</div>

            <div className="row text-center">
                <div className='col'>
                    <img src={renew} style={{ height: '120px', width: '120px' }} alt="renew" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Loan Term & Amount</div>
                    <p className='mx-5 ' style={{ fontFamily: 'Poppins-Regular', fontSize: '18px', color: 'black' }}>
                        Choose the loan amount and terms wisely, so you won’t get into trouble.
                        Check with our calculator.
                        </p>
                </div>
                <div className='col'>
                    <img src={document} className="my-3" style={{ height: '90px', width: '90px' }} alt="document" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Compare Quotes</div>
                    <p className='mx-5 ' style={{ fontFamily: 'Poppins-Regular', fontSize: '18px', color: 'black' }}>
                        Read all the documentations and policies they offer before taking it.
                        </p>
                </div>
                <div className='col'>

                    <img src={detail} style={{ height: '120px', width: '120px' }} alt="detail" />
                    <div className='py-1' style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Accurate Details </div>
                    <p className='mx-5 ' style={{ fontFamily: 'Poppins-Regular', fontSize: '18px', color: 'black' }}>
                        Give us accurate details to provide the best tailor made solution for you.
                        </p>
                </div>
            </div>

        </div>
    );
}
export default Loanrate;