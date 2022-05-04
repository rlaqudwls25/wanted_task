import React from 'react'
import styles from './Routes.module.scss'
import Toggle from './Toggle/Toggle'
import Tab from './Tab/Tab'
import Slider from './Slider/Slider'
import Input from './Input/Input'
import Dropdown from './Dropdown/Dropdown'

const index = () => {
  return (
    <div className={styles.app}>
      <div>
        <Toggle />
      </div>
      <div>
        <Tab />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  )
}

export default index
