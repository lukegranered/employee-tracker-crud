import React, {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
    employees: []
}

//Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteEmployee(id) {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        });
    }

    function addEmployee(employee) {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        });
    }

    return (<GlobalContext.Provider value={{
        employees: state.employees,
        deleteEmployee,
        addEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}