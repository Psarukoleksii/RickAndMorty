import React from 'react';
import './locationsFilterItem.css';

export const LocationsFilterItem = ({items, handFilter}) =>{
    return(
        <div className={'location-filter-item'}>
            <p>
                <label>
                    <input name="group1" type="radio" value={items} id={items} onChange={()=>handFilter(items)}/>
                    <span>{items}</span>
                </label>
            </p>
        </div>
    )
}
