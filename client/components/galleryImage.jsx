import React from 'react';

export default function GalleryImage(props) {
  const image = props.file;
  return (
    <div style="max-width: 300px">
      <img className='w-100' src={`./images/${image}`}/>
    </div>
  );
}
