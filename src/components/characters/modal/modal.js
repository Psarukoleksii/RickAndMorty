import React from 'react';
import './modal.css';

export const Modal = ({active, setActive, oneCharacter}) =>{
    return(
        <div className={active ? 'modal active' : 'modal '} onClick={()=> setActive(false)}>
            <div className="modal__content" onClick={e=> e.stopPropagation()}>
                {
                    oneCharacter !== null && <h5>Name: {oneCharacter.name}</h5>
                }
                {
                    oneCharacter !== null && <p>Status: {oneCharacter.status}</p>
                }
                {
                    oneCharacter !== null && <p>Gender: {oneCharacter.gender}</p>
                }
            </div>
        </div>
    )
}
