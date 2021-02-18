import React from 'react';
import {EpisodesPagesItem} from "./episodesPagesItem";

export const EpisodesPages = ({count, numberPage, allPages, setNumberPage, setCount}) =>{

    const handNextPage = () => {
        let result = [];
        let start = count.pop() + 1;
        let end = count.pop() + 25;
        for (let i = start; i <= end; i++) {
            result.push(i)
        }
        if(numberPage < allPages){
            setCount(result);
            setNumberPage(numberPage + 1)
        }
    }

    const handPrevPage = () => {
        let result = [];
        let start = count.shift() - 1;
        let end = count.shift() - 25;
        for (let i = end; i <= start; i++) {
            result.push(i)
        }
        if(numberPage > 1){
            setCount(result);
            setNumberPage(numberPage - 1)
        }
    }

    return(
        <div>
        <EpisodesPagesItem handPrevPage={handPrevPage} handNextPage={handNextPage} allPages={allPages} numberPage={numberPage}/>
        </div>
    )
}
