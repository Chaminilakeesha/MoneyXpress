import React from 'react';
import Card from 'react-bootstrap/Card'
import './savingsp2.css';
import Button from 'react-bootstrap/Button'


const CardLeasing = (props) => {

    // if (props.carddet.Brate)
    //     document.getElementById("brate").style.display = "block"



    return (




        <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '20px' }} >

            <Card.Title style={{ fontFamily: 'Poppins-Medium' }}>{props.carddet.institute} - {props.carddet.type}</Card.Title>
            <div className="row">
                <div className="col-3">
                    <h6>Savings Rate</h6>
                    <h4>{props.carddet.Srate}%</h4>
                </div>
                {props.carddet.type == "Power Saver Account" && <div className="col-3" id="brate">
                    <h6>Bonus Rate</h6>
                    <h4>{props.carddet.Brate}%</h4>
                </div>}
                <div className="col-3">
                    <h6>Minimum Deposit Amount</h6>
                    <h4>Rs.{props.carddet.MinDepAmount}</h4>
                </div>
                <div className="col-3">
                    <h6>Fitch Rating</h6>
                    <h4>{props.carddet.FitchRating}</h4>
                </div>
            </div>
            <div className="row mt-4">


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

export default CardLeasing;