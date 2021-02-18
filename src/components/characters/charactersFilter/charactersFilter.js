import React from 'react';
import {CharactersFilterItem} from "./charactersFilterItem";
import './charactersFilter.css';

export const CharactersFilter = ({filterGender, filterSpecies, filterStatus, charactersList, setCharacters}) => {

    const handFilterSpecies = (value) => {
        const filterSpecies = charactersList.filter(v => v.species === value);
        setCharacters(filterSpecies);
    }

    const handFilterStatus = (value) => {
        const filterStatus = charactersList.filter(v => v.status === value);
        setCharacters(filterStatus);
    }

    const handFilterGender = (value) => {
        const filterGender = charactersList.filter(v => v.gender === value);
        setCharacters(filterGender);
    }

    return (
        <div className={'filter-wrapper'}>
            <div className={'filter-wrap'}>
                <div className={'filter-section'}>
                    <h5>Filter of Species</h5>
                    {
                        filterSpecies !== undefined && filterSpecies.map(value => <CharactersFilterItem items={value}
                                                                                                        handFilter={handFilterSpecies}/>)
                    }
                </div>
                <div className={'filter-section'}>
                    <h5>Filter of Status</h5>
                    {
                        filterStatus !== undefined && filterStatus.map(value => <CharactersFilterItem items={value}
                                                                                                      handFilter={handFilterStatus}/>)
                    }
                </div>
                <div className={'filter-section'}>
                    <h5>Filter of Gender</h5>
                    {
                        filterGender !== undefined && filterGender.map(value => <CharactersFilterItem items={value}
                                                                                                      handFilter={handFilterGender}/>)
                    }
                </div>
            </div>
        </div>
    )
}
