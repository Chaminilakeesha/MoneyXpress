import React from 'react';
import './Footer.css';
import './fonts/Rockwell.TTF';
import './fonts/Rockwell-Bold.ttf';
import './fonts/SEGOEUI.TTF';
// import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import msmlogo from './images/msmlogo.svg';
import nsb from './images/nsb_logo.png';
import combank from './images/Image 10.png';
import amana from './images/Image 11.png';
import img4 from './images/Image 4.png';
import img5 from './images/Image 5.png';
import img6 from './images/Image 6.png';
import img7 from './images/Image 7.png';
import img8 from './images/Image 8.png';
import img9 from './images/Image 9.png';
import poly from './images/Polygon 4.png';




function Footer() {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div id="footerdiv">

            <div style={{ width: 1910, backgroundColor: "none", marginLeft: 5 }}>
                <button className="bct" onClick={scrollTop}>
                    <div style={{ float: "left", backgroundColor: "#1555BA", height: 30, fontFamily: "calibri", fontSize: 25 }}>Back to Top</div>
                    <div style={{ float: "left", backgroundColor: "#1555BA", height: 30 }}
                    ><img src={poly} alt="" width="20px" height="30px"></img>
                    </div>
                </button>
            </div>

            <div id="footerup">

                <div >

                    <div id="ftup" >



                        <div id="logo">
                            <img src={msmlogo} alt="" width="200px" height="80px"></img>
                        </div>

                        <div >


                            <nav className="justify-content-center" style={{ paddingTop: 50 }} >
                                <ul >
                                    <li className="align">

                                        <Link to="/Contact" className="text-light nl" onClick={scrollTop} >Contact</Link>

                                    </li>
                                    <li className="align">

                                        <Link to="/About" className="text-light nl" onClick={scrollTop}>About Us</Link>

                                    </li>
                                    <li className="align">
                                        <Link to="/Privacy" className="text-light nl" onClick={scrollTop}>Privacy</Link>
                                    </li>
                                    <li className="align">
                                        <Link to="/Terms" className="text-light nl" onClick={scrollTop}>Terms & Conditions</Link>
                                    </li>
                                    <li className="align">
                                        <Link to="/Security" className="text-light nl" onClick={scrollTop}>Security</Link>
                                    </li>
                                    <li className="align">
                                        <Link to="/Cookies" className="text-light nl" onClick={scrollTop}>Cookie Policy</Link>
                                    </li>
                                </ul>
                            </nav>



                        </div>
                    </div>


                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <div id="ftupd" ><p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going v</p></div></div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="footerbanklogo"><img src={combank} alt="" width="125px" height="50px"></img></div>
                        <div className="footerbanklogo" ><img src={amana} alt="" width="160px" height="50px"></img></div>
                        <div className="footerbanklogo"><img src={nsb} alt="" width="125px" height="50px"></img></div>
                    </div>

                    <div>

                        <div style={{ paddingLeft: 300 }}>
                            <div className="footerlogoset2"><img src={img4} alt="" ></img></div>
                            <div className="footerlogoset2"><img src={img5} alt="" ></img></div>
                            <div className="footerlogoset2"><img src={img6} alt="" ></img></div>
                            <div className="footerlogoset2"><img src={img7} alt="" ></img></div>
                        </div>

                        <div style={{ float: "right", marginTop: 50, paddingRight: 100 }}>
                            <div className="footerlogoset3"><img src={img8} alt="" ></img></div>
                            <div className="footerlogoset3"><img src={img9} alt="" ></img></div>
                        </div>

                    </div>


                </div>
            </div>

            <div id="footerbot">

                <div style={{ float: "left", color: "gray" }}>All rights reserved by </div> <div style={{ float: "left" }}>: Money Express Group</div>

            </div>
        </div >

    );
}

export default Footer;