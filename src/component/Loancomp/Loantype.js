import React from 'react';
import './Loantype.css'
import imgloan1 from '../../assests/Businessman-pana.png';
import imgloan2 from '../../assests/2953959.jpg';
import imgloan3 from '../../assests/Stay at home-amico.svg';
import imgloan4 from '../../assests/By my car-pana.svg';
import Button from 'react-bootstrap/Button'

function Loantype() {
    return (



        <div className='container-fluid h-auto mt-5'>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgloan1} alt='image1' className='position-absolute loanmain-bigpic-card-row-1'></img>
                </div>
                <div className='col-6 pt-5 pb-5'>
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Personal Loans
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        A personal loan is money you borrow and pay back with interest over multiple years.
                        You can use the loan for almost any purpose.
                    </p>
                    <p className='pb-5' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        A personal loan is a type of unsecured loan and helps you meet your current financial needs.
                        You don’t usually need to pledge any security or collateral while availing a personal
                        loan and your lender provides you with the flexibility to use the funds as per your need.
                    </p>
                    <Button style={{ fontFamily: 'Poppins-Regular', border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>

            </div>
            <div className='row p-5 bg-white' >

                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Educational Loans
                    </p>
                    <p class='pb-5' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        Education loans are basically a form of monetary assistance availed by students to meet
                        the expenses associated with their studies. Education loans can be taken by means of funding, scholarships, financing and rewards,
                        and are granted in cash, which has to be repaid to the lender along with a rate of interest.
                    </p>
                    <Button style={{ fontFamily: 'Poppins-Regular', border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>
                    <img src={imgloan2} alt='image1' className='position-absolute loanmain-bigpic-card-row-2'></img>
                </div>
            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgloan3} alt='image1' className='position-absolute loanmain-bigpic-card-row-3'></img>
                </div>
                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Home Loans
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        Building a home for your family is bound to be an emotional process.
                        Whether you are moving to a new place or simply redecorating, we will give you peace
                        of mind as you take the first steps towards creating your dream home.
                    </p>
                    <p class='pb-5' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        You can use home loans to purchase or construct a house, purchase a land, renovate,
                        extend or complete an existing house, settle an existing housing loan, home improvements
                        or to purchase a condominium.

                     </p>
                    <Button style={{ fontFamily: 'Poppins-Regular', border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>

            </div>
            <div className='row p-5 bg-white'>

                <div className='col-6 pt-5 ' style={{ paddingBottom: '7rem' }}>
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Vehicle Loans
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        Buying your first car sure is tough. That’s why we want to help you to find the best loans
                        to have the ride of your life.  Whether its city streets, rocky terrains or adventure trails
                        how you the best loans to get you behind the wheel.
                    </p>
                    <p className='pb-5 mb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        With a car loan, you borrow a fixed sum, then repay it in fixed monthly payments, usually over a period of
                        one to five years. Rates vary depending on how much you’re borrowing.
                    </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>

                </div>
                <div className='col-6'>
                    <img src={imgloan4} alt='image1' className='position-absolute loanmain-bigpic-card-row-4'></img>
                </div>
            </div>
        </div>
    );
}


export default Loantype;