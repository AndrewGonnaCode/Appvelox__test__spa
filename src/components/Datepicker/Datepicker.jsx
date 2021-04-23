
import { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { jsx } from "@emotion/react";
import Month from "./Month";
import DatepickerContext from "./datepickerContext";


function Datepicker() {
	const [state, setState] = useState({
		startDate: null,
		endDate: null,
		focusedInput: START_DATE
	});
	const {
		firstDayOfWeek,
		activeMonths,
		isDateSelected,
		isDateHovered,
		isFirstOrLastSelectedDate,
		isDateBlocked,
		isDateFocused,
		focusedDate,
		onDateHover,
		onDateSelect,
		onDateFocus,
		goToPreviousMonths,
		goToNextMonths
	} = useDatepicker({
		startDate: state.startDate,
		endDate: state.endDate,
		focusedInput: state.focusedInput,
		onDatesChange: handleDateChange
	});
	function handleDateChange(data) {
		if (!data.focusedInput) {
			setState({ ...data, focusedInput: START_DATE });
		} else {
			setState(data);
		}
	}

	return (
		<DatepickerContext.Provider
			value={{
				focusedDate,
				isDateFocused,
				isDateSelected,
				isDateHovered,
				isDateBlocked,
				isFirstOrLastSelectedDate,
				onDateSelect,
				onDateFocus,
				onDateHover
			}}
		>
			{/* <div>
				<strong>Focused input: </strong>
				{state.focusedInput}
			</div>
			<div>
				<strong>Start date: </strong>
				{state.startDate && state.startDate.toLocaleString()}
			</div>
			<div>
				<strong>End date: </strong>
				{state.endDate && state.endDate.toLocaleString()}
			</div> */}

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: 'center',
					backgroundColor: "#EBE7FF",
					borderRadius: "5px",
					width: "575px",
					height: "480px"
				}}
			>
				{activeMonths.slice(0, activeMonths.length - 1).map(month => (
					<Month
						goToNextMonths={goToNextMonths}
						goToPreviousMonths={goToPreviousMonths}
						key={`${month.year}-${month.month}`}
						year={month.year}
						month={month.month}
						firstDayOfWeek={firstDayOfWeek}
					/>
				))}
			</div>
		</DatepickerContext.Provider>
	);
}

export default Datepicker;