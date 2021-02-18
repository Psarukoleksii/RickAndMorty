import React from 'react';

export const PagesItem = ({handNextPage, handPrevPage, allPages, numberPage}) =>{
    return(
        <div>
            <button className={'btn'} onClick={handPrevPage}>Prev Page</button>
            {numberPage} of {allPages}
            <button className={'btn'} onClick={handNextPage}>Next page</button>
        </div>
    )
}
