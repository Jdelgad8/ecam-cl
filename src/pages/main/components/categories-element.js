import React from 'react';
import BlackTitle from '../../../common/components/black-title';
import '../styles/categories-element.css';
import Image from '../../../common/components/image';

function CategoriesElement (props) {

    return(
      <div className="categories-element"> 
        <BlackTitle>{props.children}</BlackTitle>
        <Image 
          src={props.src} 
          width={240} 
          height={160} 
        />
      </div>
    )
}  


export default CategoriesElement;