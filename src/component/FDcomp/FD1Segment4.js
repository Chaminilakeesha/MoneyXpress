import React from 'react';
import './FD1Segment4.css';
import imgtop1 from '../../assests/Browser stats-pana.svg';
import imgtop2 from '../../assests/3700387.jpg';
import imgtop3 from '../../assests/5522.jpg';
import imgtop4 from '../../assests/2319496.jpg';

function Segment4() {
    return (
        <div className='container-fluid h-auto mt-5'>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgtop1} alt='image1' className='position-absolute fd-bigpic-card-row-1'></img>
                </div>
                <div className='col-6 py-5'>
                    <p style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular' }}>Term</p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD is a Fixed Deposit, which is a type of savings account,
                        found at banks and finance companies, that pays a set interest rate on money deposited.
                        In exchange, you agree to keep the full deposit in the account for a set term.
                        Common terms include 6, 12, 18, 24, 36, 48 and 60 months.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        Choose your FD length wisely. The duration of FDs typically determines the rate;
                        the longer the term, the better your CD interest rate will be. Luckily,
                        FD rates come in a wide variety of terms. So choose it wisely.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD could be a good place to store money when you’re setting aside for a specific goal,
                        like saving for a down payment on a house or a new car.
                        Tying up money in a FD for 12 months or two years could be one way to stop yourself
                        from dipping into your savings prematurely
                    </p>
                </div>
            </div>
            <div className='row p-5 bg-white' >
                <div className='col-6 py-5'>
                    <p style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular' }}>Amount</p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD is a Fixed Deposit, which is a type of savings account,
                        found at banks and finance companies, that pays a set interest rate on money deposited.
                        In exchange, you agree to keep the full deposit in the account for a set term.
                        Common terms include 6, 12, 18, 24, 36, 48 and 60 months.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        Choose your FD length wisely. The duration of FDs typically determines the rate;
                        the longer the term, the better your CD interest rate will be. Luckily,
                        FD rates come in a wide variety of terms. So choose it wisely.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD could be a good place to store money when you’re setting aside for a specific goal,
                        like saving for a down payment on a house or a new car.
                        Tying up money in a FD for 12 months or two years could be one way to stop yourself
                        from dipping into your savings prematurely
                    </p>

                </div>
                <div className='col-6'>
                    <img src={imgtop2} alt='image1' className='position-absolute fd-bigpic-card-row-2'></img>
                </div>
            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgtop3} alt='image1' className='position-absolute fd-bigpic-card-row-3'></img>
                </div>
                <div className='col-6 py-5'>
                    <p style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular' }}>Withdrawal</p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD is a Fixed Deposit, which is a type of savings account,
                        found at banks and finance companies, that pays a set interest rate on money deposited.
                        In exchange, you agree to keep the full deposit in the account for a set term.
                        Common terms include 6, 12, 18, 24, 36, 48 and 60 months.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        Choose your FD length wisely. The duration of FDs typically determines the rate;
                        the longer the term, the better your CD interest rate will be. Luckily,
                        FD rates come in a wide variety of terms. So choose it wisely.
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                        A FD could be a good place to store money when you’re setting aside for a specific goal,
                        like saving for a down payment on a house or a new car.
                        Tying up money in a FD for 12 months or two years could be one way to stop yourself
                        from dipping into your savings prematurely
                    </p>
                </div>
            </div>
            <div className='row p-5 bg-white'>
                <div className='col-6 py-5'>
                    <p className='my-5 py-5' style={{ fontSize: '25px', fontFamily: 'Poppins-Regular' }}>
                        “A Fixed Deposit is a fine choice if you have a specific cash need at a future date.
                        Invest your money with complete safety,
                        a known return and a defined time frame for when you’ll get that money.”
                    </p>
                </div>
                <div className='col-6'>
                    <img src={imgtop4} alt='image1' className='position-absolute fd-bigpic-card-row-4'></img>
                </div>
            </div>

        </div>
    );
}

export default Segment4;