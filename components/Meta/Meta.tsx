import React from 'react';
import Head from 'next/head';

interface MetaProps {
    title?: string;
    keywords?: string;
    description?: string;
}

export const Meta: React.FC<MetaProps> = ({
    title = 'Website title default',
    keywords = 'Default keywords',
    description = 'Default description',
}: MetaProps) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="../../public/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet" />
            <title>{title}</title>
        </Head>
    );
}
