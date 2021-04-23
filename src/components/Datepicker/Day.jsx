import { useRef, useContext } from "react";
import { useDay } from "@datepicker-react/hooks";
import { jsx } from "@emotion/react";
import DatepickerContext from "./datepickerContext";

function getColor(
	isSelected,
	isSelectedStartOrEnd,
	isWithinHoverRange,
	isDisabled
) {
	return ({
		selectedFirstOrLastColor,
		normalColor,
		selectedColor,
		rangeHoverColor,
		disabledColor
	}) => {
		if (isSelectedStartOrEnd) {
			return selectedFirstOrLastColor;
		} else if (isSelected) {
			return selectedColor;
		} else if (isWithinHoverRange) {
			return rangeHoverColor;
		} else if (isDisabled) {
			return disabledColor;
		} else {
			return normalColor;
		}
	};
}

function Day({ dayLabel, date }) {
	const dayRef = useRef(null);
	const {
		focusedDate,
		isDateFocused,
		isDateSelected,
		isDateHovered,
		isDateBlocked,
		isFirstOrLastSelectedDate,
		onDateSelect,
		onDateFocus,
		onDateHover
	} = useContext(DatepickerContext);
	const {
		isSelected,
		isSelectedStartOrEnd,
		isWithinHoverRange,
		disabledDate,
		onClick,
		onKeyDown,
		onMouseEnter,
		tabIndex
	} = useDay({
		date,
		focusedDate,
		isDateFocused,
		isDateSelected,
		isDateHovered,
		isDateBlocked,
		isFirstOrLastSelectedDate,
		onDateFocus,
		onDateSelect,
		onDateHover,
		dayRef
	});

	if (!dayLabel) {
		return <div />;
	}

	const getColorFn = getColor(
		isSelected,
		disabledDate
	);

	return (
		<button
			onClick={onClick}
			onKeyDown={onKeyDown}
			onMouseEnter={onMouseEnter}
			tabIndex={tabIndex}
			type="button"
			ref={dayRef}
			style={{
				position:"relative",
				padding: "8px",
				border: 0,
				height:"63px",
				cursor:"pointer",
				fontSize:"20px",
				color: getColorFn({
					selectedFirstOrLastColor: "#FFFFFF",
					normalColor: "#001217",
					selectedColor: "#000",
					rangeHoverColor: "#FFFFFF",
					disabledColor: "#808285"
				}),
				background: getColorFn({
					selectedFirstOrLastColor: "#00aeef",
					normalColor: "#FFFFFF",
					selectedColor: "#fff",
					rangeHoverColor: "#71c9ed",
					disabledColor: "#FFFFFF"
				})
			}}
		>
			{dayLabel}
			{isSelected &&
			<div style={{
			height:"22px",
			width:"22px",
			backgroundColor:"#50CAFF",
			borderRadius:'100%',
			position:"absolute",
			right:"3px",
			bottom:"3px",
			color:"#fff",
			fontSize:"14px",
			display:'flex',
			alignItems:'center',
			justifyContent:'center'
			}}>1</div>}
		</button>
	);
}

export default Day;