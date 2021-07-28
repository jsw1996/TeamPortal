import React, { Component, useEffect, useState } from 'react';
import './filter.css'
import { useDispatch } from 'react-redux';
import { Input, Dropdown, Button } from 'semantic-ui-react'

const Filter = () => {

    const teamOptions = [
        { key: 'team1', text: 'Team1', value: 'Team1' },
        { key: 'team2', text: 'Team2', value: 'Team2' },
        { key: 'team3', text: 'Team3', value: 'Team3' },
        { key: 'team4', text: 'Team4', value: 'Team4' },
    ]

    const positionOpotions = [
        { key: 'Engineer', text: 'Engineer', value: 'Engineer' },
        { key: 'Project Manager', text: 'Project Manager', value: 'Project Manager' },
        { key: 'Recruiter', text: 'Recruiter', value: 'Recruiter' }
    ]

    const dispatch = useDispatch();
    const sortBy = ['Name', 'Team', 'Position']
    const [filterContent, setfilterContent] = useState()

    // let handleChange = (e, { value, name }) => {
    //     var tempFilter = Object.assign({}, filterContent)
    //     if (value == '') {
    //         console.log("input is empty")
    //         delete tempFilter[name];
    //         console.log("tempFilter is", tempFilter)
    //         setfilterContent(tempFilter)
    //     }
    //     else setfilterContent(Object.assign({}, tempFilter, { [name]: value }))
    //     // console.log(filterContent)
    //     // dispatch({ type: 'applyFilter', content: filterContent })
    // }

    let handleTeamChange = (e, { value }) => {
        setfilterContent(Object.assign({}, filterContent, { team: value }))
    }

    let handlePositionChange = (e, { value }) => {
        setfilterContent(Object.assign({}, filterContent, { position: value }))
    }

    let handleNameChange = (e, { name, value }) => {
        if (value == '') {
            setfilterContent(Object.assign({}, filterContent, { name: null }))

        }
        setfilterContent(Object.assign({}, filterContent, { name: value }))
    }

    useEffect(() => {
        console.log(filterContent)

        dispatch({ type: 'applyFilter', content: filterContent })
    })




    return (
        <form id="filter">
            <h3>Filter</h3>
            <Input className='cus_input' onChange={handleNameChange} name='name' placeholder="Search Name" />
            <Dropdown placeholder='Select Team' fluid clearable selection options={teamOptions} onChange={handleTeamChange} />
            <br></br>
            <Dropdown placeholder='Select Position' fluid clearable selection options={positionOpotions} onChange={handlePositionChange} />

            {/* <Dropdown
                id='selector'
                text='sort by'
                icon='filter'
                floating
                labeled
                button
                className='icon'
            >
                <Dropdown.Menu>
                    {
                        sortBy.map((item) =>
                            <Dropdown.Item>{item}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown> */}
            {/* <Button type="button" color='green' size='small' onClick={() => { dispatch({ type: 'applyFilter', content: filterContent }) }} >Apply Filter</Button> */}

        </form >
    )
}
export default Filter;