import React from 'react';
import Card from 'react-bootstrap/Card'
import './creditp2.css';
import Button from 'react-bootstrap/Button'


const CardCred = (props) => {



    return (




        <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '20px' }} >

            <Card.Title style={{ fontFamily: 'Poppins-Medium' }}>{props.carddet.bank} - {props.carddet.type}</Card.Title>
            <div className="row">
                <div className="col-3">
                    <h6>Interest Rate (APR)</h6>
                    <h4>{props.carddet.intrate}</h4>
                </div>
                <div className="col-3">
                    <h6>Annual Fee</h6>
                    <h4>Rs.{props.carddet.AnnFee}</h4>
                </div>
                <div className="col-3">
                    <h6>Interest Free Period</h6>
                    <h4>{props.carddet.intFreePeriod} days</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-2 ">
                    <h5 style={{ textDecoration: "underline" }}>More Details</h5>
                </div>
                <div className="col-8"></div>
                <div className="col-2 ">
                    <Button style={{ width: "fit-content", height: "fit-content" }} className="btnstyle1"  >Add to Compare </Button>
                </div>
            </div>
            <Card.Text>


            </Card.Text>
        </Card>


    );

}

export default CardCred;