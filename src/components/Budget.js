import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Budget = ({ budget, onDelete, onToggle }) => {
  return (
    <div
      className={`budget ${budget.ispaidout && 'ispaidout'}`}
      onDoubleClick={() => onToggle(budget.id)}
    >
      <small>{budget.exptype}</small>
      <h3>
        {budget.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(budget.id)}
        />
      </h3>
      <hr></hr>
      <p>KES:{budget.amount}</p>
    </div>
  )
}

export default Budget
