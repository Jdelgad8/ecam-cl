import React from 'react';
import '../styles/categories-row.css'

function CategoriesRow (props) {
  return(
    <div className="categories-row">
      {props.children}
    </div>
  )
}

export default CategoriesRow;