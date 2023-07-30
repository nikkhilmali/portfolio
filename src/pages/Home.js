import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="about">
                <h2>Hi, My Name is Nikhil</h2>
                <div className="prompt">
                    <p> Final Year UnderGraduate with a passion for learning and creating</p>
                    <a href="https://www.linkedin.com/in/nikhil-mali-291a961b4/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/nikkhilmali" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href="mailto: nikkhil312@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>DSA<span> (C, C++)</span></h2>
                        {/* <span>Languages: C, C++</span> */}
                    </li>
                    <li className="item">
                    <h2>Back-End<span> (Express, JS)</span></h2>
                        {/* <span>Express|JS</span> */}
                    </li>
                    <li className="item">
                    <h2>Front-End<span> (ReactJS, HTML, CSS, JS)</span></h2>
                        {/* <span>This is the items for the fornt end</span> */}
                    </li>
                    <li className="item">
                    <h2>DataBase<span> (SQL, MongoDB)</span></h2>
                        {/* <span>This is the items for the fornt end</span> */}
                    </li>
                    <li className="item">
                    <h2>FastAPI</h2>
                        {/* <span>This is the items for the fornt end</span> */}
                    </li>
                    <li className="item">
                    <h2>DataScience</h2>
                        {/* <span>This is the items for the fornt end</span> */}
                    </li>
                    <li className="item">
                    <h2>DevOps</h2>
                        {/* <span>This is the items for the fornt end</span> */}
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home