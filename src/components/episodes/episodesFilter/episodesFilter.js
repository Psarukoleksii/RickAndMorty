import React from 'react';

export const EpisodesFilter = ({items, handFilterSpecies}) =>{
    return(
        <div>
            <input type="radio" name="filter" value={items} id={items}
                   onChange={()=>handFilterSpecies(items)}
                   />
            <label htmlFor={items}><p>{items}</p></label>
        </div>
    )
}
