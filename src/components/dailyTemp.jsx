import React from 'react'
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DailyTempStyles = styled.div({
    textAlign: 'center',
    color: 'rgba(255,255,255,1.0)',
    fontSize: '1em',
    fontWeight: 'lighter',
    '.Title': {
        fontWeight: 800,
        fontSize: '.75em'
    },
    'svg': {
        marginTop: '2.5px',
        marginBottom: '5px'
    },
    'h6': {
        fontWeight: 200,
    },
    'h6:nth-child(even)': {
        opacity: '50%'
    }


})

function DailyTemp({ day, icon, high, low }) {
    return (
        <DailyTempStyles >
            <h5 className='Title'>{day}</h5>
            <FontAwesomeIcon icon={icon} />
            <h6>{high}</h6>
            <h6>{low}</h6>
        </DailyTempStyles>
    )

}

export default DailyTemp