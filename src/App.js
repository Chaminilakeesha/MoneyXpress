import React from 'react';

import './component/fonts.css'
import NavBar from './component/NavBar/NavBar'
import Cc1 from './pages/CreditCard1'
import Lp1 from './pages/LeasingPage'
import Loan from './pages/LoanPage1'
import Fd1 from './pages/FixedDeposit1'
import Save from './pages/SavingsPage1'
import Creditp2 from './component/creditp2/creditp2'
import Fdp2 from './component/fdp2/fdp2'
import Leasingp2 from './component/leasingp2/leasingp2'
import Loansp2 from './component/loansp2/loansp2'
import Savingsp2 from './component/savingsp2/savingsp2'
import SStepper from './component/Savingscomp/Save_Information'
import FStepper from './component/FDcomp/FDinvest_Information'
import LStepper from './component/Leasingcomp/Lease_Information'
import LoStepper from './component/Loancomp/Loan_Information'
import CStepper from './component/CredtCcomp/CC_Information'
import Footer from './component/Footer/Footer'
import Home from './component/Home Page/Home Page'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <div style={{ marginTop: '6rem' }}>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/creditcard" exact><Cc1 /></Route>
            <Route path="/fixeddeposit" exact><Fd1 /></Route>
            <Route path="/loan" exact><Loan /></Route>
            <Route path="/leasing" exact><Lp1 /></Route>
            <Route path="/" exact><Save /></Route>

            <Route path="/creditcardpage2" exact><Creditp2 /></Route>
            <Route path="/fixeddepositpage2" exact><Fdp2 /></Route>
            <Route path="/loanpage2" exact><Loansp2 /></Route>
            <Route path="/leasingpage2" exact><Leasingp2 /></Route>
            <Route path="/savingspage2" exact><Savingsp2 /></Route>

            <Route path="/creditcardstep" exact><CStepper /></Route>
            <Route path="/fixeddepositstep" exact><FStepper /></Route>
            <Route path="/loanpagestep" exact><LoStepper /></Route>
            <Route path="/leasingpagestep" exact><LStepper /></Route>
            <Route path="/savingstep" exact><SStepper /></Route>

            <Route path="/footer" exact><Footer /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;