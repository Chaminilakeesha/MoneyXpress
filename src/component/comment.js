import React from 'react';



function Comment() {
    return (
        <div className="container-fluid h-auto p-5 mt-5 mb-3 bg-white">
            <div className="row ">
                <div className="col-5 ml-5">
                    <p className="mb-5" style={{ fontSize: '30px', fontFamily: 'Poppins-Medium' }}>
                        We're 100% independent, working only for our customers
                    </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        Unlike some of our competitors, MoneyXpress is not
                        owned by an insurance company. So we can offer the
                        best value, with savings delivered straight to you.
                </p>
                    <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>
                        We combine independence, so we can negotiate the
                        best prices, with excellent technology, to find the best
                        value products and services for you
                </p>
                    <p className="mt-5" style={{ fontSize: '26px', fontFamily: 'Poppins-Medium' }}>
                        That makes us, in our customers' opinions, the
                        best price comparison website.
                        
                    </p>
                </div>
                <div className="col-5 offset-1">
                    <div className="mt-3 w-100 bg-white shadow p-5  rounded" style={{height:'18rem'}}>
                       

                            <div id="carouselExampleControls" style={{height:'22rem'}} className="carousel slide" data-ride="false" data-interval='false'>

                                <div className="carousel-inner pb-4">
                                    <div className="carousel-item text-center active">
                                        <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>First Comment<br />Dummy text<br />Dummy text</p>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>Second Comment</p>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <p style={{ fontSize: '20px', fontFamily: 'Poppins-Regular' }}>Third Comment</p>
                                    </div>
                                </div>
                                <div className='row position-static'  >
                                    <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className=" pt-2 " style={{ height: '30px', width: '30px', fontSize: '2rem', color: '#0070c9', lineHeight: '0', border: '2px solid #0070c9' }}>‹</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className=" pt-2  " style={{ height: '30px', width: '30px', fontSize: '2rem', color: '#0070c9', lineHeight: '0', border: '2px solid #0070c9' }}>›</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            

                        </div>
                    </div>
                    <div className="row mt-5 no-gutters justify-content-center">
                        <div className="col-4 text-right" style={{ fontSize: '50px', fontFamily: 'Poppins-Regular' }}>4.5/5</div>
                        <div className='col-7  pt-3 pl-3' style={{ fontSize: '18px', fontFamily: 'Poppins-Regular' }}>
                            of our customers would buy again
                    </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Comment;