import React from 'react';
import BicycleAvail from './BicycleAvail';
import {useParams} from 'react-router-dom';

function AddBicycleAvail() {
    let {bicyclefrmNo} = useParams();
    return(
        <BicycleAvail bicyclefrmNo={bicyclefrmNo} />
    );
}

export default AddBicycleAvail;
