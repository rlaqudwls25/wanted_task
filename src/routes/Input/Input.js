import React, { useState } from 'react'
import styles from './Input.module.scss'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

const Input = () => {
  const [check, setCheck] = useState(false)
  const [emailCheck, setEmailCheck] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [emailMsg, setEmailMsg] = useState('')

  const checkEmail = (e) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    if (regExp.test(e.target.value)) {
      setCheck(true)
      setEmailCheck(true)
    } else {
      setCheck(false)
      setEmailCheck(false)
      setEmailMsg('invalid e-mail address.')
      if (e.target.value === '') {
        setEmailMsg('')
      }
    }
  }

  const show = () => {
    setShowPassword(!showPassword)
  }

  const enterKeyEvent = (e) => {
    if (e.keyCode === 13) {
      checkEmail(e)
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.emailBox}>
        <span>E-mail</span>
        <input type='email' placeholder='E-mail' onChange={checkEmail} onKeyUp={enterKeyEvent} />
        {emailCheck ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </div>
      <div className={styles.warnBox}>{check ? '' : <span>{emailMsg}</span>}</div>
      <div className={styles.passWordBox}>
        <span>Password</span>
        <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
        <button type='button' onClick={show}>
          {showPassword ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </button>
      </div>
    </div>
  )
}

export default Input
