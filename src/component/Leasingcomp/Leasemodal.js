import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import cardimg from '../../assests/icons8-bank-cards-160.png'
import { Link } from 'react-router-dom';

function Leasemodal() {
    const [show3, setShow3] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <><div className='col-3 text-center offset-9' >
            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} onClick={() => setShow3(true)}>
                Compare Rates
        </Button></div>

            <Modal
                show={show3}
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
                            <Form.Group as={Row} controlId="modal-lease-type" style={{ fontSize: '20px' }} >
                                <Form.Label className='col-2 offset-3' style={{ fontFamily: 'Poppins-Medium' }}>Type</Form.Label>
                                <Form.Control as="select" className='col-4 ' size="md" custom style={{ boxShadow: '0px 4px 8px #AAAAAA', fontFamily: 'Poppins-Regular', border: '#707070' }}>
                                    <option value="0">Choose...</option>
                                    <option value="1">Vehicle Leasing</option>
                                    <option value="2">Other leasing</option>
                                </Form.Control>
                            </Form.Group>

                            <div className='row px-5 mt-5'>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-lease-amount' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-2  pl-3 '>Amount</Form.Label>
                                        <Form.Control className='col-6 offset-1' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} />
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} controlId='Form-lease-term' style={{ fontSize: '20px', fontFamily: 'Poppins-Medium' }}>
                                        <Form.Label className='col-2  pl-3 '>Term</Form.Label>
                                        <Form.Control className='col-6 offset-1' style={{ boxShadow: '0px 4px 8px #AAAAAA', border: '#707070', fontFamily: 'Poppins-Regular' }} />
                                        <div class="w-100"></div>
                                        <span className='col-1 offset-3 mt-3 ' style={{ fontFamily: 'Poppins-Regular' }}>years</span>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                        <div className='row'>
                            <div className='col-8  my-4 offset-2 text-center' style={{ fontFamily: 'Poppins-Medium' }}>
                                I hereby accept that by pressing this button
                                I agree all &nbsp;
                                <a href='//#region ' style={{ color: '#426abb' }}>rules and regulations.</a>
                            </div>
                        </div>
                        <div className='row mb-5 pr-5 justify-content-end'>
                            <Button style={{ border: 'none', color: 'white', fontFamily: 'Poppins-Regular', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} ><Link style={{ textDecoration: 'none', color: 'white' }} onClick={scrollTop} to="/leasingpage2">Compare rates</Link></Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default Leasemodal;