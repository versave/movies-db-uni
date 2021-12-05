import React from 'react';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <h1>
                <em>Movies DB</em>
            </h1>
        </div>
    );
}
