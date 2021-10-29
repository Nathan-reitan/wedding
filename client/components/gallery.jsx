import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    const tempArr = [];
    fetch('/api/gallery')
      .then(resp => resp.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          tempArr[i] = {
            original: data[i],
            thumbnail: data[i]
          };
        }
      });
    this.setState({ gallery: tempArr });
  }

  render() {
    return (
      <div>
        <ImageGallery items={this.state.gallery}/>
      </div>
    );
  }

}
