import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"



const MoveUpDown = keyframes`
0%,
  100% {
    bottom: 0;
  }

  50% {
    bottom: 10px;
  }`
const ReviewBobbing = styled.div`
color:lavenderblush;
animation: ${MoveUpDown} ${props => props.animationTime}s linear infinite;
animation-time: ${props => props.animationTime};
position:relative;
font-family:futura;
left: 0;
bottom: 0;
text-decoration: none;
font-size: 5pt;
display: inline-flex;
background-color:palevioletred;
justify-content: center;
align-items: center;
border-radius: 50%;
max-width: 700px;
max-height: 700px;
min-width: 10px;
min-height: 10px;
margin: 10px;
overflow: hidden;
padding:10px;
`


export const Review = ({ votes, words, type }) => {

  const [selected, updateSelected] = useState(false)

  const backgroundColors = {
    security: 'pink',
    punter: 'tomato',
    barStaff: 'teal',
    band: 'coral',
    crew: 'lemon'
  }

  const fontColors = {
    security: 'lavender',
    punter: 'lavender',
    barStaff: 'lavender',
    band: 'lavender',
    crew: 'lavender'
  }

  let reviewStyles = {
    height: votes * 7,
    width: votes * 7,
    transitionDuration: '1000ms',
    transform: selected ? 'scaleX(1.5) scaleY(1.5)' : 'scaleX(1) scaleY(1)',
    boxShadow: selected ? ' 0 0 0 3px #e78267' : '',
    backgroundColor: backgroundColors[type],
    color: fontColors[type]
  };

  return <ReviewBobbing animationTime={Math.floor(Math.random() * 4 + 5)} style={reviewStyles}
    onClick={() => updateSelected(!selected)}
    votes={votes}>{words}</ReviewBobbing>


};

