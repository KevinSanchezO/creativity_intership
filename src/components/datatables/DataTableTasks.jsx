import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const DataTableTasks = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        updateInformation();
    },[])

    const updateInformation = () => {
        const value = [{
            active: true,
            todo: "Wake up",
            time: "8:30 am",
        },
        {
            active: false,
            todo: "Eat breakfast",
            time: "9:10 am",
        },
        {
            active: false,
            todo: "Take the dogs for a walk",
            time: "9:20 am",
        }]

        setInfo(value);
    }

    const handleCheckboxChange = (row) => {
        console.log(row);
    }

    const columns = [
        {
            name: "Status",
            cell: (row) => {
                <input 
                    type='checkbox'
                    onChange={() => handleCheckboxChange(row)}
                    checked={row.active}
                />
            },
        }, {
            name: "name",
            selector: (row) => row.todo
        }, {
            name: "time",
            selector: (row) => row.time
        }
    ]

    return (
        <>

            <h3> Tasks information </h3>

            <DataTable 
                columns = {columns}
                data = {info}
                pagination
                paginationPerPage={10}
                responsive = {true}
                noDataComponent = {
                    <span className='text-center'>
                        {"No information to show"}
                    </span>
                }
            />
        </>
    )
}

export default DataTableTasks