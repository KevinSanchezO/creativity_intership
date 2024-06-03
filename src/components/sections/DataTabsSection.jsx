import React, { useContext, useState } from 'react'
import { ScreenContext } from '../../_helpers/ScreenContext'
import { SectionContext } from '../../_helpers/SectionContext'
import { Tab, Tabs } from 'react-bootstrap'
import DataTableTasks from '../datatables/DataTableTasks'

const DataTabsSection = () => {
  const [key, setKey] = useState('tasks_info');

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

        <div className="mt-1">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="subtabs mb-3"
          >

            <Tab eventKey="tasks_info" title="Tasks Information">
              <DataTableTasks />
            </Tab>

            <Tab eventKey="graduation_info" title="Graduation Information">
              
            </Tab>

          </Tabs>
        </div>
      </>
  )
}

export default DataTabsSection