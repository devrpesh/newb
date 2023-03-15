import { Component } from 'react';
import disclaimer from './resources/disclaimer.mp3';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="main" >
        <div id="container-1">
          <img id="profile" className='img-fluid' alt="Profile" src="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-1/294531711_593834018777264_4483344312901387270_n.jpg?stp=dst-jpg_s320x320&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=c6021c&amp;_nc_ohc=7M2ivkNL450AX_XRpxg&amp;_nc_ht=scontent.fdac20-1.fna&amp;oh=00_AfDd3cFAGbppriwpMDBxCj1AW0AhMUJPMSJGUa32nXT6jg&amp;oe=6411A225"></img>
          <h1>NEWB</h1>
          <p>Gaming Content Creator, Gaali Artist</p>
          <button onClick={this.playDisclaimer} className='btn btn-danger' style={{ marginBottom: "1rem" }}>Disclaimer</button>
          <div id="container-2">
            <a href='https://www.facebook.com/fakenewb' target='_blank' rel='noreferrer'>
              <i className='fa fa-facebook fa-lg' />
            </a>
            <a href='https://www.instagram.com/fakenewb' target='_blank' rel='noreferrer'>
              <i className='fa fa-instagram fa-lg' />
            </a>
            <a href='mailto:imnewbviet@gmail.com' target='_blank' rel='noreferrer'>
              <i className='fa fa-envelope fa-lg' />
            </a>
            <a href='https://www.youtube.com/@fakenewb' target='_blank' rel='noreferrer'>
              <i className='fa fa-youtube fa-lg' />
            </a>
          </div>
        </div>
      </div >
    );
  }

  playDisclaimer() {
    console.log('hello');
    let audio = new Audio(disclaimer);
    audio.play();
  }

}

export default App;
