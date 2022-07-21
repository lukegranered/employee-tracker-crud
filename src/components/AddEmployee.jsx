import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { addEmployee } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newEmployee = {
            id: Math.floor(Math.random() * 1000000),
            firstName,
            lastName,
            email,
            phone,
        }
        addEmployee(newEmployee);
    }
  return (
    <div>
        <h1>ADD EMPLOYEE</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="first-name">First Name:</label>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <label htmlFor="last-name">Last Name:</label>
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <label htmlFor="email">Email Address:</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="phone">Phone Number:</label>
                <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            <button className='submitButton'>SUBMIT</button>
        </form>
    </div>
  )
}
