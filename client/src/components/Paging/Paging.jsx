import React from "react";
import style from './Paging.module.css'
import { useState } from "react";

const Paging = ({ pokePerPage, pokemon, paging }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(pokemon / pokePerPage); i++) {
    pageNumber.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paging(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage(currentPage + 1);
      paging(currentPage + 1);
    }
  };

  return (
    <nav className={style.pagingBox}>
      <div className={style.prevnext} onClick={handlePrev}>
        Prev
      </div>
      <ul className={style.list}>
        {pageNumber &&
          pageNumber.map((num) => (
            <li
              className={style.num}
              key={num}
              onClick={() => {
                setCurrentPage(num);
                paging(num);
              }}
            >
              {num}
            </li>
          ))}
      </ul>
      <div className={style.prevnext} onClick={handleNext}>
        Next
      </div>
    </nav>
  );
};

export default Paging;





// const Paging = ({ pokePerPage, pokemon, paging }) => {
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(pokemon / pokePerPage); i++){
//     pageNumber.push(i);
//   }

//   return (
//     <nav className={style.pagingBox}>
//         <div className={style.prevnext}>Prev</div>
//       <ul className={style.list}>
//         {pageNumber &&
//           pageNumber.map((num) => (
//             <li className={style.num} key={num} onClick={() => paging(num)}>
//               {num}
//             </li>
//           ))}
//       </ul>
//       <div className={style.prevnext}>Next</div>
//     </nav>
//   );
// };

// export default Paging;
