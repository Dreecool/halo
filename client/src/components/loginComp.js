import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import io from "socket.io-client"; 


const LoginComponents = () => {


   const socket = io("https://halo-kappa.vercel.app");

  
  Axios.defaults.withCredentials = true
  const Navigate = useNavigate()
  
  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(false)

  const loginInfo = {

    email_address: emailLogin,
    password: passLogin,
  
  };

  const Submit = async (e) => {

    e.preventDefault();

    try {
      const response = await Axios.post("https://halo-kappa.vercel.app/loginUser", loginInfo);
      const token = response.data.tok;

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);

      Cookies.set("authToken", token, { expires: expirationDate });
     
      window.location.reload()
     
    } catch (error) {
      console.error("Error:", error);
    }

  };

  
  useEffect(() => {

    const getToks = Cookies.get("authToken");

    if (getToks) {

      Axios.defaults.headers.common["Authorization"] = `Bearer ${getToks}`;

      async function fetchData() {

        try {

          const response = await Axios.get("https://halo-kappa.vercel.app/protectedRoute");

          if (response.data.message === "Authorized") {

            setAuth(true)
            socket.emit("userID", response.data.userID)
            Navigate("/home")
            return null

          } else {

            setAuth(false)

          }

          setIsLoading(false); 

        } catch (error) {

          console.log(error)

        }
      }

      fetchData();

    } else {

      setIsLoading(false); 

    }
  }, []); 


  
  if (isLoading) {

    return;

  }




  return (

    <>

      <div className="container-md ">

        <div className="mt-5">
          <h2 className="text-center"> <i class="fa-regular fa-comments"></i> ChatForte</h2>
        </div>
         
         <div className="text-center mt-5">
          <h4>Sign in</h4>
          <p className="sign-in-text">Sign in to continue to ChatForte.</p>
         </div>

         <div className="d-flex justify-content-center mt-5">

            <form className="form-container row d-flex justify-content-center col-lg-5 pb-5 pt-5">

          
              <div className="d-flex flex-column col-lg-8 mb-3">
                <label className="mb-2" htmlFor="emailLogin">Email Address</label>
                <input value={emailLogin} onChange={(e) => {setEmailLogin(e.target.value)}} type="text" className="pt-2 pb-2  col-lg-12" id="emailLogin"/>
              </div>

              <div className="d-flex flex-column col-lg-8 mb-4">
                <label className="mb-2" htmlFor="passLogin">Password</label>
                <input value={passLogin} onChange={(e) => {setPassLogin(e.target.value)}} type="password" className="pt-2 pb-2" id="passLogin"/>
              </div>

              <div className="d-flex col-lg-8 mb-4 flex-row justify-content-around">

                <div className="me-5">
                  <input type="checkbox"/>
                  <span className="ms-1">Remember me</span>
                </div>
              
                

                <div className="ms-4">
                 <span><Link className="text-decoration-none bg bg-white forgot-link">Forgot Password?</Link></span>
                </div>
                

              </div>

            
              <div className="col-lg-8">
               <button className="pt-2 pb-2 col-lg-12" onClick={Submit}>Sign in</button>
              </div>

            </form>

         </div>

         <div className="d-flex justify-content-center mt-5 ">

          <div>

           <p>Dont have an account? <span><Link className="signup-link" to='/register'>Signup now</Link></span></p>
           <p>©2023 ChatForte. Created by Frances</p>

          </div>
          
         </div>

      </div>

    
    </>

  )
}

export default LoginComponents
