import React from 'react';

export default function header(props) {
  return (
    <header className='header d-flex justify-content-center align-items-end cursive m-0'>
      <div className='container'>
        <div className='text-center'>
          <div className='mx-2'>{"Nathan and Mackenzie's"}</div>
          <div className='mx-2'>Wedding</div>
          <div className='mx-2'>September 5, 2021</div>
          <div className='mx-2'>Ceremony starts at 5pm </div>
        </div>
      </div>
    </header>
  );
}
