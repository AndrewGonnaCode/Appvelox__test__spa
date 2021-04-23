import { createContext, useEffect, useState } from "react";
import recordsData from '../data.json'

export const RecordContext = createContext()

export const RecordContextProvider = ({ children }) => {
	const [data, setData] = useState(recordsData)
	// useEffect(() => {
	// 	async function getData() {
	// 		const response = await fetch('../data.json')
	// 		setData(response)
	// 		console.log('response', response);
	// 	}
	// 	getData()
	// }, [])
	console.log('dataRECORDS', data.records);
	const removeRecord = (id) => {
		const newRecords = data.records.filter(rec => rec.id !== id)
		setData(newRecords)
	}
	return (
		<RecordContext.Provider value={data}>
			{children}
		</RecordContext.Provider>
	)
}