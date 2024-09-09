import React, { useEffect } from 'react';
import authApi from '../api/authAPI'; // Import the authApi for backend interaction

const GoogleLoginButton = () => {
   
  
  const handleLogin = async () => {
   
      authApi.loginWithGoogle().then((resp)=>{
        if (resp && resp.url){
            console.log(resp.url);
            
            window.location.href = resp.url;
        }

        
      }).catch((error)=>{
        console.log(error);
        
      })
      


 
};
return (
    <button className=' text-white' onClick={handleLogin}>
      Login with Google
    </button>
  );
}

export default GoogleLoginButton
