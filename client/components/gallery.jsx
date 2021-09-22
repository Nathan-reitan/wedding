import React from 'react';
import GalleryImage from './galleryImage';

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
    fetch('/api/gallery')
      .then(resp => resp.json())
      .then(data => {
        return this.setState(state => ({
          gallery: data
        }));
      });
  }

  render() {
    return (
      <div>
        {
          this.state.gallery.map(image => {
            let key = 0;
            key++;
            return (
              <GalleryImage key={key} file={image}/>
            );
          })
        }
      </div>
    );
  }

}
