import React from 'react';


export const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Task ReactJS</h5>
                            <p className="grey-text text-lighten-4">This project created by Oleksii Psaruk</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/Psarukoleksii">My
                                    GitHub</a></li>
                                <li><a className="grey-text text-lighten-3"
                                       href="https://www.linkedin.com/in/olesii-psaruk-52a682203/">Linkedin</a></li>
                                <li><a className="grey-text text-lighten-3"
                                       href="https://www.instagram.com/oleksiy_psaruk/">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2021 Copyright Text
                    </div>
                </div>
            </footer>
        </div>
    )
}
