import React, { useContext, useEffect, useState } from 'react'

import Select from "react-select"

import { SectionContext } from '../../_helpers/SectionContext';
import ShouldRender from '../../components/shouldrender/ShouldRender';
import GeneralSection from '../../components/sections/GeneralSection'
import { ScreenProvider } from '../../_helpers/ScreenContext';

const MainMenu = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [options, setOptions] = useState([]);
    const {currentSection, setCurrentSection} = useContext(SectionContext)

    useEffect(() => {
        retrieveOptionInfo();
    }, []);

    const retrieveOptionInfo = () => {
        setIsLoaded(false)
        const data = [
        {
            value: "games_tab",
            label: "Games To Play",
        },{
            value: "dev_tab",
            label: "Things to Code",
        },{
            value: "watch_tab",
            label: "Animes/Movies to Watch"
        }];

        setOptions(data);
        
        setIsLoaded(true);
    };

    const handleSelectChange = (option) => {
        setCurrentSection(option);
    }

    return (
        <>
            <ShouldRender
                ifTrue={isLoaded}
                // timeoutSec={10}
                // timeOutFallback={<Forbidden/>}
            >
                <Select 
                    isClearable = {true}
                    options={options}
                    onChange={handleSelectChange}
                    placeholder={"Select a section..."}
                />

                <div>
                    {currentSection != null ?
                        <h1>
                            {currentSection.label}
                        </h1>
                    :
                        <h1>
                            {""}
                        </h1>
                    }
                </div>

                <ScreenProvider>
                    {currentSection == null ?
                        <div className="mt-1">
                            <h2>Start working with sections</h2>
                            <p>Select a section to start working</p>
                        </div>:
                        <GeneralSection />

                    }
                </ScreenProvider>
            </ShouldRender>
        </>
    )
}

export default MainMenu