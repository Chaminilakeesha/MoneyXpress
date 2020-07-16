import React from 'react';
import './CC1Section1.css'
import CCmodal from './CC1modal'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from 'react-bootstrap/Table';
import Table1Data from '../Table1/Table1Data'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
/* import { Form, Row } from 'react-bootstrap'; */

function Section1() {

    const [card2, setCard2] = React.useState('');

    const handleChange2 = (event) => {
        setCard2(event.target.value);
    }
    return (
        <>
            <div className='container-fluid pb-5 px-5 h-auto credit-top-section-background' style={{ paddingTop: '7rem' }} >
                <br></br>
                <span className='pl-5 pt-5' style={{ fontSize: '25px', color: '#012169', fontFamily: 'Poppins-Regular' }}>Compare Credit Cards</span>
                <p className='pl-5' style={{ fontSize: '47px', color: '#414E63', fontFamily: 'PlayfairDisplay-Regular' }}>Choose the Best credit card for you</p>
                <div className='row pl-5 pt-5 pb-3'>
                    <div className='col-2 '>
                        <button type="button" class="btn btn-block" style={{ backgroundColor: '#EEEFF0', boxShadow: '0px 0px 20px rgba(00, 00, 00, 16%)', borderRadius: '60px' }}>
                            <span className='pt-3 pb-3' style={{ fontSize: '24px', color: '#012169', fontFamily: 'Poppins-Regular' }} >Card Comparison</span>
                        </button>
                    </div>

                </div>
                <div className='row pl-5 pt-5' style={{ paddingBottom: '8rem' }} >
                    <div className='col-2 '>
                        <button type="button" class="btn btn-block" style={{ backgroundColor: '#EEEFF0', boxShadow: '0px 0px 20px rgba(00, 00, 00, 16%)', borderRadius: '60px' }}>
                            <span className='pt-3 pb-3' style={{ fontSize: '24px', color: '#012169', fontFamily: 'Poppins-Regular' }} >About Credit Cards</span>
                        </button>
                    </div>

                </div>
                <div className='row mx-n5 h-auto py-5 px-n5 mb-n5' style={{ backgroundColor: 'rgba(245,249,255, 70%)' }}>
                    {}                 <div className='col align-self-center'>
                        <p className='text-center mt-n4' style={{ fontSize: '35px', fontFamily: 'Poppins-Medium' }}>Credit Card Comparison</p>
                        <div className='text-center ' style={{ fontSize: '25px', fontFamily: 'Poppins-Regular' }} >
                            I want to apply for a
                            <FormControl style={{ marginLeft: '1rem', minWidth: '13rem' }}>
                                <Select
                                    value={card2}
                                    onChange={handleChange2}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }}
                                >
                                    <MenuItem value={1} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Premium/ Corporate Credit Cards</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Credit Cards</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Debit Cards </MenuItem>
                                </Select>

                            </FormControl> .

                            {/* <Form.Group controlId="modal-credit-card-type" style={{ fontSize: '20px' }} >
                                <Form.Label style={{ fontSize: '25px', fontFamily: 'Poppins-Regular' }}>I want to apply for a</Form.Label>
                                <Form.Control as="select" size="md" custom style={{ borderBottom: '1px solid black', marginLeft: '1rem', width: '25rem', color: 'black', fontSize: '22px', fontFamily: 'Poppins-Regular', backgroundColor: 'transparent' }}>

                                    <option selected disabled></option>
                                    <option value="1">Premium/ Corporate Credit Cards</option>
                                    <option value="2">Credit Cards</option>
                                    <option value="3">Debit Cards</option>

                                </Form.Control>

                            </Form.Group>
 */}
                        </div>
                    </div>
                    <CCmodal />
                </div>

            </div><Tab.Container defaultActiveKey="first">

                <Nav className="pl-5 border-top border-bottom " style={{ boxShadow: '0px 0px 50px rgba(00, 00, 00, 16%)' }} >
                    <Nav.Item className=" pr-5" style={{ fontFamily: 'Poppins-Medium', fontSize: '25px' }}>

                        <Nav.Link eventKey="first">Banks</Nav.Link>
                    </Nav.Item>

                </Nav>

                <Tab.Content style={{ fontFamily: 'Poppins-Regular' }}>
                    <Tab.Pane eventKey="first" title='home'>
                        <Table responsive striped hover className='ml-5 mr-5 mt-5'>
                            <thead>
                                <tr>
                                    <th>Intitution</th>
                                    <th>Type</th>
                                    <th>1 Month</th>
                                    <th>3 Months</th>
                                    <th>6 Months</th>
                                    <th>1 Year</th>
                                    <th>2 Years</th>
                                    <th>5 Years</th>
                                    <th>10 Years</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Table1Data type='Regular Savings Account' />
                            </tbody>
                        </Table>

                    </Tab.Pane>


                </Tab.Content>

            </Tab.Container>

        </>
    );
}

export default Section1;