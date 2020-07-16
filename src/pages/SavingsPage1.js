
import React from 'react';
import Savecom from '../component/Savingscomp/Savingsmain';
import Acctype from '../component/Savingscomp/Accounttype';
import Saveadva from '../component/Savingscomp/Saveadva';
import Comment from '../component/comment';
import Savenow from '../component/Savingscomp/Savenow';


function Save() {
    return (
        <div >
            <Savecom />
            <Acctype />
            <Comment />
            <Saveadva />
            <Savenow />



        </div>
    );
}
export default Save;