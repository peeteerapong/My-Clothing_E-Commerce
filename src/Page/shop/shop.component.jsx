import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../component/preview-collections/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super();

        this.state = {
           collections : SHOP_DATA

        };

    }

    render(){
        const {collections} = this.state;
        return (<div className ='shop-page'>  
            {
                collections.map(({id,...otherCollectionprops} )=> (
                    <CollectionPreview key={id} {...otherCollectionprops} />
                ))
            }
         </div>)
    }

}export default ShopPage;