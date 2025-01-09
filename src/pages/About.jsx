// import React, { useState } from 'react';
import PageNav from '../components/common/PageNav';

function About() {
  return (
    <>
      <PageNav />

      <div className='about'>
        <p className='intro'>Welcome to the Array Challenge app!</p>

        <div className='text-container'>
          <p>
            Designed for JavaScript beginners & other cool nerds, this app is a
            playground to put your array manipulation skills to the test.
          </p>
          <br />
          <br />
          <p>
            I have included a handful of clues & one example solution to guide
            you if you're stuck, or just curious what happens if you click the
            red button.
          </p>
          <br />
          <br />
          <p>
            But remember — there's no “right” way to solve a JavaScript problem.
            If your code works, you did it.
          </p>
          <br />
          <br />
          <p>Pat yourself on the back & keep on hackin’.</p>
        </div>
      </div>
    </>
  );
}

export default About;
