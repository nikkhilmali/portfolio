import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.instagram.com/nikkhil.mali" target="_blank" rel="noopener noreferrer">
          <InstagramIcon/>
        </a>
        <a href="https://twitter.com/nikkhilmali" target="_blank" rel="noopener noreferrer">
          <TwitterIcon/>
        </a>
        <a href="https://github.com/nikkhilmali" target="_blank" rel="noopener noreferrer">
          <GithubIcon/>
        </a>
        <a href="https://www.linkedin.com/in/nikhil-mali-291a961b4/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
        </a>
      </div>
      <p>&copy; 2022 NikhilPortfolio.com</p>
    </div>
  )
}

export default Footer