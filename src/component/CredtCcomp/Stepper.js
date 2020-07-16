import React, { useState } from 'react';



function Stepper() {
    const [step, setStep] = useState([true, false, false]);
    const showStepper = (no) => {
        switch (no) {

            case 0: setStep([false, true, false]); break;
            case 1: setStep([false, false, true]); break;
            default: setStep([true, false, false]); break;
        }
    }
    const bank = [
        { request: "Commercial Bank", type: "Regular Savings", account: "Regular Savings Account" }
    ];
    ;
    const listItems = bank.map((x) =>
        <tr>
            <td key={x.id}>{x.request}</td>
            <td key={x.id}>{x.type}</td>
            <td key={x.id}>{x.account}</td>
        </tr>
    );
    return (
        <div className='container-fluid ' >



            {step[0] &&
                <div className='row' >
                    <div className='col-2' style={{ backgroundColor: '#436f98', fontFamily: 'PlayfairDisplay-Regular', fontSize: '25px' }}>
                        <div className='row bg-white ' style={{ height: '167px' }}>
                            <p className='text-center '>1<br />
                                User Details</p>
                        </div>
                        <div className='row' style={{ height: '167px' }}>
                            <p className='text-center '>2<br />
                                Request Details</p>
                        </div>
                        <div className='row' style={{ height: '167px' }}>
                            <p className='text-center '>3<br />
                                Time to Contact</p>
                        </div>
                    </div>
                    <div className='col' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                        <div style={{ height: '470px' }}>

                            <div class="form-group">
                                <label for="Name">Name</label>
                                <input type="text" class="form-control" id="Name" />
                            </div>
                            <div class="form-group">
                                <label for="Age">Age</label>
                                <input type="text" class="form-control" id="Age" />
                            </div>
                            <div class="form-group">
                                <label for="E-mail">E-mail</label>
                                <input type="email" class="form-control" id="E-mail" />
                            </div>
                            <div class="form-group">
                                <label for="Mobile">Mobile</label>
                                <input type="tel" class="form-control" id="Mobile" />
                            </div>
                            <div class="form-group">
                                <label for="City">City</label>
                                <input type="text" class="form-control" id="City" />
                            </div>
                        </div>
                        <div className='row ' >
                            <div className='col-2 offset-10 '>
                                <button className=' btn ' style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px' }} type='button' onClick={() => showStepper(0)}>Next</button ></div>
                        </div>
                    </div>
                </div>
            }
            {step[1] && <div className='row' >
                <div className='col-2' style={{ backgroundColor: '#436f98', fontFamily: 'PlayfairDisplay-Regular', fontSize: '25px' }}>
                    <div className='row  ' style={{ height: '167px' }}>
                        <p className='text-center '>1<br />
                                User Details</p>
                    </div>
                    <div className='row bg-white' style={{ height: '167px' }}>
                        <p className='text-center '>2<br />
                                Request Details</p>
                    </div>
                    <div className='row' style={{ height: '167px' }}>
                        <p className='text-center '>3<br />
                                Time to Contact</p>
                    </div>
                </div>
                <div className='col' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                    <div style={{ height: '470px' }}>
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Requested Bank</th>
                                    <th scope="col">Account Type</th>
                                    <th scope="col">Account Name</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '17px' }}>
                                {listItems}
                            </tbody>
                        </table>
                    </div>
                    <div className='row align-items-end'>
                        <div className='col-2 offset-8 '>
                            <button className=' btn ' style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px' }} type='button' onClick={() => showStepper()}>Back</button ></div>
                        <div className='col-2  '>
                            <button className=' btn ' style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px' }} type='button' onClick={() => showStepper(1)}>Next</button ></div>
                    </div>
                </div>

            </div>}
            {step[2] && <div className='row' >
                <div className='col-2' style={{ backgroundColor: '#436f98', fontFamily: 'PlayfairDisplay-Regular', fontSize: '25px' }}>
                    <div className='row  ' style={{ height: '167px' }}>
                        <p className='text-center '>1<br />
                                User Details</p>
                    </div>
                    <div className='row ' style={{ height: '167px' }}>
                        <p className='text-center '>2<br />
                                Request Details</p>
                    </div>
                    <div className='row bg-white' style={{ height: '167px' }}>
                        <p className='text-center '>3<br />
                                Time to Contact</p>
                    </div>
                </div>
                <div className='col' style={{ fontFamily: 'Poppins-Regular', fontSize: '20px' }}>
                    <div style={{ height: '470px' }}>
                        <div class="form-check col-3 offset-4 mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="weekdays" />
                            <label class="form-check-label" for="weekdays">
                                Weekdays
                        </label>
                        </div>
                        <div class="form-check col-3 offset-4 mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="weekends" />
                            <label class="form-check-label" for="weekends">
                                Weekends
                            </label>
                        </div>
                    </div>
                    <div className='row align-items-end'>
                        <div className='col-2 offset-8 '>
                            <button className=' btn ' style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px' }} type='button' onClick={() => showStepper(0)}>Back</button ></div>
                        <div className='col-2  '>
                            <button className=' btn ' style={{ border: 'none', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px' }} type='button' data-toggle="modal" data-target="#exampleModal">Finish</button ></div>
                    </div>
                </div>

            </div>}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title ml-5 my-3" id="exampleModalLabel">Thank you</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body m-5" style={{ fontSize: '20px', color: 'blue' }}>
                            Thank you for your request. We will send you an email
                            as soon as the bank decides the rates for you.
                            You can see the real time rates by logging
                            into you account under your pending requests.
      </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stepper;