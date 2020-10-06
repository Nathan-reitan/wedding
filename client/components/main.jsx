import React from 'react';

export default function Main(props) {
  return (
    <main className='px-2 d-flex flex-wrap justify-content-center text-center'>
      <div className='kaushan storyControl'>
        <h5 className='berkshire'>Our Story</h5>
        <div>
          <p className='my-2'>
            Nathan and Mackenzie met in 2014 and went on their first date to Knottfest.
          </p>
          <div>
            <img className='w-100'src="./images/knottFest.jpg" alt="KnottFest"/>
          </div>
          <p className='my-2'>
            Their love for music helped jump start their loving relationship.
            Eventually they moved off to Montana together, where Mackenzie attended the University of Montana.
          </p>
          <div>
            <img className='w-100' src="./images/mtWaterfall.jpg" alt="Montana Waterfall"/>
          </div>
          <p className='my-2'>
            While in Montana, Nathan decided that he would (Finally, according to Kenzie) pop the question and go get her a ring.
            They planned a camping trip right outside of Yellowstone and on the way down they hiked to a waterfall where he asked her.
          </p>
          <div>
            <img className='w-100' src="./images/proposal.jpg" alt="Proposal"/>
            <p className='text-center'><em>(Thanks to the random lady who took the photo.)</em></p>
          </div>
          <p className='my-2'>
            Now they look forward to spending the rest of their lives together and building a prosperous life together.
          </p>
        </div>
      </div>
    </main>
  );
}
