import React from 'react';

const Letter = ({ letter, status }) => {
    return <div className={'letter ${status}'}>{letter}</div>;
};

export default Letter;