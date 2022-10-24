// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// /**
//  * Convert string to number.
//  *
//  * @author Predrag Lević <predrag.levic@croonus.com>
//  * @param {string} text
//  * @returns {number}
// */
// export const convertStringToNumber = (text) => {
//     return +text;
// }

// export function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// export function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }
