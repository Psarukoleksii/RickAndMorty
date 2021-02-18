import React from 'react';
import './formForTodo.css';

export const FormForTodo = ({handSavePost}) => {
    return (
        // <div>
        //     <form onSubmit={handSavePost}>
        //         <input type="text" required/>
        //         <button>Add post</button>
        //     </form>
        // </div>
    <div className="row">
        <form className="col s12" onSubmit={handSavePost}>
            <div className="row">
                <div className="input-field col s6 form-section">
                    <input placeholder="Write your post" id="first_name" type="text" className="validate" />
                        {/*<label htmlFor="first_name">Your Post</label>*/}
                    <button className={'btn'}>Add post</button>
                </div>
            </div>
        </form>
    </div>
    )
}
