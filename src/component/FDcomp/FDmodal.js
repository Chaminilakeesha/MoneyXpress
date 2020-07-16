import React, { useState } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import cardimg from '../../assests/icons8-bank-cards-160.png'
import { Link } from 'react-router-dom';

function FDmodal() {
    const [show2, setShow2] = useState(false);
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }


    return (
        <><div className='col-3 text-center offset-9' >
            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} onClick={() => setShow2(true)}>
                Compare Rates
        </Button></div>

            <Modal
                show={show2}
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
                            <div className='col-2 text-center my-auto' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium', }}>
                                Realted Entries<br />
                                <span style={{ fontSize: '30px' }}>88</span>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='px-5 mb-5 text-center' style={{ fontSize: '23px', color: '#012169', fontFamily: 'Poppins-Regular', }}>
                                You can choose whether you want to fill the details. The more details filled more accurate results you
                            will get. Preferred institution will be shown first as the result.</p>
                        </div>
                        <Form>


                            <Form.Group as={Row} controlId='Form-fdtype' style={{ fontSize: '20px' }}>

                                <Form.Label className='col-2 offset-3 ' style={{ fontFamily: 'Poppins-Medium' }}>Type</Form.Label>

                                <Form.Control className='col-4' as="select" size="md" style={{ fontFamily: 'Poppins-Regular', boxShadow: '0px 4px 8px #AAAAAA', border: '#707070' }}>
                                    <option selected disabled>Choose...</option>
                                    <option value='1'>Monthly</option>
                                    <option value='2'>Annually</option>
                                    <option value='3'>Maturity</option>
                                </Form.Control>
                            </Form.Group>
                            <div className='row pt-3 px-5'>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-fd-preferred-bank' style={{ fontSize: '19px' }}>

                                        <Form.Label className='col-5 pl-3' style={{ fontFamily: 'Poppins-Medium' }}>Preferred Bank</Form.Label>
                                        <Form.Control className='col-6 ' as="select" size="md" style={{ fontFamily: 'Poppins-Regular', boxShadow: '0px 4px 8px #AAAAAA', border: '#707070' }}>
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
                                    <Form.Group as={Row} controlId='Form-fd-preferred-leasing-com' style={{ fontSize: '19px' }}>

                                        <Form.Label className='col-5 offset-1 pl-3' style={{ fontFamily: 'Poppins-Medium' }}>Preferred Leasing Company</Form.Label>
                                        <Form.Control className='col-6 ' as="select" size="md" style={{ fontFamily: 'Poppins-Regular', boxShadow: '0px 4px 8px #AAAAAA', border: '#707070' }}>
                                            <option selected disabled>Choose...</option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row px-5 '>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-fd-amount' style={{ fontSize: '19px', fontFamily: 'Poppins-Medium' }}>

                                        <Form.Label className='col-5  '>Amount</Form.Label>
                                        <Form.Control className='col-6 ' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} />

                                    </Form.Group>
                                </div>

                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-fd-amount' style={{ fontSize: '19px' }}>
                                        <Form.Label className='col-3 offset-1 ' style={{ fontFamily: 'Poppins-Medium' }}>Term</Form.Label>
                                        <Form.Check className='col-3  ' style={{ fontFamily: 'Poppins-Regular' }} label="In years" type="radio" name='timeperiod' id={`inline-radio-1`} />
                                        <Form.Check className='col-3 offset-1 ' style={{ fontFamily: 'Poppins-Regular' }} label="In months" type="radio" name='timeperiod' id={`inline-radio-2`} />
                                    </Form.Group>
                                    <Form.Group as={Row} controlId='Form-fd-time-range' style={{ fontSize: '19px' }}>
                                        <Form.Control className='col-2 offset-3' as="select" size="md" style={{ fontFamily: 'Poppins-Regular', boxShadow: '0px 4px 8px #AAAAAA', border: '#707070' }}>

                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Form.Control>
                                        <Form.Label className='col-2  pl-3' style={{ fontFamily: 'Poppins-Medium', color: '#012169' }}>years</Form.Label>
                                        <Form.Control className='col-2 offset-1' as="select" size="md" style={{ fontFamily: 'Poppins-Regular', boxShadow: '0px 4px 8px #AAAAAA', border: '#707070' }}>

                                            <option value='1'>1</option>
                                            <option value='2'>3</option>
                                            <option value='3'>6</option>


                                        </Form.Control>
                                        <Form.Label className='col-2 pl-3' style={{ fontFamily: 'Poppins-Medium', color: '#012169' }}>months</Form.Label>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                        <div className='row'>
                            <div className='col-8 my-4 offset-2 text-center' style={{ fontFamily: 'Poppins-Medium' }}>
                                I hereby accept that by pressing this button
                                I agree all &nbsp;
                                <a href='//#region ' style={{ color: '#426abb' }}>rules and regulations.</a>
                            </div>
                        </div>



                        <div className='row mb-5 pr-5 justify-content-end'>
                            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} >
                                <Link style={{ textDecoration: 'none', color: 'white' }} onClick={scrollTop} to="/fixeddepositpage2">Compare rates</Link></Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default FDmodal;