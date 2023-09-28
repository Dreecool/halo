import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import  Axios  from "axios";


const PrivateRoute = ({ element }) => {

  const [auth, setAuth] = useState(null)

  useEffect(() => {

    Axios.get("https://halo-kappa.vercel.app/protectedRoute").then((response) => {

      if(response.data.message === "Authorized") {

        setAuth(true)

      } else {
        
        setAuth(false)

      }


    })

  })




  if(auth === null) {

    return;

  } else if(auth === true) {

    return element

  } else {

    return <Navigate to="/"/>

  }
  


};

export default PrivateRoute;
