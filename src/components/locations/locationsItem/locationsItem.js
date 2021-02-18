import React from 'react';
import './locationsItem.css';

export const LocationsItem = ({items}) =>{
    return(
        <div className={'location-item'}>
            {
                items.name
            }
        </div>
    )
}
