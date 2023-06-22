import React from 'react';
import { Topbar } from './Topbar/Topbar';
import { ContentRowTop } from './ContentRowTop/ContentRowTop';
import { Footer } from './Footer/Footer';
import { Table } from './Table/Table';

export const ContentWrapper = () => {
    return (
        <>
            <Topbar />
            <ContentRowTop />
            <Table />
            <Footer />
        </>
            
    )
}