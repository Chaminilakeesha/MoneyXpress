import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import cardimg from '../../assests/icons8-bank-cards-160.png'
import { Link } from 'react-router-dom';

function Loanmodal() {
    const [show4, setShow4] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <><div className='col-3 text-center offset-9' >
            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} onClick={() => setShow4(true)}>
                Compare Rates
        </Button></div>

            <Modal
                show={show4}
                size="xl"

                centered
                aria-labelledby="example-custom-modal-styling-title"

            >

                <Modal.Body  >
                    <div className=' h-auto'>
                        <div className='row'>
                            <div className='col-1 offset-9 text-right'>
                                <img src={cardimg} style={{ height: '7rem', width: '6rem' }} alt='card' />
                            </div>
                            <div className='col-2 text-center my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                Realted Entries<br />
                                <span style={{ fontSize: '30px' }}>88</span>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='px-5 mb-5' style={{ fontSize: '23px', color: '#012169', fontFamily: 'Poppins-Regular', }}>You can choose whether you want to fill the details. The more details filled more accurate results you
                            will get. Preferred institution will be shown first as the result.</p>
                        </div>
                        <Form>
                            <Form.Group as={Row} controlId="modal-loan-type" style={{ fontSize: '20px' }} >
                                <Form.Label className='col-2 offset-3' style={{ fontFamily: 'Poppins-Medium' }}>Type</Form.Label>
                                <Form.Control as="select" className='col-4 ' size="md" style={{ boxShadow: '0px 4px 8px #AAAAAA', fontFamily: 'Poppins-Regular', border: '#707070' }}>
                                    <option selected disabled>Choose...</option>
                                    <option value="1">Personal loans</option>
                                    <option value="2">Education loans</option>
                                    <option value="3">Home Loans</option>
                                    <option value="4">Vehicle Loans</option>
                                </Form.Control>
                            </Form.Group>
                            <div className='row pt-3 px-5'>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loan-salary-amount' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5  pl-3 '>Salary Range</Form.Label>
                                        <Form.Control as="select" className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} >
                                            <option selected disabled>Choose...</option>
                                            <option value="1">30,000-49,999</option>
                                            <option value="2">50,000-99,999</option>
                                            <option value="3">100,000+</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loan-rate-type' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5 offset-1 pl-3 '>Rate Type</Form.Label>
                                        <Form.Control as="select" className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} >
                                            <option selected disabled>Choose...</option>
                                            <option value="1">Fixed Rate</option>
                                            <option value="2">Floating Rate</option>
                                        </Form.Control>

                                    </Form.Group>
                                </div>
                            </div><div className='row pt-3 px-5'>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loan-pref-bank' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5  pl-3 '>Preferred Bank</Form.Label>
                                        <Form.Control as="select" className='col-6' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} >
                                            <option selected disabled>Choose...</option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loan-pref-leas-com' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5 offset-1 pl-3 '>Preferred Leasing Company</Form.Label>
                                        <Form.Control as="select" className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} >
                                            <option selected disabled>Choose...</option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row px-5 '>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loanmodal-amount' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5  pl-3  '>Amount</Form.Label>
                                        <Form.Control className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} />
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-loanmodal-term' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-5 offset-1 pl-3'>Term</Form.Label>
                                        <Form.Control className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} />
                                        <div class="w-100"></div>
                                        <span className='col-1 offset-6  mt-3 ' style={{ fontFamily: 'Poppins-Regular' }}>years</span>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                        <div className='row'>
                            <div className='col-8 my-2 offset-2 text-center' style={{ fontFamily: 'Poppins-Medium' }}>
                                I hereby accept that by pressing this button
                                I agree all &nbsp;
                                <a href='//#region ' style={{ color: '#426abb' }}>rules and regulations.</a>
                            </div>
                        </div>
                        <div className='row mb-3 pr-5 justify-content-end'>
                            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} ><Link style={{ textDecoration: 'none', color: 'white' }} onClick={scrollTop} to="/loanpage2">Compare rates</Link></Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default Loanmodal;