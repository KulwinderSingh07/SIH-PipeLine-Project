import { useEffect, useState } from "react";
import "../CSS/loginSignUp.css"

const LoginSingupCompoent=()=> {
    // const [signIn, setSignIn] = useState(true)
    const [signIn, toggle] = useState(true);

    // useEffect(()=>{
        
        
    // },[signIn])
     return(
        <div className="LoginSingUpWrapper">
         <div className="Container">
             <div className="SignUpContainer" signinIn={signIn} style={{
                 transform:signIn!==true?'translateX(100%)':null,
                opacity:signIn!==true?"1":0,
                zIndex:signIn!==true?"500":0
             }}>
                 <form className="Form">
                     <h1 className="Title">Create Account</h1>
                     <input className="Input" type='text' placeholder='Name' />
                     <input className="Input" type='email' placeholder='Email' />
                     <input className="Input" type='password' placeholder='Password' />
                     <button className="Button">Sign Up</button>
                 </form>
             </div>

             <div className="SignInContainer" signinIn={signIn} style={{
                transform:signIn!==true?'translateX(100%)':null,
             }}>
                  <form className="Form">
                     <h1 className="Title">Sing in</h1>
                      <input className="Input" type='email' placeholder='Email' />
                      <input className="Input" type='password' placeholder='Password' />
                      <a className="Anchor" href='#'>Forgot your password?</a>
                      <button className="Button">Sigin In</button>
                  </form>
             </div >

             <div className="OverlayContainer" signinIn={signIn} style={{
                 transform:signIn!==true?'translateX(100%)':null
                }}>
                 <div className="Overlay" signinIn={signIn}
                 style={{
                     transform:signIn!==true?'translateX(-50%)':null
                    }}>
                 <div className="OverlayPanel LeftOverlayPanel " signinIn={signIn}>
                     <h1 className="Title">Welcome Back!</h1>
                     <p className="Paragraph">
                         To keep connected with us please login with your personal info
                     </p>
                     <button className="GhostButton" onClick={() => toggle(!signIn)}>
                         Sign In
                     </button>
                        </div>

                     <div className="OverlayPanel RightOverlayPanel" signinIn={signIn}
                     style={{
                         opacity:signIn!==true?'0':1,
                        }}>
                       <h1 className="Title">Hello, Friend!</h1>
                       <p className="Paragraph">
                           Enter Your personal details and start journey with us
                       </p>
                            <button className="GhostButton" onClick={() => toggle(!signIn)}>
                                Sign Up
                            </button>
                     </div>
 
                 </div>
             </div >

         </div>
                         </div>
     )
}

export default LoginSingupCompoent;