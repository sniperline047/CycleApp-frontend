import React from 'react';
import GetBike from './GetBike';
import {useParams} from 'react-router-dom';

function Book() {
    let {bicyclefrmNo} = useParams();

    return(
        <GetBike bicyclefrmNo={bicyclefrmNo} />
    );
}

export default Book;