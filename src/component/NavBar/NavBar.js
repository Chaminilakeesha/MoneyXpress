import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import savings from './savings.jpg';
import loans from './loans.jpg';
import leasings from './leasings.jpg';
import creditcards from './creditcards.jpg';
import fds from './fds.jpg';
import motor from './motorinsurance.jpg';
import travel from './travel.jpg';
import life from './life.jpg';
import './NavBar.css';

export default function NavBar() {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="navbar-container ">
            <ul className="ul-list">

                <li className="money-margin">
                    <div className="dropdown-container">
                        <div>
                            <div className="header-dropdown">Money</div>
                        </div>
                        <div class="dropdown-content">
                            <ul class="ul-list drop">
                                <li><div className="img-box"><img src={savings} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/">Savings</Link></div></li>
                                <li><div className="img-box"><img src={fds} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/fixeddeposit">Fixed Deposits</Link></div></li>
                                <li><div className="img-box"><img src={loans} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/loan">Loans</Link></div></li>
                                <li><div className="img-box"><img src={creditcards} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/creditcard">Credit Cards</Link></div></li>
                                <li><div className="img-box"><img src={leasings} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/leasing">Leasing</Link></div></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown-container">
                        <div>
                            <div className="header-dropdown">Insurance</div>
                        </div>
                        <div class="dropdown-content">
                            <ul class="ul-list drop">
                                <li><div className="img-box"><img src={motor} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="/MotorInsurance">Motor Insurance</Link></div></li>
                                <li><div className="img-box"><img src={travel} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="">Travel Insurance</Link></div></li>
                                <li><div className="img-box"><img src={life} /><Link onClick={scrollTop} className="header-dropdown pos-absolute white-color" to="">Life Insurance</Link></div></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><Link onClick={scrollTop} className="header-dropdown" to="/Blog">Blog</Link></li>
                <li className="sign-in"><a href=""><button type="button" class="btn btn-block" style={{ fontSize: '23px', padding: '0 20px 4px 20px', color: '#1555BA', border: '4px solid #1555BA', backgroundColor: 'transparent', boxShadow: '1px 1px 10px #8a795d', borderRadius: '9999px' }}>Sign In</button></a></li>
            </ul>
        </div>
    );
}