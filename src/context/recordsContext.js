import { createContext, useEffect, useState, useReducer } from "react";
import recordsData from '../data.js'
import appReducer from './reducer.js'

export const RecordContext = createContext()

export const initialState = {
    records:recordsData
};
export const RecordContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState)
	console.log('STATE', state.records);
	const remove = (id)=>{
		dispatch({type:'DELETE', payload:id})
	}

	// useEffect(() => {
	// 	async function getData() {
	// 		const response = await fetch('../data.json')
	// 		setData(response)
	// 		console.log('response', response);
	// 	}
	// 	getData()
	// }, [])
	return (
		<RecordContext.Provider value={{ state, remove }}>
			{children}
		</RecordContext.Provider>
	)
}