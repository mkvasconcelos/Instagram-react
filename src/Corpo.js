import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';

function Corpo(){
    return(
    <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />
            <SideBar />
        </div>
    </div>
    )
};

export default Corpo;