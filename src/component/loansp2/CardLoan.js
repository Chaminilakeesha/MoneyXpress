import React from 'react';
import Card from 'react-bootstrap/Card'
import './loansp2.css';
import Button from 'react-bootstrap/Button'


const CardLoan = (props) => {



    return (




        <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '20px' }} >

            <Card.Title style={{ fontFamily: 'Poppins-Medium' }}>{props.carddet.institute} - {props.carddet.type}</Card.Title>
            <div className="row">
                <div className="col-3 border-right">
                    <h6>Minimum Rate</h6>
                    <h4>{props.carddet.Mrate1}% - {props.carddet.Mrate2}%</h4>
                </div>
                <div className="col-3 border-right">
                    <h6>Monthly Amount to be paid</h6>
                    <h4>Rs.{props.carddet.MonAmount}</h4>
                </div>
                <div className="col-3">
                    <h6>Total Interest Payable</h6>
                    <h4>Rs.{props.carddet.TotalPayInt}</h4>
                </div>
            </div>
            <div className="row mt-4">

                <div className="col-8 h5">Representative example: Assumed deposits of Rs. 100,000.00 over 60 months at a rate of 5.5% would result in an interest amount of
Rs. 10,000 monthly/annually/maturity.</div>
                <div className="col-2 ">
                    <h5 style={{ textDecoration: "underline" }}>More Details</h5>
                </div>
                <div className="col-2 ">
                    <Button style={{ width: "fit-content", height: "fit-content" }} className="btnstyle1"  >Add to Compare </Button>
                </div>
            </div>
            <Card.Text>


            </Card.Text>
        </Card>


    );

}

export default CardLoan;