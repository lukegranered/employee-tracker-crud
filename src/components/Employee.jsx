import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Employee = ({ employee }) => {
    const { deleteEmployee } = useContext(GlobalContext);
  return (
    <div>
        <li>
            {employee.text}
        </li>
    </div>
  )
}
