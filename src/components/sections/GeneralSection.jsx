import React, { useContext, useEffect } from 'react';
import { ScreenContext } from '../../_helpers/ScreenContext';
import { SectionContext } from '../../_helpers/SectionContext'; 

import EmptySection from './EmptySection';
import { MoreSection } from './MoreSection';
import DataTabsSection from './DataTabsSection';

const GeneralSection = () => {
    const { setScreen, currentScreen } = useContext(ScreenContext);
    const { currentSection } = useContext(SectionContext);

    useEffect(() => {
        setScreen(["empty"])
    }, [currentSection]);

    return (
        <div>
            {currentSection === null ?
                <></>
            :
            <>
                {currentScreen == "empty" && (
                    <EmptySection />
                )}
                {currentScreen == "more" && (
                    <MoreSection />
                )}
                {currentScreen == "data_tabs" && (
                    <DataTabsSection />
                )}
            </>
            }
        </div>
    );
};

export default GeneralSection;