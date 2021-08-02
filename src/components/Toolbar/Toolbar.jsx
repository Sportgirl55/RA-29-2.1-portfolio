import React from 'react';
import './Toolbar.css'

export default function Toolbar(props) {
  const { selected, filters, onSelectFilter } = props;
  const buttons = filters.map((filter) => {
    const isActive = filter === selected;
    const active = isActive ? 'color' : ''

    return (
      <button key={filter}
        className={`${active}`}
        onClick={() =>
          onSelectFilter(filter)}>
        {filter}
      </button>
    )
  })

  return (
    <div className="filter-list">
      {buttons}
    </div>
  )
}
