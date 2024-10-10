

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaRobot } from 'react-icons/fa';
// import { HiChat } from 'react-icons/hi'; // For the speech bubble

// const AIBidButton = () => {
//   const [step, setStep] = useState(0);

//   const handleNext = () => {
//     if (step === 0) {
//       setStep(1);
//     } else if (step === 1) {
//       setStep(2);
//     }
//   };

//   const handleGotIt = () => {
//     setStep(3);
//   };

//   return (
//     <motion.div 
//       className='fixed bottom-8 right-8 flex flex-col items-center'
//       initial={{ opacity: 0, scale: 0.8 }} 
//       animate={{ opacity: 1, scale: 1 }} 
//       transition={{ duration: 0.8 }}
//     >
//       {/* Speech Bubble */}
//       {step < 3 && (
//         <motion.div 
//           className='relative mb-4'
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className='relative bg-teal-100 text-teal-900 p-6 rounded-xl shadow-lg border border-teal-300 max-w-xs sm:max-w-sm lg:max-w-md'>
//             <div className='flex items-center mb-4'>
//               <HiChat className='text-teal-600 text-2xl mr-2' />
//               <span className='text-lg font-medium'>
//                 {step === 0 && "Hi, I'm your AI assistant! How can I help you today?"}
//                 {step === 1 && "I am instructed by Sachet to help you find wonderful cars!"}
//               </span>
//             </div>
//             <div className='flex justify-end'>
//               {step === 1 ? (
//                 <button 
//                   className='bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300'
//                   onClick={handleGotIt}
//                 >
//                   Got it!
//                 </button>
//               ) : (
//                 <button 
//                   className='bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300'
//                   onClick={handleNext}
//                 >
//                   Next
//                 </button>
//               )}
//             </div>
//             {/* Arrow */}
//             <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-teal-100'></div>
//           </div>
//         </motion.div>
//       )}
      
//       {/* Robot Icon */}
//       {step < 3 && (
//         <motion.div 
//           className='relative mb-4'
//           animate={{ rotate: [0, 360] }}
//           transition={{ loop: Infinity, duration: 4 }}
//         >
//           <FaRobot className='text-6xl text-teal-600' />
//         </motion.div>
//       )}
      
//       {/* Button */}
//       {step === 3 && (
//         <motion.div 
//           className='bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300 cursor-pointer'
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => window.location.href = '/auction'}
//         >
//           Wanna Bid?
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default AIBidButton;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import { HiChat } from 'react-icons/hi'; // For the speech bubble
import { useNavigate } from 'react-router-dom';

const AIBidButton = ({ carId }) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    }
  };

  const handleGotIt = () => {
    setStep(3);
  };

  const handleBid = () => {
    // Navigate to the auction page with the car ID
    navigate(`/auction/${carId}`);
  };

  return (
    <motion.div 
      className='fixed bottom-8 right-8 flex flex-col items-center'
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Speech Bubble */}
      {step < 3 && (
        <motion.div 
          className='relative mb-4'
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='relative bg-teal-100 text-teal-900 p-6 rounded-xl shadow-lg border border-teal-300 max-w-xs sm:max-w-sm lg:max-w-md'>
            <div className='flex items-center mb-4'>
              <HiChat className='text-teal-600 text-2xl mr-2' />
              <span className='text-lg font-medium'>
                {step === 0 && "Hi, I'm your AI assistant TurboTeddy! How can I help you today?"}
                {step === 1 && "I am instructed by Sachet to help you find wonderful cars!"}
              </span>
            </div>
            <div className='flex justify-end'>
              {step === 1 ? (
                <button 
                  className='bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300'
                  onClick={handleGotIt}
                >
                  Got it!
                </button>
              ) : (
                <button 
                  className='bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300'
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
            {/* Arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-teal-100'></div>
          </div>
        </motion.div>
      )}
      
      {/* Robot Icon */}
      {step < 3 && (
        <motion.div 
          className='relative mb-4'
          animate={{ rotate: [0, 360] }}
          transition={{ loop: Infinity, duration: 4 }}
        >
          <FaRobot className='text-6xl text-teal-600' />
        </motion.div>
      )}
      
      {/* Button */}
      {step === 3 && (
        <motion.div 
          className='bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300 cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBid}
        >
          Wanna Bid?
        </motion.div>
      )}
    </motion.div>
  );
};

export default AIBidButton;
