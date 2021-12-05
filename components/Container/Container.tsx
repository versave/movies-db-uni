import React, { PropsWithChildren } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({
    children,
}: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={classes.container}>{children}</div>
    );
}

