import React, { useState } from 'react';
import { CorouselData } from './CorouselData';
import rigthArrow from '../../../assets/icon-rightArrow.svg'
import leftArrow from '../../../assets/icon-leftArrow.svg'

const Corousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <>
       <section className='flex flex-row justify-center'>
          <img src={leftArrow} onClick={prevSlide} style={{cursor: 'pointer'}} alt="left arrow icon" className='mr-3'/>
          {CorouselData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='slide image' className='image' />
                )}
              </div>
            );
          })}
          <img src={rigthArrow} onClick={nextSlide} style={{cursor: 'pointer'}} alt="right arrow icon" className='ml-3'/>
        </section>
      </>
    )
};
export default Corousel;

// // inisasi library default
// import React, { useState, useEffect } from "react";
// // inisiasi component
// import corousel from "../../../assets/corousel-img.svg";

// export default function Corousel({ handleAction }) {
//   // const location = useLocation();
//   // const { id } = queryString.parse(location.search.replace("?", ""));
//   // const [description, setDescription] = useState("");

//   // const date = () => {
//   //   return moment().format();
//   // };

//   // const handleSubmit = () => {
//   //   handleAction({ description, createAt: date() });
//   // };

//   // useEffect(() => {
//   //   if (!id) setDescription("");
//   // }, [id]);

//   return (
//     <div id="indicators-carousel" className="relative" data-carousel="static">
//       <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
//         <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0" data-carousel-item="active">
//           <img src={corousel} className="block absolute top-1/2 left-1/2 w-full h-96 -translate-x-1/2 -translate-y-1/2" alt="..."></img>
//         </div>

//         <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full" data-carousel-item="">
//           <img src={corousel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
//         </div>

//         <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
//           <img src={corousel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
//         </div>

//         <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
//           <img src={corousel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
//         </div>

//         <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full" data-carousel-item="">
//           <img src={corousel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
//         </div>
//       </div>

//       <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
//         <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//       </div>

//       <button type="button" className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
//         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//           <span className="hidden">Previous</span>
//         </span>
//       </button>
//       <button type="button" className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
//         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//           <span className="hidden">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// }
