import React from 'react';
import {PagesLocationItem} from "./pagesLocationItem";

export const PagesLocation = ({count, allPages, setCount}) => {

    const handNextPage = () => {
        if (count < allPages.pages) {
            setCount(count + 1)
        }
    }

    const handPrevPage = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <PagesLocationItem handPrevPage={handPrevPage} handNextPage={handNextPage} count={count} allPages={allPages}
                               setCount={setCount}/>
        </div>
    )
}
