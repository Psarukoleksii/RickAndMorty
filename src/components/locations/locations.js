import React, {useEffect, useState} from 'react';
import {service} from "../../service/service";
import {LocationsList} from "./locationsList";
import {PagesLocation} from "./pagesLocation";
import {useDispatch, useSelector} from "react-redux";
import {addLocations} from "../../redux/action-creator/actionCreators";
import {LocationsFilter} from "./locationsFilter";
import './locations.css';

export const Locations = () => {
    const dispatch = useDispatch();
    const {locationList} = useSelector(({locations: {locationList}}) => ({locationList}))

    const [locations, setLocations] = useState([]);
    const [count, setCount] = useState(1);
    const [allPages, setAllPages] = useState(1);
    const [filterName, setFilterName] = useState();
    const [filterType, setFilterType] = useState();
    const [filterDimension, setFilterDimension] = useState()

    const handGetAllLocations = async (count) => {
        let {results, info} = await service.getAllLocation(count);
        dispatch(addLocations(results))
        setLocations(results);
        setAllPages(info);
        const filterName = results.map(v => v.name);
        const filterType = results.map(v => v.type);
        const filterDimension = results.map(v => v.dimension);
        setFilterName([...new Set(filterName)]);
        setFilterType([...new Set(filterType)]);
        setFilterDimension([...new Set(filterDimension)]);
    }

    useEffect(() => {
        handGetAllLocations(count)
    }, [count])


    return (
        <div className={'locations-section'}>
            <h2>Locations</h2>
            <LocationsFilter filterName={filterName} filterType={filterType} filterDimension={filterDimension}
                             locationList={locationList} setLocations={setLocations}
            />
            <LocationsList locations={locations}/>
            <div className={'locations-page'}>
                <PagesLocation allPages={allPages} count={count} setCount={setCount}/>
            </div>
        </div>
    )
}
