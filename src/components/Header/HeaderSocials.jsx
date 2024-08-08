import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FiGithub } from "react-icons/fi"
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
      <a href="https://github.com" target="_blank"><FiGithub/></a>
      <a href="https://gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials
