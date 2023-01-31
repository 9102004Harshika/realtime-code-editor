import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const [roomId,setroomId]=useState('');
  const [username,setusername]=useState('');
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuid();
    setroomId(id);
    toast.success('Created a new room');

  };
  const joinRoom=()=>{
     if(!roomId || !username){
         toast.error('Room id and username required');
         return;
     }
    //redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username,
      },
    });
  };
  const handleInputEnter=(e)=>{
   if(e.code=='Enter'){
    joinRoom();
   }
  }
  return <div className='homePageWrapper'>
    <div className='formWrapper'>
        <img src="/code-sync1.png" alt="logo"></img>
        <h4 className='mainLabel'>Paste Invitation Room Id</h4>
        <div className='inputGroup'>
            <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e)=>setroomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}></input>
            <input type="text" className='inputBox' placeholder='USERNAME'onChange={(e)=>setusername(e.target.value)} value={username} onKeyUp={handleInputEnter}></input>
            <button className='btn joinBtn' onClick={joinRoom}>Join</button>
            <span className='createInfo'>
                If you don't have a invite then create &nbsp;<a onClick={createNewRoom} href='' className='createNewBtn'>New room</a>
            </span>
        </div>
    </div>
    <footer>
        <h4>Built with 💛 by&nbsp;<a href="https://github.com/9102004Harshika">9102004Harshika</a></h4>
    </footer>
  </div>
}
export default Home;