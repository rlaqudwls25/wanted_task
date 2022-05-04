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
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default index
