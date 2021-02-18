import React from 'react';
import './charactersFilterItem.css';

export const CharactersFilterItem = ({items, handFilter}) =>{
    return (
        <div className={'filter-item'}>
            <p>
                <label>
                    <input name="group1" type="radio" value={items} id={items} onChange={()=>handFilter(items)}/>
                    <span>{items}</span>
                </label>
            </p>
        </div>
    )
}
