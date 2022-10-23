import * as React from 'react';
import "../styles/index.scss";



const category = ({categoryName}) => {
  return (
   <div class="category-container">
   <p class="highlight">{categoryName}</p>
   </div>
  )
}

export default category