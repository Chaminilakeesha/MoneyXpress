import React from 'react';
import './Contact.css';
import './images/123.png';
import './fonts/BalooBhaina2-SemiBold.ttf';
import './fonts/BalooBhaina2-Medium.ttf';
import coronause from './images/coronause.png';
import fb from './images/fb.png';
import twit from './images/twit.png';
import ytb from './images/ytb.png';
import BlueButton from './components/BlueButton';



function Contact() {
  return (
    <div >
      <div id="con1">
        <div id="con11">
          <h1 style={{ fontFamily: "BalooBhaina2-SemiBold", textAlign: "center" }}>Contact the MoneySuperMarket Team</h1>
          <p id="con1txt">Please use one of the forms below to get in touch. Please provide as much detail<br /> as you can so we can help you Get Money Calm.</p>

          <p id="con1txt">We’ll aim to get back to you within two working days. However, at busy times<br /> this may take a little while longer.</p>

        </div>
      </div >

      <div id="con2">
        <div id="con21">
          <div id="con2inl" ><img src={coronause} alt="pic" height="250px" width="250px"></img></div>
          <div id="con2inr" >
            <h3>Coronavirus: information about international travel</h3>
            <p>Coronavirus is causing huge disruption across the globe. The pandemic is expected to last through the coming months<br /> and into the summer, so there are serious implications for anyone with travel plans.</p>
            <p>We are monitoring the situation closely and will provide as much information as possible on how your trip is likely to be<br /> affected. We also explain what you can expect if you make a claim on your travel insurance.</p>


            <BlueButton>Find More</BlueButton>



          </div>
        </div>
      </div>


      <div id="con3" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <div >
            <h2 style={{ fontFamily: "BalooBhaina2-SemiBold", textAlign: "center" }}>How do I find more help</h2>
            <p style={{ textAlign: "center" }}>If you need more help, our <a className="anc" href="Cookies">help centre</a>  has all the information you need.</p>
          </div>
          <div>
            <h2 style={{ fontFamily: "BalooBhaina2-SemiBold", textAlign: "center" }}>Come and say hello</h2>
            <p style={{ textAlign: "center", fontSize: 20 }}>We'd love to hear from you, via any of these:</p>

          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div id="con31">
              <div id="img"><img src={fb} alt="pic" height="50px" width="50px"></img></div>
              <div id="img"><img src={twit} alt="pic" height="50px" width="50px"></img></div>
              <div id="img"><img src={ytb} alt="pic" height="50px" width="50px"></img></div>
            </div>
          </div>


          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 25 }}>

            <div ><p>To <a className="anc" href="#">unsubscribe from our emails</a>, please click the link and follow the instructions.</p></div>




          </div>

        </div>
      </div>








    </div > //closing app


  );
}

export default Contact;