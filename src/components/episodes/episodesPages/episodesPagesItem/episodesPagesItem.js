import React from 'react';

export const EpisodesPagesItem = ({handNextPage, allPages, handPrevPage, numberPage}) =>{
    return(
        <div>
            <button className={'btn'} onClick={handPrevPage}>Prev Page</button>
            {numberPage} of {allPages}
            <button className={'btn'} onClick={handNextPage}>Next page</button>
        </div>
    )
}
