import React from 'react';
import { Topbar } from './Topbar/Topbar';
import { ContentRowTop } from './ContentRowTop/ContentRowTop';
import { Footer } from './Footer/Footer';

export const ContentWrapper = () => {
    return (
        <>
            <Topbar />
            <ContentRowTop />
            <Footer />
        </>
            
    )
}