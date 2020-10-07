import React from 'react';

export default function Registry(props) {
  return (
    <div className='p-2'>
      <div className='text-center'>
        <p>
          <strong>
            Nathan and Kenzie have both an amazon registry and would appreciate donations to their honeymoon(Venmo) (one or the other).
          </strong>
        </p>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        <div className='mx-5'>
          <p>
            To donate to their honeymoon, use this image or the @ on venmo to donate directly to Kenzie.
          </p>
          <img src="./images/venmo.jpeg" alt="venmo" className='venmo' />
        </div>
        <div className='mx-5'>
          <p>
            To view the Amazon registry please click the button below.
          </p>
          <a href="https://www.amazon.com/wedding/mackenzie-downie-nathan-reitan--september-2021/registry/1W7Z6RB40THQB">
            <button className='registryButton rounded'>Registry</button>
          </a>
        </div>
      </div>
    </div>
  );
}
