import React, {useEffect, useState} from 'react';
import {service} from "../../service/servise";
import {EpisodesList} from "./episodesList";
import {EpisodesPages} from "./episodesPages";
import './episodes.css';

export const Episodes = () => {

    const [numberPage, setNumberPage] = useState(1);
    const [allPages, setAllPages] = useState(2);
    const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    const [episodes, setEpisodes] = useState([])

    const handAllEpisodes = async (count) => {
        const result = await service.getAllEpisode(count);
        console.log(result);
        let asd = result.sort((a, b) => {
            let A = a.name
            let B = b.name
            if (A < B) {
                return -1
            } else {
                return 1
            }
        })
        setEpisodes(asd);
    }

    useEffect(() => {
        handAllEpisodes(count)
    }, [count])




    return (
        <div className={'episodes-section'}>
            <h2>Episodes</h2>
            <EpisodesList episodes={episodes}/>
            <div className={'pages-section'}>
                <EpisodesPages numberPage={numberPage} setCount={setCount} count={count} allPages={allPages} setNumberPage={setNumberPage}  />
            </div>
        </div>
    )
}
