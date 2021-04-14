import React from 'react';

export default function Registry(props) {
  return (
    <div className='p-2'>
      <div className='text-center'>
        <h4>
          <strong>
            Nathan and Mackenzie have an Amazon registry and/or would appreciate donations to their honeymoon.
          </strong>
        </h4>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
        <div className='w-100 text-center my-1'>
          <p>
            To view the Amazon registry, please click the button below.
          </p>
          <a href="https://www.amazon.com/wedding/mackenzie-downie-nathan-reitan--september-2021/registry/1W7Z6RB40THQB">
            <button className='registryButton rounded'>
              <h5 className='lobster'>
                Amazon Registry!
              </h5>
            </button>
          </a>
        </div>
        <div className='w-100 text-center my-1'>
          <p>
            To donate to their honeymoon, use this image or the @ on Venmo to donate directly to their honeymoon fund.
          </p>
          <a href="https://venmo.com/Mackenzie-Downie">
            <img src="./images/venmo.JPG" alt="venmo" className='venmo' />
          </a>
        </div>
      </div>
    </div>
  );
}
