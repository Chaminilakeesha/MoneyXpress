import React from 'react';
import './FD1Segment1.css'
import FDmodal from './FDmodal'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from 'react-bootstrap/Table';
import Table1Data from '../Table1/Table1Data'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

function Segment1() {

    const [card, setCard] = React.useState('');

    const handleChange = (event) => {
        setCard(event.target.value);
    }
    const [card1, setCard1] = React.useState('');

    const handleChange1 = (event) => {
        setCard1(event.target.value);
    }

    return (
        <>
            <div className='container-fluid pb-5 px-5 h-auto fixeddep-top-section-background' style={{ paddingTop: '7rem' }}>
                <br></br>
                <span className='pl-5 pt-5' style={{ fontSize: '25px', color: '#012169', fontFamily: 'Poppins-Regular' }}>Compare Fixed Deposits</span>
                <p className='pl-5' style={{ fontSize: '50px', color: '#414E63', fontFamily: 'PlayfairDisplay-Regular' }}>Invest Now in a Fixed Deposit</p>
                <div className='row pl-5 pt-5 pb-3' style={{ marginBottom: '13rem' }}>
                    <div className='col-2 '>
                        <button type="button" class="btn btn-block" style={{ backgroundColor: '#EEEFF0', boxShadow: '0px 0px 20px rgba(00, 00, 00, 16%)', borderRadius: '60px' }}>
                            <span className='pt-3 pb-3' style={{ fontSize: '24px', color: '#012169', fontFamily: 'Poppins-Regular' }} >Rates Comparison</span>
                        </button>
                    </div>
                    <div className='col-2 offset-1 '>
                        <button type="button" class="btn btn-block" style={{ backgroundColor: '#EEEFF0', boxShadow: '0px 0px 20px rgba(00, 00, 00, 16%)', borderRadius: '60px' }}>
                            <span className='pt-3 pb-3' style={{ fontSize: '25px', color: '#012169', fontFamily: 'Poppins-Regular' }} >About FDs</span>
                        </button>
                    </div>
                </div>

                <div className='row mx-n5 h-auto py-5 px-n5 mb-n5' style={{ backgroundColor: 'rgba(245,249,255, 70%)' }}>
                    <div className='col align-self-center'>
                        <p className='text-center mt-n4' style={{ fontSize: '35px', fontFamily: 'Poppins-Medium' }}>Fixed Deposit Comparison</p>
                        <div className='text-center mb-4' style={{ fontSize: '25px', fontFamily: 'Poppins-Regular' }}>
                            I am looking for interest earned on
                        <FormControl style={{ marginLeft: '1rem', marginRight: '1rem', minWidth: '9rem' }}>
                                <Select
                                    value={card}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }}
                                >
                                    <MenuItem value={1} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Monthly </MenuItem>
                                    <MenuItem value={2} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Annually</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>Maturity </MenuItem>
                                </Select>
                            </FormControl>
                        and I want to apply for a
                        <FormControl style={{ marginLeft: '1rem', minWidth: '9rem' }}>
                                <Select
                                    value={card1}
                                    onChange={handleChange1}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }}
                                >
                                    <MenuItem value={1} style={{ fontSize: '18px' }}>1 month</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: '18px' }}>3 months</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: '18px' }}>6 months </MenuItem>
                                    <MenuItem value={4} style={{ fontSize: '18px' }}>1 year </MenuItem>
                                    <MenuItem value={5} style={{ fontSize: '18px' }}>2 years </MenuItem>
                                    <MenuItem value={6} style={{ fontSize: '18px' }}>3 years </MenuItem>
                                    <MenuItem value={7} style={{ fontSize: '18px' }}> 4 years</MenuItem>
                                    <MenuItem value={8} style={{ fontSize: '18px' }}> 5 years</MenuItem>
                                </Select>
                            </FormControl>
                        .
                    </div>
                    </div>
                    <FDmodal></FDmodal>
                </div>

            </div>
            <Tab.Container defaultActiveKey="first">

                <Nav className="pl-5 border-top border-bottom " style={{ boxShadow: '0px 0px 50px rgba(00, 00, 00, 16%)' }} >
                    <Nav.Item className=" pr-5" style={{ fontFamily: 'Poppins-Medium', fontSize: '25px' }}>

                        <Nav.Link eventKey="first">Banks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" pl-4" style={{ fontFamily: 'Poppins-Medium', fontSize: '25px' }}>

                        <Nav.Link eventKey="second">Financial Companies</Nav.Link>
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
                    <Tab.Pane eventKey="second" title='sec'>
                        <Table responsive striped hover className='ml-5 mr-5 mt-5' >
                            <thead>
                                <tr>
                                    <th>Intitution2</th>
                                    <th>Type2</th>
                                    <th>1 Month2</th>
                                    <th>3 Months2</th>
                                    <th>6 Months2</th>
                                    <th>1 Year2</th>
                                    <th>2 Years2</th>
                                    <th>5 Years2</th>
                                    <th>10 Years2</th>
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

export default Segment1;