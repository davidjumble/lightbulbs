import React, { useState } from 'react'
import styles from './styles.module.scss';

export const Switch = ({ checked = false, color = '#6ab04c' }) => {
  const [toggle, setToggle] = useState(checked)


  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderLine}>
        <div className={`${styles.dotContainer} ${toggle ? styles.clicked : ''}`} onClick={() => { setToggle(!toggle) }} >
          <div className={`${styles.dot} ${toggle ? styles.clickedDot : ''}`}></div>
        </div >
      </div>
    </div>
  )
}
