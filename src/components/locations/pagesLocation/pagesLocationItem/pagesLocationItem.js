import React from 'react';

export const PagesLocationItem = ({handPrevPage, count, allPages, handNextPage}) => {
    return (
        <div>
            <button className={'btn'} onClick={()=>handPrevPage()}>Prev Page</button>
            {count} of {allPages.pages}
            <button className={'btn'} onClick={()=>handNextPage()}>Next Page</button>
        </div>
    )
}
