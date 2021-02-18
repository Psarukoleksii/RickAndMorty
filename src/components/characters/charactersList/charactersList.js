import React from 'react';
import {CharactersItem} from "../charactersItem";
import './charactersList.css';

export const CharactersList = ({characters, setActive, handGetCharactersId}) =>{
    return(
        <div className={'ListOfCharacters'}>
            {
                characters.map(value=> <CharactersItem items={value} setActive={setActive} handGetCharactersId={handGetCharactersId}/>)
            }
        </div>
    )
}
