import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards}) => {
    return ( 
        <div>
            <CardViewer cards={cards} />
        </div>
     );
}
 
export default CardContainer;