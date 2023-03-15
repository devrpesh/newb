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
          <img id="profile" className='img-fluid' alt="Profile" src="https://thumbs2.imgbox.com/78/b6/A3Y8zuYd_t.jpg"></img>
          <h1>NEWB</h1>
          <p>Gaming Content Creator, Gaali Artist</p>
          <button onClick={this.playDisclaimer} className='btn btn-danger shadow' style={{ marginBottom: "1rem", paddingRight: "2rem", paddingLeft: "2rem", fontFamily: "gsans-medium" }}>Disclaimer</button>
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
