import React from 'react';
import {ListItem} from "./listItem";

export const ListToDo = ({list, handChangeInput, handDeletePost}) =>{
    return(
        <div>
            {
                list.map(value=> <ListItem items={value} handChangeInput={handChangeInput} handDeletePost={handDeletePost}/>)
            }
        </div>
    )
}
