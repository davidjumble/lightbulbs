import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Review } from "../../components/review"
import { Switch } from "../../components/Switch"
import styles from './reviews.module.scss'
import bg from '../../assets/images/pantest.jpg'










const glowOn = [
  { words: "glowing", wordCount: 10, votes: 7, type: 'punter' },
  { words: "a stormy night in a sea of arms", wordCount: 10, votes: 14, type: 'barStaff' },
  { words: "like a TATE sound exhibit where 40 different regional accents fly past you screaming each lyric in turn ", wordCount: 10, votes: 20, type: 'punter', },
  { words: " like salmon swimming towards guitars", wordCount: 10, votes: 14, type: 'punter' }, { words: "gritty", wordCount: 10, votes: 4, type: 'crew' },
  { words: "affectionate elbows to the jaw", wordCount: 10, votes: 7, type: 'crew' },

  { words: "a real pumper", wordCount: 10, votes: 7, type: 'band' },
  { words: "really gritty", wordCount: 10, votes: 4, type: 'band' },
  { words: "lost my shoe, found myself", wordCount: 10, votes: 12, type: 'band' },
  { words: "punch dancing", wordCount: 10, votes: 5 }, { words: "the beer and sweat wild water rapids", wordCount: 10, votes: 10, type: 'punter' }, { words: "musky", wordCount: 10, votes: 7, type: 'punter' }, { words: "a security guard took his top off and wrestled a sheep", wordCount: 10, votes: 14, type: 'crew' }, { words: "!!!", wordCount: 10, votes: 1, type: 'crew' }, { words: "there was a sheep there", wordCount: 10, votes: 9, type: 'crew' }, { words: "!", wordCount: 10, votes: 1, type: 'barStaff' }, { words: "!!!", wordCount: 10, votes: 0, type: 'security' }, { words: "!", wordCount: 10, votes: 1, type: 'security' }, { words: "weirdly wool filled", wordCount: 10, votes: 9, type: 'security' }, { words: "!!!!!", wordCount: 10, votes: 1, type: 'punter' }, { words: "baa", wordCount: 10, votes: 5 }, { words: "!!!!", wordCount: 10, votes: 1, type: 'security' },]




const Bool = () => {



  const reviews = glowOn.map((review, i) => {

    return <Review words={review.words} votes={review.votes} type={review.type} key={i} />
  })
  return <div className="bg" style={{

    width: '100%',
    height: '100%',
  }}>

    <div className="container">
      <div className={styles.slidingBackground} style={{

        height: '500px',
        //width is 3 x the image width
        width: '5076px',
        background: `url(${bg.src}) repeat-x`,


      }}></div>
    </div >
    <Switch />
    <div className={styles.reviewWrapper}>{reviews} </div >
  </div >
}

export default Bool