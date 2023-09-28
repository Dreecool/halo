import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import io from "socket.io-client"; 

const SwiperComponent = ({ userID }) => {

        const socket = io("wss://halo-kappa.vercel.app", {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity
      });

     const [onlineUsers, setOnlineUsers] = useState([]);
     

    useEffect(() => {

      socket.emit("send-id", userID, () => {

        console.log('User ID sent to the backend:', userID);

      });

      socket.on('sended', (onlineUsers) => {
        
        setOnlineUsers(onlineUsers);
  
      });

    })

    
    
 
   

  return (

    <div>

      <Swiper spaceBetween={20} slidesPerView={4} className='pt-3 pb-3 pe-2 ps-2'>


        {onlineUsers.map((val) => {

          return <SwiperSlide>{val.full_name}</SwiperSlide>

        })}    

         

    
      </Swiper>

    
       
    </div>
  );
};

export default SwiperComponent;
