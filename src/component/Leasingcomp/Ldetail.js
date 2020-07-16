import React from 'react';
import './Ldetail.css'
import imglease1 from '../../assests/By my car-amico.svg';
import imglease2 from '../../assests/By my car-rafiki.svg';
import imglease3 from '../../assests/Starman-pana.svg';
import imglease4 from '../../assests/219759-P16YLZ-391.jpg';
import Button from 'react-bootstrap/Button'

function Detail() {
    return (



        <div className='container-fluid h-auto mt-5'>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>

                <div className='col-6 pt-5 pb-5'>
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Lower Monthly Payments
                    </p>
                    <p class='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        You will have to pay a lower monthly payment than paying for a loan.
                        But this depends on the credit rating of that individual.
                        If he is struggling with his credit he won’t get a good rate than one with a good credit rating.
                    </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>
                    <img src={imglease1} alt='image1' className='position-absolute leasing-bigpic-card-row-1'></img>
                </div>
            </div>
            <div className='row p-5 bg-white' >
                <div className='col-6'>
                    <img src={imglease2} alt='image1' className='position-absolute leasing-bigpic-card-row-2'></img>
                </div>
                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Less initial cash requirement
                    </p>
                    <p class='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        You don’t have to keep a security or spend a huge amount of upfront initial cost to drive a car.
                        Companies will be benefited by this having a less amount of capital tied upfront.
                        Less Capital expenditure required.
                    </p>
                    <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>

            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Can drive a better car
                    </p>
                    <p class='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        You can drive a better car even if you have a small amount in hand.
                        You can afford a better car for less money if you are going for a leasing option.
                     </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>
                    <img src={imglease3} alt='image1' className='position-absolute leasing-bigpic-card-row-3'></img>
                </div>
            </div>
            <div className='row p-5 bg-white'>
                <div className='col-6'>
                    <img src={imglease4} alt='image1' className='position-absolute leasing-bigpic-card-row-4'></img>
                </div>
                <div className='col-6 pt-5 ' style={{ paddingBottom: '7rem' }}>
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Easy Transition
                    </p>
                    <p className='pb-5 mb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        You can easily switch to a new car from time to time. Don’t worry about selling
                    </p>
                    <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>

                </div>
            </div>
        </div>
    );
}


export default Detail;