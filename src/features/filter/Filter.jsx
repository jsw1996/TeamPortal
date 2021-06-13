import React, { Component, useEffect, useState } from 'react';
import './filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Dropdown, Button } from 'semantic-ui-react'

const Filter = () => {
    const dispatch = useDispatch();
    const sortBy = ['Name', 'Team', 'Position']
    const [filterContent, setfilterContent] = useState()

    let handleChange = (e, { value, name }) => {
        var tempFilter = Object.assign({}, filterContent)
        if (value == '') {
            console.log("input is empty")
            delete tempFilter[name];
            console.log("tempFilter is", tempFilter)
            setfilterContent(tempFilter)
        }
        else setfilterContent(Object.assign({}, tempFilter, { [name]: value }))
        // console.log(filterContent)
        // dispatch({ type: 'applyFilter', content: filterContent })
    }

    useEffect(() => {
        console.log(filterContent)

        dispatch({ type: 'applyFilter', content: filterContent })
    })




    return (
        <form id="filter">
            <h3>Filter</h3>
            <Input className='cus_input' name='name' onChange={handleChange} placeholder="search name" />
            <Input className='cus_input' name='team' onChange={handleChange} placeholder="search team" />

            <Dropdown
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
            </Dropdown>
            <Button type="button" color='green' size='small' onClick={() => { dispatch({ type: 'applyFilter', content: filterContent }) }} >Apply Filter</Button>

        </form >
    )
}
export default Filter;