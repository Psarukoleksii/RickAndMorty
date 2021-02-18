import React, {useEffect, useState} from 'react';
import {service} from "../../service/service";
import {CharactersList} from "./charactersList";
import {useDispatch, useSelector} from "react-redux";
import {addCharacters} from "../../redux/action-creator/actionCreators";
import {CharactersFilter} from "./charactersFilter";
import {Pages} from "./pages";
import {Modal} from "./modal/modal";
import './characters.css';

export const Characters = () => {

    const dispatch = useDispatch();
    const {charactersList} = useSelector(({characters: {charactersList}}) => ({charactersList}))

    const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [numberPage, setNumberPage] = useState(1);
    const [allPages, setAllPages] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [filterSpecies, setFilterSpecies] = useState();
    const [filterStatus, setFilterStatus] = useState();
    const [filterGender, setFilterGender] = useState();
    const [active, setActive] = useState(false);
    const [oneCharacter, setOneCharacter] = useState(null)

    const handGetAllCharacters = async (count) => {
        let charactersAll = await service.getAllCharacter(count)
        dispatch(addCharacters(charactersAll))
        setCharacters(charactersAll)
        const filterSp = charactersAll.map(v => v.species);
        const filterSt = charactersAll.map(v => v.status);
        const filterGn = charactersAll.map(v => v.gender);
        setFilterSpecies([...new Set(filterSp)]);
        setFilterStatus([...new Set(filterSt)]);
        setFilterGender([...new Set(filterGn)]);
    }

    const handPages = async () => {
        const {info} = await service.getCharacter()
        setAllPages(info.pages * 2)
    }

    useEffect(() => {
        handGetAllCharacters(count)
        handPages()
    }, [count]);

    const handGetCharactersId = async (id) =>{
        const result = charactersList.find(v=> v.id === id)
        setActive(true)
        setOneCharacter(result)
    }

    console.log(oneCharacter)


    return (
        <div className={'characters-wrapper'}>
            <Modal active={active} setActive={setActive} oneCharacter={oneCharacter}/>
            <h2>Characters</h2>
            <CharactersFilter filterGender={filterGender} filterStatus={filterStatus}
                              filterSpecies={filterSpecies} charactersList={charactersList}
                              setCharacters={setCharacters} />

            <CharactersList characters={characters} setActive={setActive} handGetCharactersId={handGetCharactersId}/>
            <div className={'pages'}>
                <Pages count={count} allPages={allPages} numberPage={numberPage} setNumberPage={setNumberPage}
                       setCount={setCount}/>
            </div>
        </div>
    )
}
