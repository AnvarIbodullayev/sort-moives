import React from 'react'
import './Category.css';

export default function Category({ categories, filterItems }) {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return(
                    <button className='filter-btn' key={index} onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}