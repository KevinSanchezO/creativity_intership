import { createContext, useState } from "react"

export const SectionContext = createContext(null)

const SectionProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState(null);

    const data = {
        currentSection, 
        setCurrentSection
    }

    return (
        <SectionContext.Provider value = {data}>
            {children}
        </SectionContext.Provider>
    )
}

export { SectionProvider }