import React from 'react';
import './episodesItem.css';

export const EpisodesItem = ({items}) =>{

    return(
        <div className={'episodes-item'}>
            <p>
                Episode Name: {items.name}
            </p>
            <p>
                Date: {items.air_date}
            </p>
        </div>
    )
}
