import React from 'react';
import './formForTodo.css';
import {ToastContainer} from "react-toastify";

export const FormForTodo = ({handSavePost}) => {
    return (
    <div className="row">
        <form className="col s12" onSubmit={handSavePost}>
            <div className="row">
                <div className="input-field col s6 form-section">
                    <input placeholder="Write your post" id="first_name" type="text" className="validate" />
                        {/*<label htmlFor="first_name">Your Post</label>*/}
                    <button className={'btn'}>Add post</button>
                    <ToastContainer />
                </div>
            </div>
        </form>
    </div>
    )
}
