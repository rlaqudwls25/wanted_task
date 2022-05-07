import React, { useState } from 'react'
import { Numbers } from '../../Config/config'
import styles from './Slider.module.scss'

const Slider = () => {
  const [percent, setPercent] = useState(1)

  const percentChange = (e) => {
    setPercent(e.target.value)
  }

  const onClickBtn = (num) => {
    console.log('num', num)
    setPercent(num)
  }

  return (
    <div className={styles.sliderContainer}>
      <input className={styles.percentInput} value={percent} readOnly />
      <div className={styles.percentBox}>%</div>
      <input className={styles.progressBar} type='range' onChange={percentChange} value={percent} min='1' />
      <div className={styles.countWrapper}>
        {Numbers.map((number, idx) => {
          return (
            <button type='button' className={styles.countButton} key={idx} onClick={() => onClickBtn(number)}>
              {number}%
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
