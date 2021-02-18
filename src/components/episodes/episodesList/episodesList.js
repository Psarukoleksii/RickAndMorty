import React from 'react';
import {EpisodesItem} from "../episodesItem";
import './episodesList.css';

export const EpisodesList = ({episodes}) =>{
    return(
        <div className={'episodes-list'}>
            {
                episodes.map(value=> <EpisodesItem items={value}/>)
            }
        </div>
    )
}
