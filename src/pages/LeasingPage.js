
import React from 'react';
import Lease from '../component/Leasingcomp/Llease';
import Detail from '../component/Leasingcomp/Ldetail';
import Disad from '../component/Leasingcomp/Ldisad';
import Comment from '../component/comment';
import Ltopmain from '../component/Leasingcomp/Ltopmain'

function Lp1() {
    return (
        <div >
            <Ltopmain />
            <Lease />
            <Detail />
            <Comment />
            <Disad />
        </div>
    );
}
export default Lp1;