import React from 'react'
import {useDispatch, useSelector} from 'react-redux';


 const SignIn = ({onClick}) => {

  return (
    <div className="modal-container flex flex-column justify-end">
      <h5>Sign In</h5>
      <hr className='w-80 flex center'></hr>
      <div className='mb3'>
          <input className='mb2' type="text" name="username"  id='username' placeholder="username" />
          <input type="password" name="password" id='password' placeholder="password" />
          <button 
          onClick={onClick}
          className='mt2'>continue</button>
      </div>
    </div>
  );
}

export default SignIn;