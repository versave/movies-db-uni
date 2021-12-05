import React, {PropsWithChildren} from 'react';
import classes from './Layout.module.scss';
import {Header} from "../Header/Header";
import {Meta} from "../Meta/Meta";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({
    children
}: PropsWithChildren<LayoutProps>) => {
    return (
        <>
            <Meta title="Movie DB" />

            <Header />

            <main className={classes.main}>
                {children}
            </main>
        </>
    );
}
