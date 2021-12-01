import React from 'react';
import { faBriefcase, faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import dipuImg from '../../../images/IMG_0702.jpg';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


const HeroSection = () => {
    return (
        <div>
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-3">
                    <div>
                        <img className="rounded-circle img-fluid" src={dipuImg} alt="" />
                    </div>
                </div>
                <div className="col-md-9 ">
                    <Flip top cascade>
                        <h2 className="fw-bold text-uppercase">Adnan Al Shahriyar</h2>
                    </Flip>

                    <p><FontAwesomeIcon icon={faBriefcase} /> Junior Web  Developer</p>


                    {/* <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Jatrabari, Dhaka
                    </p> */}
                    <p>
                        <span className="language px-2 py-1 rounded me-2">CSS3</span>
                        <span className="language px-2 py-1 rounded me-2">HTML5</span>
                        <span className="language px-2 py-1 rounded me-2">JavaScript</span>
                        </p>
                        <p>
                        <span className="language px-2 py-1 rounded me-2">React</span>
                        <span className="language px-2 py-1 rounded me-2">MongoDB</span>
                        <span className="language px-2 py-1 rounded me-2">NodeJS</span>
                    </p>

                    <div>
                        <a href="https://drive.google.com/file/d/1MevYMHNTKEV8yzf6eFjE7_XFO5V4uWDn/view?usp=sharing" type="button" className="btn btnDwnResume me-2">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                        </a>
                        <Link to='/contact'>
                            <button className="btn btnContactMe">
                                <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Fade bottom cascade>
                <div className="">
                    <p className="text-secondary hero-section">i, I’m ADNAN AL SHAHRIYAR. I’m a junior web developer. I completed a course on web development.
                        I want to be a dedicated web developer. If I get a chance to work then I will surely do the job full of my
                        concentration and dedication. Besides, I have many projects on different types of topics. And you can
                        also check them also in my GitHub account.<Link to='/projects' className="cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also knowledge of CSS framework like bootstrap, tailwind, material-ui.
                    </p>
                </div>
            </Fade>

        </div>
    );
};

export default HeroSection;