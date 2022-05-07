import React, { useState } from 'react'
import styles from './Toggle.module.scss'
import { ToggleName } from '../../Config/config'

const Toggle = () => {
  const [check, setCheck] = useState(false)

  const onCheckChange = () => {
    setCheck(!check)
    console.log(check)
  }
  return (
    <div className={styles.toggleContainer}>
      <div className={check ? `${styles.buttonWrapper}` : `${styles.buttonLeftWrapper}`} />
      {ToggleName.map((item) => {
        return (
          <div
            className={item.name === '기본' ? `${styles.basic_title}` : `${styles.detail_title}`}
            key={item.id}
            role='button'
            tabIndex={item.id}
            onClick={() => onCheckChange()}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
export default Toggle
