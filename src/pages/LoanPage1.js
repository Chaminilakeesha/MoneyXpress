
import React from 'react';
import Loancom from '../component/Loancomp/Loancom';
import Loanrate from '../component/Loancomp/Loanrate';
import Loantype from '../component/Loancomp/Loantype';
import Comment from '../component/comment';
import Compare from '../component/Loancomp/compare';
import Alter from '../component/Loancomp/Alternative';

function Loan() {
    return (
        <div >

            <Loancom />
            <Loanrate />
            <Loantype />

            <Compare />
            <Comment />
            <Alter />

        </div>
    );
}
export default Loan;