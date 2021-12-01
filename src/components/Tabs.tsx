import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={'/search/genre?'+tab.id} key={tab.id} className={tab.id === activeTab ? ' tab--active tab' : "tab"}>
                {tab.title}
            </Link>
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
                    <option key="firstOne" value="">
                        Select to sort
                    </option>
                    {
                        sortBy.map(item => (
                            <option key={item.id} value={item.id}>
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
