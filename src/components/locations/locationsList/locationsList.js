import React from 'react';
import {LocationsItem} from "../locationsItem";
import './locationList.css';

export const LocationsList = ({locations}) =>{
    return(
        <div className={'locationList'}>
            {
                locations.map(value=> <LocationsItem items={value}/>)
            }
        </div>
    )
}
