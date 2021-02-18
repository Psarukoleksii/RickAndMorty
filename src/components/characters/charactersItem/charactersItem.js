import React from 'react';
import './charactersItem.css';

export const CharactersItem = ({items, handGetCharactersId}) =>{
    return(
        <div className={'characters-item-card'} onClick={()=>handGetCharactersId(items.id)}>
            <div className={'characters-item-img'}>
                <img src={items.image} alt={items.image}/>
            </div>
            <div className={'characters-item-text'}>
                <p>
                    {items.name}
                </p>
            </div>
        </div>
    )
}
