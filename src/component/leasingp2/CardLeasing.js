import React from 'react';
import Card from 'react-bootstrap/Card'
import './leasingp2.css';
import Button from 'react-bootstrap/Button'


const CardLeasing = (props) => {



    return (




        <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '20px' }} >

            <Card.Title style={{ fontFamily: 'Poppins-Medium' }}>{props.carddet.institute} - {props.carddet.type}</Card.Title>
            <div className="row">
                <div className="col-3">
                    <h6>Leasing Rate</h6>
                    <h4>{props.carddet.Lrate}%</h4>
                </div>
                <div className="col-3">
                    <h6>Interest Earned on Maturity</h6>
                    <h4>Rs.{props.carddet.IntMaturity}</h4>
                </div>
                <div className="col-3">
                    <h6>Total Amount at Maturity</h6>
                    <h4>Rs.{props.carddet.TotalAmountMaturity}</h4>
                </div>
            </div>
            <div className="row mt-4">

                <div className="col-8 h5">Representative example: Assumed borrowing of £10,000.00 over 60 months at a nominal annual rate of 3.4% (fixed) would result in a representative rate of
3.4% APR (fixed), 60 monthly repayments of £181.24, total amount repayable is £10,874.40.</div>
                <div className="col-2 ">

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

export default CardLeasing;