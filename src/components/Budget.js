import { FaTimes } from 'react-icons/fa'

/*This will enable one to set the pettycash as paid out or not  when double clicked on; and also to delete the petty cash record*/

const Budget = ({ budget, onDelete, onToggle }) => {
  return (

    <div
        className={`budget ${budget.reminder && 'reminder'}`}
        onDoubleClick={() => onToggle(budget.id)}
      >
        <h3>

          {budget.name}{' '}

            <FaTimes
            /*Delete the record  when clicked*/
            
            style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(budget.id)}
              />
          </h3>

            <p>{budget.amount}</p>
        </div>
  )
}

export default Budget