import React from 'react';
import car1 from '../../assests/icons8-car-64.png';
import coin from '../../assests/icons8-cash-100.png';
import exchange from '../../assests/icons8-data-transfer-100.png';


function Disad() {
    return (
        <div class='container-fluid h-auto  ' style={{ backgroundColor: '#F4F9FF' }}>
            <div class='text-center pb-4 pt-5' style={{ fontSize: '38px', fontFamily: 'PlayfairDisplay-Regular', color: '#414E63', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)' }}>
                Disadvantages of Leasing a car
            </div>
            <div class='row mt-4 mx-5 pb-5'>
                <div class='col mx-5  text-center'>
                    <img src={car1} style={{ height: '105px', width: '105px' }} alt='car1'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Ownership</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        You don’t own the car. The ownership is with the lessor who is giving you the leasing facility.
                    </p>
                </div>
                <div class='col mx-5 text-center'>
                    <img src={coin} style={{ height: '105px', width: '105px' }} alt='coin'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Insurance Cost</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        You won’t be able to go for a third party insurance option if you are going for a leasing
                    </p>
                </div>
                <div class='col mx-5 text-center'>
                    <img src={exchange} style={{ height: '105px', width: '105px' }} alt='exchange'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Termination Costs</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        Termination costs will be high if you are planning to terminate the lease agreement .
                    </p>
                </div>
            </div>


        </div>
    );
}
export default Disad;