import React, { useState } from 'react';
import './Home Page.css';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import homepage3 from './images/Home page3.png';
import creditcard from './images/credit card.svg';
import fixeddepo from './images/fixeddepo.svg';
import leasing from './images/leasing.svg';
import loans from './images/loans.svg';
import growth from './images/growth.svg';
import nogroup from './images/no-group.svg';
import terms from './images/terms.svg';
import car from './images/car.svg';
import img1 from './images/5553.png';
import img2 from './images/Untitled-4.png';
import Modal from 'react-bootstrap/Modal'

import stats from './images/Statistics-pana.svg';
import bgbanner from './images/Path 13.svg';
import motorins from './images/Motor insurance.png';
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import CardGroup from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Popproddata from './Popproddata';
import BlogCards from './BlogCardData';

export default function HomePage() {

  const [show, setShow] = useState(false);

  function popularProductTab1() {
    document.getElementById('asd1').style.textDecoration = "underline"
    document.getElementById('asd2').style.textDecoration = "none"
    document.getElementById('asd3').style.textDecoration = "none"
    document.getElementById('asd4').style.textDecoration = "none"
    document.getElementById('asd5').style.textDecoration = "none"
  }

  function popularProductTab2() {
    document.getElementById('asd1').style.textDecoration = "none"
    document.getElementById('asd2').style.textDecoration = "underline"
    document.getElementById('asd3').style.textDecoration = "none"
    document.getElementById('asd4').style.textDecoration = "none"
    document.getElementById('asd5').style.textDecoration = "none"
  }
  function popularProductTab3() {
    document.getElementById('asd1').style.textDecoration = "none"
    document.getElementById('asd2').style.textDecoration = "none"
    document.getElementById('asd3').style.textDecoration = "underline"
    document.getElementById('asd4').style.textDecoration = "none"
    document.getElementById('asd5').style.textDecoration = "none"
  }
  function popularProductTab4() {
    document.getElementById('asd1').style.textDecoration = "none"
    document.getElementById('asd2').style.textDecoration = "none"
    document.getElementById('asd3').style.textDecoration = "none"
    document.getElementById('asd4').style.textDecoration = "underline"
    document.getElementById('asd5').style.textDecoration = "none"
  }
  function popularProductTab5() {
    document.getElementById('asd1').style.textDecoration = "none"
    document.getElementById('asd2').style.textDecoration = "none"
    document.getElementById('asd3').style.textDecoration = "none"
    document.getElementById('asd4').style.textDecoration = "none"
    document.getElementById('asd5').style.textDecoration = "underline"
  }



  return (


    <div className="hometopsc container-fluid" style={{ marginBottom: "800px" }}>

      <div className="row align-items-center ">

        <div className="col-xs-12 col-md-6 hometopl1 ">
          <h3>Grow Your Money</h3>
          <h1>Get Rich Slow</h1>
          <p>Search and Compare with Confidence</p>
          <Button className="btnstyle">Join with us</Button>
        </div>
        {/* <div className="col-md-2"> </div> */}
        <div className="col-md-6 col-xs-12 "><img src={homepage3} width="100%" style={{ marginTop: "5%" }} ></img>
        </div>
      </div>


      <div className=" row justify-content-center " >
        <div className="row  cardContainer py-3" >

          <Card className="cardstyle col-xs-12 col-2 mx-auto" style={{ border: "none" }}>
            {/* <Card.Img variant="top" src={car} width="50px" /> */}

            <Card.Title>Credit Cards</Card.Title>


            <div><div><img src={creditcard} width="180px" height="180px"></img></div></div>

            <div><Button className="btnstyle" >Explore</Button></div>
          </Card>
          <Card className="cardstyle col-xs-12 col-2" style={{ border: "none" }}>
            {/* <Card.Img variant="top" src={car} width="50px" /> */}


            <Card.Title>Fixed Deposits</Card.Title>


            <div><div><img src={fixeddepo} width="180px" height="180px"></img></div></div>

            <div><Button className="btnstyle" >Explore</Button></div>
          </Card>
          <Card className="cardstyle col-xs-12 col-2 mx-auto" style={{ border: "none" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}


            <Card.Title>Leasing</Card.Title>

            <div><div><img src={leasing} width="180px" height="180px"></img></div></div>

            <div><Button className="btnstyle" >Explore</Button></div>
          </Card>

          <Card className="cardstyle col-xs-12 col-2 mx-auto " style={{ border: "none" }}>
            {/* <Card.Img variant="top" src={car} width="50px" /> */}


            <Card.Title>Loans</Card.Title>


            <div><div><img src={loans} width="180px" height="180px"></img></div></div>

            <div><Button className="btnstyle" >Explore</Button></div>
          </Card>

          <Card className="cardstyle col-xs-12 col-2 mx-auto" style={{ border: "none" }}>
            {/* <Card.Img variant="top" src={car} width="50px" /> */}


            <Card.Title>Motor Insurance</Card.Title>


            <div><div><img src={motorins} width="180px" height="155px"></img></div></div>

            <div style={{ marginTop: 22 }}><Button className="btnstyle" >Explore</Button></div>
          </Card>

        </div>
      </div>

      <div style={{ marginTop: "5%" }} className="row ">

        <div style={{ borderRight: "5px solid black" }} className=" row col-3 pl-5 align-items-center justify-content-center">
          <div ><h3>Switch,Save & Relax</h3>
            <p>Clever ways to save a lot, by doing very little</p></div>
        </div>

        <div className="col-md-8  ml-5" >
          <ul className="list-unstyled">
            <Media as="li">
              <img className="mr-3" src={nogroup} width="64px" height="64px"></img>
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img className="mr-3" src={growth} width="64px" height="64px"></img>
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img className="mr-3" src={terms} width="64px" height="64px"></img>
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
      </p>
              </Media.Body>
            </Media>
          </ul>
        </div>
      </div>

      <div className="row">

        <div className='row p-5'>

          <div className='col-6 py-5'>
            <h1>Compare and Save on Money Products</h1>
            <p style={{ fontSize: '20px' }}>Compare <strong>Loans</strong></p>
            <p style={{ fontSize: '20px' }}>Compare <strong>Loans</strong></p>
            <p style={{ fontSize: '20px' }}> Compare <strong>Loans</strong></p>
            <p style={{ fontSize: '20px' }}>Compare <strong>Loans</strong></p>
            <p style={{ fontSize: '20px' }}>Compare <strong>Loans</strong></p>



          </div>
          <div className='col-6'>

            <img src={img1} alt='image1' className='' width="100%" height="100%"  ></img>

          </div>
        </div>
        <div className='row p-5' style={{ backgroundColor: '#F4F9FF' }}>
          <div className='col-6'>

            <img src={img2} alt='image2' className='' width="50%" height="80%" ></img>

          </div>
          <div className='col-6 py-5 '>
            <p className='py-4' style={{ fontSize: '40px', textShadow: '0px 3px 6px rgba(00, 00, 00, 16%)' }}>
              Credit Cards    </p>
            <p class='pb-5' style={{ fontSize: '20px' }}>
              Convenience, speed and security. These features have been the benchmarks
              of the credit cards with amazing offers and discounts. Access to Easy instalment plan
      options and other range of benefitsoffered to the credit card holders. Less requirements needed.   </p>

          </div>
        </div>
      </div>

      <div style={{ marginTop: "2%" }} >
        <div className="row justify-content-center "><h1>Achieve your financial goals with Money Xpress</h1></div>

        <div className="row justify-content-center">

          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>
          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>
          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>
          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>
          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>
          <Card className="row cardstyle col-xs-12 m-5 px-3 " style={{ width: "20%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row" >
              <div className="col-3"><img src={car} width="65px" height="65px"></img></div>
              <div className="row col-md-6  align-items-center">
                <Card.Title>Leasing</Card.Title>
              </div>
            </div>
            <Card.Text>
              <p style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul style={{ listStyleType: "none", textAlign: "justify" }}>
                <li><a>qwerty</a></li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </Card.Text>
          </Card>


        </div>





      </div>

      <div className="proverb">
        <p>“The art is not in making money, but in spending and saving it. The small amounts which saved daily are which add upto huge investments in the end”</p>
        <p>-Proverb-</p>
      </div>

      <div className="row justify-content-center ">
        <div className="col-md-5"><img src={stats}></img></div>
        <div className="col-md-1"></div>
        <div className="col-md-3" style={{ backgroundColor: "red" }}>
          <p>Master your Money !</p>
          <p>You’re done being broke. You’re ready to start down the path to financial freedom. But it’s all so overwhelming. What do you do first? Don’t stress.</p>
          <p>Start where you are. Take baby steps and build good habits. Progress will be slow at first, but in time everything will come together.</p>
          <p>Join with us. We will show you the path!</p>
          <div className="input-group input-group-sm mb-6">
            <input type="text" className="form-control" placeholder="Type the email to subscribe for newsletters" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
          </div>

        </div>
      </div>

      <div className="row  justify-content-center" style={{ textAlign: "center", width: "100%" }} >

        <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
          <Tab.Container defaultActiveKey="first">

            <Nav className="justify-content-center" >
              <Nav.Item>
                <Nav.Link eventKey="first" id="asd1" onSelect={popularProductTab1}  >Fixed Deposits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="asd2" eventKey="second" onSelect={popularProductTab2}>Personal Loans</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="asd3" eventKey="third" onSelect={popularProductTab3}>Leasing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" id="asd4" onSelect={popularProductTab4}  >Credit Cards</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" id="asd5" onSelect={popularProductTab5} >Savings Accounts</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="tabcontainer">
                  <div className="tabcontent">
                    <Popproddata title="Smart Fixed Deposits" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="tabcontainer">
                  <div className="tabcontent">
                    <Popproddata title="Personal Loans" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="tabcontainer">
                  <div className="tabcontent">

                    <Popproddata title="Leasings" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="tabcontainer">
                  <div className="tabcontent">

                    <Popproddata title="Credit Cards" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="tabcontainer">
                  <div className="tabcontent">

                    <Popproddata title="Savings Accounts" />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>

          </Tab.Container>
        </div >

      </div>
      <div>
        <BlogCards />
      </div>







    </div>
















  );
}