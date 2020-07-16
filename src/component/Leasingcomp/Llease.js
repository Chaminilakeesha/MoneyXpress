
import React from 'react';
import car from '../../assests/icons8-sedan-100.png';
import engine from '../../assests/icons8-automotive-generator-64.png';
import lorry from '../../assests/icons8-fork-lift-64.png';


function Lease() {
    return (
        <div class='container-fluid h-auto bg-white mb-4 '>
            <div class='text-center pt-5 pb-4' style={{ fontSize: '38px', fontFamily: 'PlayfairDisplay-Regular', color: '#414E63', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)' }}>
                What you can apply for a lease to buy
            </div>
            <div class='row mt-4 mx-5 pb-5'>
                <div class='col mx-5  text-center'>
                    <img src={car} style={{ height: '105px', width: '105px' }} alt='car'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Vehicles</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        Brand new, Reconditioned or Registered vehicle
                    </p>
                </div>
                <div class='col mx-5 text-center'>
                    <img src={engine} style={{ height: '105px', width: '105px' }} alt='engine'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Equipments or Appliances</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        Brand new or used equipments or appliances upto  certain years from date of manufacture
                    </p>
                </div>
                <div class='col mx-5 text-center'>
                    <img src={lorry} style={{ height: '105px', width: '105px' }} alt='lorry'></img>
                    <p style={{ fontSize: '28px', color: '#1555BA', textShadow: '0px 6px 6px rgba(00, 00, 00, 16%)', fontFamily: 'Poppins-Medium' }}>Machinery</p>
                    <p style={{ fontSize: '18px', color: '#414E63', fontFamily: 'Poppins-Regular' }}>
                        Brand new or used machinery upto  certain years from date of manufacture
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Lease;