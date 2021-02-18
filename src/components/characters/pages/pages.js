import React from 'react';
import {PagesItem} from "./pagesItem";

export const Pages = ({setCount, allPages, numberPage, setNumberPage, count}) =>{

    const handNextPage = () => {
        let result = [];
        let start = count.pop() + 1;
        let end = count.pop() + 11;
        for (let i = start; i <= end; i++) {
            result.push(i)
        }
        if (numberPage < allPages) {
            setNumberPage(numberPage + 1);
            setCount(result);
        }
    }

    const handPrevPage = () => {
        let result = [];
        let start = count.shift() - 1;
        let end = count.shift() - 11;
        for (let i = end; i <= start; i++) {
            result.push(i)
        }
        if (numberPage > 1) {
            setNumberPage(numberPage - 1);
            setCount(result);
        }
    }

    return(
        <div>
            <PagesItem handPrevPage={handPrevPage} handNextPage={handNextPage} allPages={allPages} numberPage={numberPage}/>
        </div>
    )
}
