import React, { useContext } from 'react'
import { ScreenContext } from '../../_helpers/ScreenContext'
import { SectionContext } from '../../_helpers/SectionContext'

export const MoreSection = () => {
    const { popScreen } = useContext(ScreenContext)
    const { currentSection } = useContext(SectionContext)

    const handleButtonClick = () => {
        popScreen();
    }

    return (
        <>
            <button onClick={handleButtonClick}>
                {`<<< Go back to EMPTY`}
            </button>
            <h2>{`Currently at MORE with ${currentSection.value}`}</h2>

            <p> Quick example of the navigation using the useContext of ScreenContext</p>
        </>
    )
}
