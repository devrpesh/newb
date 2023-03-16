import React, { Component } from 'react';
import Social from '../components/Social';
import disclaimer from '../resources/disclaimer.mp3';
import profile from '../resources/profile.webp';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

class App extends Component {
    state = {
        disclaimerText: 'Disclaimer',
    };

    render() {
        return (
            <div id="main">
                <div id="container-1">
                    <img
                        id="profile"
                        className="img-fluid"
                        alt="Profile"
                        src={profile}
                    />
                    <h1>NEWB</h1>
                    <p>Gaming Content Creator, Gaali Artist</p>
                    <button
                        onClick={this.playDisclaimer}
                        id="disclaimer"
                        className="btn btn-danger shadow"
                    >
                        {this.state.disclaimerText}
                    </button>
                    <Social />
                </div>
            </div>
        );
    }

    playDisclaimer = () => {
        let disclaimerBtn = document.getElementById('disclaimer');
        let spinnerIcon = document.createElement('i');
        let audio = new Audio(disclaimer);

        spinnerIcon.classList.add('fa', 'fa-spinner', 'fa-spin');

        audio.addEventListener('canplaythrough', () => {
            disclaimerBtn.disabled = true;
            disclaimerBtn.innerHTML = '';
            disclaimerBtn.appendChild(spinnerIcon);
            audio.play();
        });

        audio.addEventListener('ended', () => {
            disclaimerBtn.removeChild(spinnerIcon);
            disclaimerBtn.innerHTML = this.state.disclaimerText;
            disclaimerBtn.disabled = false;
        });
    };
}

export default App;
