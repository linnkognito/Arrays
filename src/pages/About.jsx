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

// {
// const [isExpanded, setIsExpanded] = useState(false);
// const handleButtonClick = () => setIsExpanded((isExpanded) => !isExpanded);
// collapsedNumWords = 10,
// btnTextOpen = 'Show more',
// btnTextClose = 'Show less',
// children,
// }
// {
/*<p>
        <span className='text-container'>
        {isExpanded ? children : `${previewText()}... `}
        
        <button
        style={{ display: 'inline', verticalAlign: 'middle' }}
        className='button-small'
        onClick={() => handleButtonClick()}
        >
        {isExpanded ? btnTextClose : btnTextOpen}
        </button> 
        </span>
        </p>*/
// }

// function previewText() {
//   const markup = React.Children.toArray(children)
//     .map((child) => {
//       // Plain string
//       if (typeof child === 'string') return child;

//       // HTML element
//       if (
//         React.isValidElement(child) &&
//         typeof child.props.children === 'string'
//       ) {
//         return child.props.children;
//       }
//       return '';
//     })
//     .join(' ');

//   return markup.split(' ').slice(0, collapsedNumWords).join(' ');
// }

//___A B O U T__________________________________//
// function About({
//   collapsedNumWords = 10,
//   btnTextOpen = 'Show more',
//   btnTextClose = 'Show less',
//   children,
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleButtonClick = () => setIsExpanded((isExpanded) => !isExpanded);

//   function previewText() {
//     const markup = React.Children.toArray(children)
//       .map((child) => {
//         // Plain string
//         if (typeof child === 'string') return child;

//         // HTML element
//         if (
//           React.isValidElement(child) &&
//           typeof child.props.children === 'string'
//         ) {
//           return child.props.children;
//         }
//         return '';
//       })
//       .join(' ');

//     return markup.split(' ').slice(0, collapsedNumWords).join(' ');
//   }

//   return (
//     <div className='about'>
//       <p className='intro'>Welcome to the Array Challenge app!</p>

//       <p>
//         <span className='text-container'>
//           {isExpanded ? children : `${previewText()}... `}

//           <button
//             style={{ display: 'inline', verticalAlign: 'middle' }}
//             className='button-small'
//             onClick={() => handleButtonClick()}
//           >
//             {isExpanded ? btnTextClose : btnTextOpen}
//           </button>
//         </span>
//       </p>
//     </div>
//   );
// }
