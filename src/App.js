import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lightbox from 'react-image-lightbox';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaHNHhaAaALCfPHhcLbYXRpUhoKJQCaZELePcxegmGVNlcvrE',
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
                <img
                    src={images[0]}
                    onClick={() => this.setState({ isOpen: true })}
                />
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        enableZoom={true}
                    />
                }
            </div>
        );
    }
}

export default App;
