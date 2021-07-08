import React from 'react';
import {auth, } from '../firebase';
// import firebase from 'firebase';

import { Button } from '@material-ui/core';


export const SignOut = () => {
  
    return (
        <div>
            <span>
                <Button style={{ position:'fixed', padding: '12px', fontSize: '13px', borderRadius: '100px', fontWeight: '549', backgroundColor:'#395dff', margin:'-100px 0px 0px 89.5em'}} onClick={() => auth.signOut()}>Sign out</Button>
            </span>
        </div>    
            
    )
}

export default SignOut
