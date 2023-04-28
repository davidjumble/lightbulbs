import React, { useState } from "react"
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
position: relative;
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
const Header = styled.h1`
display:flex;
justify-content:center;
width:100%;
height:50px;
margin:0 auto;
`
const HeaderImage = styled.div`
background-image:url('/turnstile.jpeg')
`


const glowOn = [
  { words: "glowing", wordCount: 10, votes: 7 },
  { words: "a stormy night in a sea of arms", wordCount: 10, votes: 14 },
  { words: "like a TATE sound exhibit where 40 different regional accents fly past you screaming each lyric in turn ", wordCount: 10, votes: 20 },
  { words: " like salmon swimming towards guitars", wordCount: 10, votes: 14 }, { words: "gritty", wordCount: 10, votes: 4 },
  { words: "affectionate elbows to the jaw", wordCount: 10, votes: 7 },

  { words: "a real pumper", wordCount: 10, votes: 7 },
  { words: "really gritty", wordCount: 10, votes: 4 },
  { words: "lost my shoe, found myself", wordCount: 10, votes: 12 },
  { words: "punch dancing", wordCount: 10, votes: 5 }, { words: "the beer and sweat wild water rapids", wordCount: 10, votes: 10 }, { words: "musky", wordCount: 10, votes: 7 }, { words: "a security guard took his top off and wrestled a sheep", wordCount: 10, votes: 14 }, { words: "!!!", wordCount: 10, votes: 1 }, { words: "there was a sheep there", wordCount: 10, votes: 9 }, { words: "!", wordCount: 10, votes: 1 }, { words: "!!!", wordCount: 10, votes: 0 }, { words: "!", wordCount: 10, votes: 1 }, { words: "weirdly wool filled", wordCount: 10, votes: 9 }, { words: "!!!!!", wordCount: 10, votes: 1 }, { words: "baa", wordCount: 10, votes: 5 }, { words: "!!!!", wordCount: 10, votes: 1 },]




const Bool = () => {
  const increaseSize = (review) => {
    console.log('click')
    review.votes = review.votes + 1
  }

  const reviews = glowOn.map((review, i) => {
    const { words, votes } = review
    let size = {
      height: votes * 7,
      width: votes * 7,

    };
    return <ReviewBobbing animationTime={Math.floor(Math.random() * 4 + 5)} style={size} key={i}
      onClick={() => increaseSize(review)}
      votes={votes}>{words}</ReviewBobbing>
  })
  return <div className="bg">
    <Header><div style={{ borderRadius: '5px', overflow: 'hidden' }}>

    </div></Header >
    <div className="reviewWrapper">{reviews} </div ></div >
}

export default Bool