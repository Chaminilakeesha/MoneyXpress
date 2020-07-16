import React from 'react';
import './CC1Section4.css'

import img1 from '../../assests/Credit card-rafiki.svg'
import img2 from '../../assests/Credit Card Payment-pana.svg'
import img3 from '../../assests/Credit Card Payment-bro.svg'
import Button from 'react-bootstrap/Button'

function Section4() {
    return (
        <div className='container-fluid h-auto '>
            <div className='row p-5'>

                <div className='col-6 pt-5' style={{ paddingBottom: '7rem' }}>
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Premium Credit Cards
                    </p>
                    <p className='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Premium credit cards offer a comprehensive range of value added products,
                        services and privileges which are completely at your disposal to experience
                        the power to do more with higher credit limits and amazing features and benefits
                    </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>

                    <img src={img1} alt='image1' className='position-absolute mid-dis-card-row-col-1'></img>

                </div>
            </div>
            <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
                <div className='col-6'>

                    <img src={img2} alt='image2' className='position-absolute  mid-dis-card-row-col-2'></img>

                </div>
                <div className='col-6 pt-5 ' style={{ paddingBottom: '7rem' }}>
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Credit Cards
                    </p>
                    <p class='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Convenience, speed and security. These features have been the benchmarks
                        of the credit cards with amazing offers and discounts. Access to Easy instalment plan
                        options and other range of benefitsoffered to the credit card holders. Less requirements needed.
                    </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
            </div>
            <div className='row p-5 '>

                <div className='col-6 pt-5 ' style={{ paddingBottom: '7rem' }}>
                    <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>
                        Debit Card
                    </p>
                    <p className='pb-5' style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Debit Card is the easiest and most convenient way to purchase goods and services from any
                        outlet. Now you have access to your money 24x7 with your debit cards. Whether you want to
                        pay the utility bills or to shop online you can do
                        it with ease with the debit cards offers by the financial institutions.
                    </p>
                    <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }}>
                        Explore
                    </Button>
                </div>
                <div className='col-6'>

                    <img src={img3} alt='image3' className='position-absolute mid-dis-card-row-col-3'></img>

                </div>
            </div>

        </div>
    );
}

export default Section4;