import React, { useState } from 'react'
import { TabMenu } from '../../Config/config'
import styles from './Tab.module.scss'

const Tab = () => {
  const [name, setName] = useState('')

  const onClickTab = (item) => {
    console.log(item)
    setName(item)
  }
  return (
    <div className={styles.tabContainer}>
      {TabMenu.map((item, idx) => {
        return (
          <button type='button' className={styles.tabBox} key={idx} onClick={() => onClickTab(item)}>
            {item}
          </button>
        )
      })}
      <div className={styles.slider} />
    </div>
  )
}

export default Tab
