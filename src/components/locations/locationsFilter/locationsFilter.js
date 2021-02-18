import React from 'react';
import {LocationsFilterItem} from "./locationsFilterItem";
import './locationsFilter.css';

export const LocationsFilter = ({setLocations, filterDimension, filterName, filterType, locationList}) => {

    const handFilterName = (value) => {
        const filterName = locationList.filter(v => v.name !== value);
        setLocations(filterName)
    }
    const handFilterType = (value) => {
        const filterType = locationList.filter(v => v.type !== value);
        setLocations(filterType)
    }
    const handFilterDimension = (value) => {
        const filterDimension = locationList.filter(v => v.dimension !== value);
        setLocations(filterDimension)
    }

    return (
        <div className={'filter-wrapper-location'}>
            <div className={'filter-wrap-location'}>
                <div className={'filter-section-location'}>
                    <h5>Filtered by Name</h5>
                    {
                        filterName !== undefined && filterName.map(value => <LocationsFilterItem items={value}
                                                                                                 handFilter={handFilterName}/>)
                    }
                </div>
                <div className={'filter-section-location'}>
                    <h5>Filtered by Type</h5>
                    {
                        filterType !== undefined && filterType.map(value => <LocationsFilterItem items={value}
                                                                                                 handFilter={handFilterType}/>)
                    }
                </div>
                <div className={'filter-section-location'}>
                    <h5>Filtered by Dimension</h5>
                    {
                        filterDimension !== undefined && filterDimension.map(value => <LocationsFilterItem items={value}
                                                                                                           handFilter={handFilterDimension}/>)
                    }
                </div>
            </div>
        </div>
    )
}
