import { useEffect, useState } from "react";
import Swiper from "../components/swiper";
import Axios from 'axios'
import MessagePage from "../components/messagePage";



const Home = () => {

 
  const [userID, setUserID] = useState([]);
  const [id, IDS] = useState()

  useEffect(() => {

    Axios.get("https://halo-kappa.vercel.app/protectedRoute").then(async(response) => {

      Axios.get(`https://halo-kappa.vercel.app/getMessage?ID=${response.data.userID}`).then((response) => {

        setUserID(response.data)
        
        response.data.filter((id) => {

          IDS(id.yourName_ID)

        })

  

      

      })

    })

  }, []);


    
  return (

    <>

      <div >

        <div className="d-flex flex-row home-container bg bg-dark">


          {/* section 1*/}

          <div className="bg-white col-lg-1 d-flex flex-column">


              <div className="text-center bg-white mb-5 mt-5">
                <span className="fs-1 bg-white">
                  <i class="fa-brands fa-facebook-messenger"></i>
                </span>
              </div>

              <div  className="text-center bg-white d-flex flex-column">


                <span className="fs-4 bg-white mb-3">
                 <i class="fa-regular fa-user"></i>
                </span>

                <span className="fs-4 bg-white mb-3">
                  <i class="fa-solid fa-comment-dots"></i>
                </span>

                <span className="fs-4 bg-white mb-3">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>

                <span className="fs-4 bg-white mb-3">
                  <i class="fa-solid fa-gear"></i>
                </span>

                
              </div>


              <div  className="text-center bg-white">

                <span className="fs-4 bg-white">
                  <i class="fa-solid fa-circle-user"></i>
                </span>


              </div>

              <div  className="text-center bg-white mt-5">

                <span className="fs-4 bg-white">
                  < i class="fa-solid fa-bars"></i>
                </span>


              </div>


              <div  className="text-center bg-white mt-5">

                <span className="fs-4 bg-white">
                 <button className="logout-btn fs-5">Logout</button>
                </span>


              </div>


              
          </div>

          {/* section 2 */}

          <div className="bg-white border border-danger col-lg-2">



            <p className="bg-white fs-2 ms-3 fw-bold">Chats</p>

            <div className="col-lg-10 ms-3">

                <span className="ms-2"> 
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
             
              <input className="ms-3 search-bar pt-2 pb-2" placeholder="Search Messages or Users"/>


            </div>

            <div className="col-lg-10 ms-3 mt-5">

                <Swiper userID={id}/>


            </div>

          </div>


          {/* section 3 */}

          <div className=" bg-white border border-danger col-lg-9 ss">

            <MessagePage userID={userID}/>

          </div>

        </div>

        


     

      </div>

      


    </>

  )

}

export default Home
