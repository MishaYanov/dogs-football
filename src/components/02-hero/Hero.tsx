import React, { useState } from 'react';
import '../../styles/components/hero.scss'
import Canvas from './canvas-logic/Canvas';

export const Hero = () => {
    const [team, setTeam] = useState("Dogs")
  return (
    <div className="hero-wrapper">
        <div className="hero-text">
            <h1 className='hero-big-text'>Join the <span className="highlight">{team}</span> Today!</h1>
        </div>
        <div className="hero-graphics">
            <Canvas></Canvas>
        </div>
    </div>
  )
}
