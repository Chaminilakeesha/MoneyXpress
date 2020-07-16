import React from 'react';
import Card from 'react-bootstrap/Card'

const Popprodcard = (props) => {



    return (




        <Card className="col-md-3" style={{ width: "25%" }} >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div className="row justify-content-center" > <div > <Card.Title>{props.det.title}</Card.Title></div></div>


            <div className=" justify-content-center">
                <div className="row justify-content-center col-sm-12">
                    <div className="row">
                        <div className="details" >
                            <h6>6 Months</h6>
                            <p>{props.det.t1}</p>
                        </div>
                        <div className="details">
                            <h6>1 Year</h6>
                            <p>{props.det.t2}</p>
                        </div>

                    </div>
                </div>
                <div className="row justify-content-center col-sm-12">
                    <div className="row" >
                        <div className="details" >
                            <h6>3 Years</h6>
                            <p>{props.det.t3}</p>
                        </div>
                        <div className="details">
                            <h6>5 Years</h6>
                            <p>{props.det.t4}</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="row justify-content-center">
                <div>
                    <Card.Text style={{ textAlign: "center" }}>
                        <p>Details</p>
                        <p>Go to Site</p>
                        <h6>{props.det.bank}</h6>
                    </Card.Text>
                </div>
            </div>
        </Card>



    );

}

export default Popprodcard;