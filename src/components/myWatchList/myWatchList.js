import React, {useEffect, useState} from 'react';
import {FormForTodo} from "./formForTodo";
import {ListToDo} from "./list-todo";

export const MyWatchList = () =>{

    const [list, setList] = useState([])

    const handSavePost = (e) =>{
        e.preventDefault();
        let value = e.target[0].value;
        let id = new Date().getTime();
        let result = [...list];
        let postObject = {id, value, checked: false};
        result.push(postObject);
        setList(result);
        localStorage.setItem('list', JSON.stringify(result));
        e.target[0].value = '';
    }

    const handChangeInput = (id) =>{
        let changeList = list.map(value => value.id === id? {...value, checked: !value.checked} : value)
        setList(changeList);
        localStorage.setItem('list', JSON.stringify(changeList));
    }

    useEffect(()=>{
        let resultFromLocal = localStorage.getItem('list')
        !resultFromLocal ? setList([]) : setList(JSON.parse(resultFromLocal))
    }, [])

    const handDeletePost = (id) =>{
        let filterPosts = list.filter(value=> value.id !== id)
        setList(filterPosts)
        localStorage.setItem('list', JSON.stringify(filterPosts))
    }

    return (
        <div>
            <FormForTodo handSavePost={handSavePost}/>
            <ListToDo list={list} handChangeInput={handChangeInput} handDeletePost={handDeletePost}/>
        </div>
    )
}
