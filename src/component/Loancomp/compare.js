import React from 'react';

function Compare() {
    return (
        <div className="container-fluid h-auto " style={{ backgroundColor: "#F4F9FF", color: "black" }}>
            <div className='row p-5'>
                <div className='col-5'>
                    <p className="text-center pb-4" style={{ fontSize: '35px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Secured Loans</p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        A secured loan is one that is protected by an asset or property, also   called collateral.
                        If you default on a secured loan or don’t make payments according to the terms of the
                        loan, the lender has the right to take ownership of the collateral.
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        The most common kinds of secured loan are a mortgage (where the property is the collateral)
                        car loan (where the vehicle is the collateral.)
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        Main advantage is that the interest rates are very low compared to unsecured loans.
                    </p>
                </div>
                <div className='col-2 align-self-center'>
                    <p className='text-center font-weight-bold' style={{ fontSize: '5rem', fontFamily: 'Poppins-Medium' }}>VS</p>
                </div>
                <div className='col-5'>
                    <p className="text-center pb-4" style={{ fontSize: '35px', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'PlayfairDisplay-Regular' }}>Unsecured Loans</p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        An unsecured loan, on the other hand, isn’t connected to any kind of asset. If you don’t
                        make payments on your unsecured loan, the lender doesn’t immediately have the right to take
                        any of your assets.
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        A credit card, student loan or personal loan are the most common kinds of an unsecured loan.
                    </p>
                    <p style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        Main disadvantage is that the interest rates are high when compared to secured Loans.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Compare;