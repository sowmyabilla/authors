import React, { useState, useEffect } from 'react';
import { FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';
import { Data } from './Data';

const Pagination = ({ postsPerPage, totalPosts, paginate,pages=10,setCurrentPage }) => {
    const [currentButton, setCurrentButton] = useState(1)
    const [index, setIndex] = React.useState(0)
    const [posts, setPosts] = useState(Data)
    // const numb=paginate(number)
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    };
   console.log(pageNumbers)
    


   const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

   useEffect(() => {
     let tempNumberOfPages = [...arrOfCurrButtons]
 
     let dotsInitial = '...'
     let dotsLeft = '... '
     let dotsRight = ' ...'
 
     if (pageNumbers.length < 6) {
       tempNumberOfPages = pageNumbers
     }
 
     else if (currentButton >= 1 && currentButton <= 3) {
       tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length]
     }
 
     else if (currentButton === 4) {
       const sliced = pageNumbers.slice(0, 5)
       tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length]
     }
 
     else if (currentButton > 4 && currentButton < pageNumbers.length - 2) {               // from 5 to 8 -> (10 - 2)
       const sliced1 = pageNumbers.slice(currentButton - 2, currentButton)                 // sliced1 (5-2, 5) -> [4,5] 
       const sliced2 = pageNumbers.slice(currentButton, currentButton + 1)                 // sliced1 (5, 5+1) -> [6]
       tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]) // [1, '...', 4, 5, 6, '...', 10]
     }
     
     else if (currentButton > pageNumbers.length - 3) {                 // > 7
       const sliced = pageNumbers.slice(pageNumbers.length - 4)       // slice(10-4) 
       tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
     }
     
     else if (currentButton === dotsInitial) {
       // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3 
       // arrOfCurrButtons[3] = 4 + 1 = 5
       // or 
       // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
       // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
       setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1) 
     }
     else if (currentButton === dotsRight) {
       setCurrentButton(arrOfCurrButtons[3] + 2)
     }
 
     else if (currentButton === dotsLeft) {
       setCurrentButton(arrOfCurrButtons[3] - 2)
     }
 
     setArrOfCurrButtons(tempNumberOfPages)
     setCurrentPage(currentButton)
   }, [currentButton])
 





    return (
        <nav>
            <ul className="pagination-container">
         
            <a
        href="#"
        className={`${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(numb => numb <= 1 ? numb : numb - 1)}
      >
         <FaChevronLeft />
      </a>         
 
                      
                
                {arrOfCurrButtons.map(((item, index) => {
                    return <a
                      href="#"
                      key={index}
                      className={`${currentButton === item ? 'active' : ''}`}
                      onClick={() => setCurrentButton(item)}
                    >
                      {item}
                    </a>
                  }))}
               
               <a
        href="#"
        className={`${currentButton === pageNumbers.length ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(numb => numb >= pageNumbers.length ? numb : numb + 1)}
      >
         <FaChevronRight />
      </a>
                  </ul>
        </nav>
    )
}

export default Pagination
