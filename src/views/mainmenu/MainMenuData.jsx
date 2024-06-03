import React from 'react'
import { SectionProvider } from '../../_helpers/SectionContext'
import MainMenu from './MainMenu'

const MainMenuData = () => {
    return (
        <SectionProvider>
            <MainMenu/>
        </SectionProvider>
    )
}

export default MainMenuData