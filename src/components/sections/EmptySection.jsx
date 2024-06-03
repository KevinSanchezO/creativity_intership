import React, { useContext } from 'react'
import { ScreenContext } from '../../_helpers/ScreenContext'
import { SectionContext } from '../../_helpers/SectionContext'

const EmptySection = () => {
    const { pushScreen } = useContext(ScreenContext)
    const { currentSection } = useContext(SectionContext)

    const handleButtonMoreClick = () => {
        pushScreen("more");
    }

    const handleButtonDataTabsClick = () => {
        pushScreen("data_tabs");
    }

    return (
        <>
            <h2>{`Empty Section in ${currentSection.value}`}</h2>
            <p>The default main menu</p>
            
            <button onClick={handleButtonMoreClick}> 
                Press to go to MORE
            </button>

            <button onClick={handleButtonDataTabsClick}> 
                Press to go to DATA_TABS
            </button>
        </>      
    )
}

export default EmptySection