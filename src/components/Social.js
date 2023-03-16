import React from 'react';
import 'font-awesome/css/font-awesome.css';

function Social() {
    return (
        <div id="social-container">
            <a
                href="https://www.facebook.com/fakenewb"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-facebook fa-lg" />
            </a>
            <a
                href="https://www.instagram.com/fakenewb"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-instagram fa-lg" />
            </a>
            <a
                href="mailto:imnewbviet@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-envelope fa-lg" />
            </a>
            <a
                href="https://www.youtube.com/@fakenewb"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-youtube fa-lg" />
            </a>
        </div>
    );
}

export default Social;
