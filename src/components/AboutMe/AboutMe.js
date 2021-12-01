import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';


const AboutMe = () => {
    return (

        <div className="container mb-5">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faUser} /> About Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="container about-container">



                <Fade bottom >
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faIdCard} /> About Me
                                </p>
                            </div>
                            <div className="col-md-8 ">


                                <p style={{ textAlign: 'justify' }}>
                                    Hi, I’m ADNAN AL SHAHRIYAR. I’m a junior web developer. I completed a course on web development.
                                    I want to be a dedicated web developer. If I get a chance to work then I will surely do the job full of my
                                    concentration and dedication. Besides, I have many projects on different types of topics. And you can
                                    also check them also in my GitHub account.
                                    <Link to="/projects">projects</Link> using HTML5, CSS3, React, Bootstrap, Tailwind, JavaScript, Node.js, MongoDB etc. As a  Junior Web Developer position my keen attention to detail and designing knowledge will be an added advantage for me to serve any company with a quality service.
                                </p>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom>
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faUserGraduate} /> Education

                                </p>
                            </div>

                            <div className="col-md-8">
                                <div>
                                    <p className="fw-bold my-0">University of Dhaka</p>
                                    <p>BS'c in Leather Products Engineering </p>
                                    <ul>
                                        {/* <li> </li> */}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4 ">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* 1st row */}
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-javascript-plain colored display-4"></i>
                                        <p className="fw-bold">JavaScript</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-react-original colored display-4"></i>
                                        <p className="fw-bold">React</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-nodejs-plain colored display-4"></i>
                                        <p className="fw-bold">Node.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-express-original colored display-4"></i>
                                        <p className="fw-bold">Express.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-mongodb-plain colored display-4"></i>
                                        <p className="fw-bold">MongoDB</p>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-bootstrap-plain colored display-4"></i>
                                        <p className="fw-bold">Bootstrap 5</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">HTML5</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">CSS3</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-git-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">Git</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                </div>



                                {/* 4th row */}
                                <div className="row">

                                </div>


                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Professional Training
                                </p>
                            </div>

                            <div className="col-md">

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>1. Complete Web Development Course</b>/ Programming Hero</p>
                                    <p className="">Jun 2021 - Dec 2021</p>
                                </div>

                            </div>

                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Work Experience
                                </p>
                            </div>

                        </div>
                    </section>
                </Fade>
                <hr />

                {/* <section className="about-section" >
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Education</h2>
                        </div>

                        <div className="col-md-8">
                            <ul>
                                <li className="mt-2">Bachelor's degree in Business Information Technology/ University of Greenwich</li>
                                <li className="mt-2">Higher Secondary School Certificate/ Ideal College, Dhaka, Bangladesh.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr /> */}
                <Fade bottom>
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faLanguage} />  Language
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">English</li>
                                    <li className="mt-2">Bengali</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>

            </div>




        </div >
    );
};

export default AboutMe;