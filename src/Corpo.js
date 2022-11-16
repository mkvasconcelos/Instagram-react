import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

function Corpo(){
    return(
    <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    </div>
    )
};

export default Corpo;