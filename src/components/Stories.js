import React from 'react';
import Story from './Story';

function Stories(){
    const stories = [<Story title="9gag"/>,<Story title="meowed"/>,<Story title="barked"/>,<Story title="nathanwpylestrangeplanet"/>,
    <Story title="wawawicomics"/>,<Story title="respondeai"/>,<Story title="filomoderna"/>,<Story title="memeriagourmet"/>];
    return(
        <div class="stories">
            {stories.map((story) => <div>{story}</div>)};
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
};

export default Stories;