
import React from 'react';
//import menuItemComponent from '../menu-item/menu-item.component';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>     
        <h1 className='title' > {title.toUpperCase()} </h1>
        <div className='preview'>   
            {
               items
               .filter((item,idx)=> idx < 4 )
               .map( ({id,...otheritemProps}) => (
                    <CollectionItem key={id}{...otheritemProps} />  
               ))
            }
        </div>
    </div>
    
);

export default CollectionPreview


