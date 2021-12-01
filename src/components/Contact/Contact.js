import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MyForm from './MyForm';
import Flip from 'react-reveal/Flip';

const Contact = () => {
    return (
        <div className="container">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="mb-3 fw-bold">Please send your text here</p>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6">
                    <p className="fw-bold">You also find me</p>
                    <hr />

                    <div className="mt-4 ">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh.</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 1713 799070</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> adnanal717gmail.com</p>

                        <p>
                            <a href="https://www.linkedin.com/in/adnan-al-shahriyar/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                            <a href="https://github.com/ADNAN14219" rel="noreferrer" target="_blank" className="btn btn-github me-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;