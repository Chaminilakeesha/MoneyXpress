import React, { useState } from 'react';
import './savingsp2.css';
import './CardCredData.js';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardCredData from './CardCredData.js';
import CompCardSavingsData from './CompCardSavingsData.js';
import Form from 'react-bootstrap/Form'



export default function Savingsp2(props) {

    const [compshow, setCompShow] = useState(false);

    function onClickComp() {
        setCompShow(true);
        document.getElementById('comp').innerHTML = "Request"

    }

    function Tab1() {
        document.getElementById('tab1').style.textDecoration = "underline"
        document.getElementById('tab2').style.textDecoration = "none"
    }

    function Tab2() {
        document.getElementById('tab1').style.textDecoration = "none"
        document.getElementById('tab2').style.textDecoration = "underline"
    }



    return (
        <div className='w-100'>
            <div className="p-5 " style={{ backgroundColor: '#012169', color: 'white' }}>
                <span className='pl-4 pt-5' style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }}>Compare Fixed Deposits</span>
                <p className='pl-4' style={{ fontSize: '40px', fontFamily: 'PlayfairDisplay-Regular' }}>Invest Now in a Fixed Deposit</p>
            </div>
            <div className="row justify-content-center mb-3">
                <div className="row w-75 h-auto mt-n5 bg-white " style={{ borderStyle: 'groove', borderRadius: '20px' }}>


                    <div className=" pt-4 col-6 offset-3 ">
                        <p style={{ textAlign: "center", fontSize: '22px', fontFamily: 'Poppins-Medium' }}>Savings Type</p>
                        <div className="input-group input-group-md  mb-6">
                            <input type="text" className="form-control mb-5" placeholder="" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row mx-4 my-4">
                <div className="col-10 pl-5 offset-1">
                    <p style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }}>You can choose upto 4 banks. All your choices will added to the compare list and you can choose the best savings account
and apply.  The rate is not the sole thing you should look at when investing in a savings account.</p>
                </div>
            </div>
            <div className="row ml-5 ">
                <div className="col-7 ml-5"><p style={{ fontSize: '22px', fontFamily: 'Poppins-Medium' }}>Things you should look at when investing on a fixed deposit</p></div>
                <div className="col-4 ">
                    <Button style={{ fontSize: '22px', fontFamily: 'Poppins-Regular', borderRadius: '100px', backgroundColor: '#00A654' }} className="px-4 py-2" onClick={onClickComp}>
                        <span className='mr-2'>
                            <svg style={{ color: "white" }} class="bi bi-box-arrow-in-down" width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 8.146a.5.5 0 0 1 .708 0L8 10.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 8 1z" />
                                <path fill-rule="evenodd" d="M1.5 13.5A1.5 1.5 0 0 0 3 15h10a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13 4h-1.5a.5.5 0 0 0 0 1H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 3 5h1.5a.5.5 0 0 0 0-1H3a1.5 1.5 0 0 0-1.5 1.5v8z" />
                            </svg>
                        </span>
                        <span className=' mr-2 ml-1 ' style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }} id="comp">Compare</span>
                        <span className='  ml-1 ' style={{ fontSize: '25px', color: 'black', fontFamily: 'Poppins-Medium' }}>1/4</span>


                    </Button>

                </div>

            </div>



            {compshow && <div className="row">


                <div className="col-2" >
                    <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '40px 5px', width: "100%", textAlign: "center", border: 'none' }} >




                        <div style={{ fontFamily: 'Poppins-Medium', marginTop: "35px" }}>

                            <div className="my-5">Savings Rate</div>
                            {props.carddet.type == "Power Saver Account" && <div className="my-5">Bonus Rate</div>}
                            <div className="my-5">Minimum Deposit Amount</div>
                            <div className="my-5">Fitch Rating</div>


                        </div>



                    </Card>

                </div>




                <CompCardSavingsData type="Power Saver Account" category="bank" />


            </div>}




            <div >
                <Tab.Container defaultActiveKey="first">

                    <Nav className="pl-5 border-top border-bottom mt-4 py-3 mb-3" >
                        <Nav.Item className=" asd1 pl-4" style={{ fontFamily: 'Poppins-Medium', fontSize: '25px' }}>

                            <Nav.Link eventKey="first" id="tab1" onSelect={Tab1} style={{ backgroundColor: "white", textDecoration: "underline" }}>Banks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className=" asd1 pl-4" style={{ fontFamily: 'Poppins-Medium', fontSize: '25px' }}>

                            <Nav.Link eventKey="second" id="tab2" onSelect={Tab2} style={{ backgroundColor: "white" }}>Finance Companies</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Tab.Content style={{ fontFamily: 'Poppins-Regular' }}>
                        <Tab.Pane eventKey="first">
                            <div>

                                <div className="row ml-5">
                                    <div className="col-auto" ><h5>Sort Results by:</h5></div>
                                    <div className="col-3">
                                        {/* <select id="inputState" className="form-control" >
                                            <option selected style={{ color: "green" }}>Choose...</option>
                                            <option>Interest Rate</option>
                                            <option>Annual Fee</option>
                                            <option>Interest Free Period</option>
                                        </select> */}

                                        <Form>
                                            <Form.Control as="select" >
                                                <option selected>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form>
                                    </div>
                                </div>

                                <CardCredData type="Regular Savings Account" category="bank" />



                            </div>

                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <div>

                                <div className="row ml-5">
                                    <div className="col-auto" ><h5>Sort Results by:</h5></div>
                                    <div className="col-3">
                                        {/* <select id="inputState" className="form-control" >
                                            <option selected style={{ color: "green" }}>Choose...</option>
                                            <option>Interest Rate</option>
                                            <option>Annual Fee</option>
                                            <option>Interest Free Period</option>
                                        </select> */}

                                        <Form>
                                            <Form.Control as="select" >
                                                <option selected>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form>
                                    </div>
                                </div>

                                <CardCredData type="Power Saver Account" category="non-bank" />



                            </div>

                        </Tab.Pane>

                    </Tab.Content>

                </Tab.Container>
            </div >



        </div >


    );
}