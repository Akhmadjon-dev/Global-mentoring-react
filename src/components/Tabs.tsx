import React, { useState } from 'react'
import { ITabs } from './types'
import { sortBy, tabs } from './utility'

function Tabs({ filterMovies, sortMovies }: { filterMovies: (id: string) => {}, sortMovies: (id: string) => {} }) {


    const [activeTab, setActiveTab] = useState<string>('all')
    const [tablsList] = useState<ITabs[]>(tabs)

    const handleClick = (tab: string) => {
        setActiveTab(tab);
        filterMovies(tab)
    }

    const renderTabs = () => {
        return tablsList.map((tab, index) => (
            <li onClick={() => handleClick(tab.id)} key={index} className={tab.id === activeTab ? ' tab--active tab' : "tab"}>
                {tab.title}
            </li>
        ))
    }

    const selectHandler = (e: { target: { value: any } }) => {
        const { value } = e.target;
        sortMovies(value)
    }

    return (
        <div className="tabs__container">
            <ul className="tabs__list">
                {renderTabs()}
            </ul>
            <div className="sort-by">
                <label>Sort by</label>
                <select onChange={selectHandler}>
                    {
                        sortBy.map(item => (
                            <option value={item.id}>
                                {item.title}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>

    )
}

export default Tabs
