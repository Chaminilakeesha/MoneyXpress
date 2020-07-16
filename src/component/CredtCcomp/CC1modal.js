import React, { useState } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import cardimg from '../../assests/icons8-bank-cards-160.png'
import { Link } from 'react-router-dom';

function CCmodal() {
    const [show1, setShow1] = useState(false);
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }



    return (
        <><div className='col-3 text-center offset-9' >
            <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} onClick={() => setShow1(true)}>
                Compare Rates
        </Button></div>

            <Modal
                show={show1}
                size="xl"

                centered

                aria-labelledby="example-custom-modal-styling-title"

            >

                <Modal.Body  >
                    <div className='  h-auto'>
                        <div className='row px-5'>
                            <div className='col-1 offset-9 text-right'>
                                <img src={cardimg} style={{ height: '7rem', width: '6rem' }} alt='card' />
                            </div>
                            <div className='col-2 text-center my-auto' style={{ fontSize: '19px', fontFamily: 'Poppins-Medium' }}>
                                Related Entries<br />
                                <span style={{ fontSize: '30px', fontFamily: 'Poppins-Regular' }}>88</span>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='px-5 mb-5 ' style={{ fontSize: '23px', color: '#012169', fontFamily: 'Poppins-Regular' }}>You can choose whether you want to fill the details. The more details filled more accurate results you
                            will get. Preferred institution will be shown first as the result.</p>
                        </div>
                        <Form>
                            <Form.Group as={Row} controlId="modal-credit-card-type" style={{ fontSize: '20px' }} >
                                <Form.Label className='col-2 offset-2' style={{ fontFamily: 'Poppins-Medium' }}>Type</Form.Label>
                                <Form.Control as="select" className='col-4 offset-1' size="md" custom style={{ boxShadow: '0px 4px 8px #AAAAAA', fontFamily: 'Poppins-Regular', border: '#707070' }}>

                                    <option selected disabled>Choose...</option>
                                    <option value="1">Premium/ Corporate Credit Cards</option>
                                    <option value="2">Credit Cards</option>
                                    <option value="3">Debit Cards</option>

                                </Form.Control>

                            </Form.Group>
                            <Form.Group as={Row} controlId="modal-credit-card-pref-bank" style={{ fontSize: '20px' }}>
                                <Form.Label className='col-2 offset-2' style={{ fontFamily: 'Poppins-Medium' }}>Preferred Bank</Form.Label>
                                <Form.Control className='col-4 offset-1' as="select" size="md" custom style={{ boxShadow: '0px 4px 8px #AAAAAA', fontFamily: 'Poppins-Regular', border: '#707070' }}>

                                    <option selected disabled>Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className='row text-center'>
                            <div className='col- 8 pl-4 offset-2  ' style={{ fontFamily: 'Poppins-Regular' }}>
                                I hereby accept that by pressing this button
                                I agree all &nbsp;<a href='//#region ' style={{ color: '#426abb' }}>rules and regulations.</a>
                            </div>
                        </div>
                        <div className='row mb-5 pr-5 justify-content-end'>
                            <Button style={{ border: 'none', fontFamily: 'Poppins-Regular', color: 'white', backgroundColor: '#3470D1', padding: '10px 20px 10px 20px', fontSize: '20px', borderRadius: '999px' }} >
                                <Link style={{ textDecoration: 'none', color: 'white' }} onClick={scrollTop} to="/creditcardpage2">Compare rates</Link></Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default CCmodal;