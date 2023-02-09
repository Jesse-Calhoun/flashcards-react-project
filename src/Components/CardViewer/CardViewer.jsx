import React from 'react';
import Card from "../Card/Card";

const CardViewer = ({cards}) => {
    return ( 
        <div>
            <Card cards={cards}/>
                <ul>
                    <li>
                        <button>Prev</button>
                    </li>
                    <li>
                        <button>Next</button>
                    </li>
                </ul>
        </div>
     );
}
 
export default CardViewer;