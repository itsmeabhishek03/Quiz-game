import React, { useRef } from 'react'

export default function Player({setPlayer}) {
const inputref = useRef();
  const handleclick = () => {
    inputref.current.value && setPlayer(inputref.current.value)
  };  
  return (
    <div>
      <div className="player">
          <input placeholder='Enter your name' className='username' ref={inputref}/>
          <button className='btn' onClick={handleclick}>PLAY</button>
      </div>
    </div>
  )
}




