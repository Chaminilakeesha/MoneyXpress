import React from 'react';
import Card from 'react-bootstrap/Card'
import './savingsp2.css';
import Button from 'react-bootstrap/Button'


const CompCardSavings = (props) => {

    // if (props.carddet.Brate)
    //     document.getElementById("brate").style.display = "block"



    return (




        <div className="col-2 mx-3">
            <Card className="my-4 mx-5 px-4 py-2" style={{ borderRadius: '40px 5px', width: "100%", textAlign: "center" }} >

                <Card.Title style={{ fontFamily: 'Poppins-Medium' }}>{props.carddet.institute}</Card.Title>


                <Card.Text style={{ fontFamily: 'Poppins-Medium' }}>
                    <div className="my-5">{props.carddet.Srate}%</div>
                    {props.carddet.type == "Power Saver Account" && <div className="my-5">{props.carddet.Brate}%</div>}
                    <div className="my-5">Rs.{props.carddet.MinDepAmount}</div>
                    <div className="my-5">{props.carddet.FitchRating}</div>
                    <div className="my-5">Performance</div>
                    <div className="my-5">Details</div>

                </Card.Text>

                <Button style={{ fontSize: '22px', fontFamily: 'Poppins-Regular', borderRadius: '100px', backgroundColor: '#00A654' }} className="px-4 py-2" >


                    <span className=' mr-2 ml-1 ' style={{ fontSize: '22px', fontFamily: 'Poppins-Regular' }} >Add to Request</span>



                </Button>

            </Card>
        </div>




    );

}

export default CompCardSavings;