import React from 'react';
import './Accounttype.css'
import imgsave1 from '../../assests/Children playing in the pool-amico.svg';
import imgsave2 from '../../assests/2663543.jpg';
import imgsave3 from '../../assests/3879088.jpg';
import imgsave4 from '../../assests/5240.jpg';
import Button from 'react-bootstrap/Button'


function Acctype() {
    return (
        <div className='container-fluid h-auto mt-5'>

            <div className='row p-5 bg-white' >

                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Power Saver Accounts
                    </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        This is a savings account where to earn the highest
                        interest rate, you must meet the bank’s conditions, such as:
                    </p>
                    <ul class='pb-5 ml-n3' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        <li>Depositing a certain amount of money into the account each month</li>
                        <li>Making minimal withdrawals (or no withdrawals) from your savings account each month</li>
                        <li>Keeping the balance of your savings account above a certain amount</li>
                        <li>Using another of the lender’s products, such as a credit card</li>
                    </ul>
                    <Button style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', fontFamily: 'Poppins-Regular', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>
                    <img src={imgsave2} alt='image1' className='position-absolute savings-bigpic-card-row-1'></img>
                </div>
            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgsave3} alt='image1' className='position-absolute savings-bigpic-card-row-2'></img>
                </div>
                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Senior Citizen Accounts
                    </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Designed exclusively for senior citizens to provide them with the best financial care
                        and convenience coupled with attractive interest rates.
                    </p>

                    <ul class='pb-5 ml-n3' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        <li> Senior citizens 60 years and above are eligible to open this account</li>
                        <li>A special interest rate which is higher than the normal interest rate offered</li>
                        <li>Debit Card free of charge</li>
                        <li>No more wait in the queues. Will receive a priority service</li>
                    </ul>
                    <Button style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', fontFamily: 'Poppins-Regular', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>

            </div>
            <div className='row p-5 bg-white'>

                <div className='col-6 pt-5 ' style={{ paddingBottom: '7rem' }} >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Regular Savings Account
                    </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        What makes Regular Savings so special is the flexibility and the convenience it offers.
                    </p>
                    <ul class='pb-5 ml-n3' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        <li>Online Banking Facilities</li>
                        <li>Mobile Banking Facilities</li>
                        <li>Islandwide 24x7 ATMs to withdraw money</li>
                        <li>Debit cards issued to make online purchases</li>
                    </ul>
                    <Button style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', fontFamily: 'Poppins-Regular', borderRadius: '999px' }}>
                        Explore
                    </Button>

                </div>
                <div className='col-6'>
                    <img src={imgsave4} alt='image1' className='position-absolute savings-bigpic-card-row-3'></img>
                </div>
            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>
                    <img src={imgsave1} alt='image1' className='position-absolute savings-bigpic-card-row-4'></img>
                </div>
                <div className='col-6 pt-5 pb-5' >
                    <p className='py-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
                        Minor and Youth Savings Account
                    </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Saving is a great habit to teach children. The sooner they learn about financial
                        discipline and delayed gratification, the sooner they can start building wealth.
                        The more they develop their financial literacy, the easier they’ll find
                        it to understand more complicated products and strategies later in life.
                    </p>
                    <p className='pb-5 ' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>

                        Most financial institutions offer,
                        <ul class='pb-5 ml-n3' >
                            <li>Special gifts for the amounts deposited</li>
                            <li>Free debit Card</li>
                            <li>Free e-passbook facilities</li>
                            <li> Free mobile banking facilities</li>
                        </ul> </p>

                    <Button style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', fontFamily: 'Poppins-Regular', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>

            </div>
        </div>
    );
}


export default Acctype;