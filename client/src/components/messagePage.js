import  Axios  from "axios"
import { useEffect, useState } from "react"


const MessagePage = ({ userID }) => {

  const [regData, setRegdata] = useState([])
  const [name, setName] = useState()

  useEffect(() => {

    Axios.get("http://localhost:3001/getList").then(async(response) => {

    await userID.map(async(val) => {

      response.data.map(async(id) => {

        if(val.otherName_ID === id._id) {

         await setName(id.full_name);
      
        }

      })

     })

    })

    
  })

  

  return (

    <>

      <div className="m">

        <div>

          <h3>{name}</h3>

        </div>

      </div>
      
    
    </>

  )


}

export default MessagePage