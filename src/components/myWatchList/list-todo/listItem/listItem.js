import React from 'react';
import './listItem.css';
import {ToastContainer} from "react-toastify";

export const ListItem = ({items, handChangeInput, handDeletePost}) => {

    return (
        <div className={'listToDo-section'}>
            <p>
                <label>
                    <input type="checkbox" onInput={() => handChangeInput(items.id)} checked={items.checked}/>
                    <span>Status ToDo</span>
                </label>
                <p>
                    {
                        items.value
                    }
                </p>
                <button className={'btn'} onClick={() => handDeletePost(items.id)}>Delete Post</button>
                <ToastContainer/>
            </p>
        </div>
    )
}
