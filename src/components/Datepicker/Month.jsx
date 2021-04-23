import { useMonth } from "@datepicker-react/hooks";
import { jsx } from "@emotion/react";
import Day from "./Day";
import NavButton from "./NavButton";
import ArrowLeft from '../../icons/arrowLeft.svg'
import ArrowRight from '../../icons/ArrowRight.svg'



function Month({ year, month, firstDayOfWeek, goToNextMonths, goToPreviousMonths }) {
	const { days, weekdayLabels, monthLabel} = useMonth({
		year,
		month,
		firstDayOfWeek
	});

	return (
		<div style={{
			width:'100%',
			height:'100%',
		}}>
			<div style={{
				textAlign: "center",
				margin: "0 0 16px",
				backgroundColor: '#7761FF',
				padding: "15px",
				borderTopLeftRadius: "5px",
				borderTopRightRadius: "5px"
			}}>
			   <div style={{
				   display:'flex',
				   alignItems:'center',
				   justifyContent:'center',
			   }}>
			      <NavButton onClick={goToPreviousMonths} src={ArrowLeft} />
				  <p style={{
					color:'#fff',
					margin:'0 20px',
					fontSize:'14px'
				  }}>{monthLabel}</p>
				<NavButton onClick={goToNextMonths} src={ArrowRight} />
			   </div>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(7, 1fr)",
					justifyContent: "center",
					marginBottom: "10px",
					fontSize: "14px",
					
				}}
			>
				{weekdayLabels.map(dayLabel => (
					<div style={{ textAlign: "center" }} key={dayLabel}>
						{dayLabel}
					</div>
				))}
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(7, 1fr)",
					justifyContent: "center",
				}}
			>
				{days.map((day, index) => {
					if (typeof day === "object") {
						return (
							<Day
								date={day.date}
								key={day.date.toString()}
								dayLabel={day.dayLabel}
							/>
						);
					}

					return <div key={index} />;
				})}
			</div>
		</div>
	);
}

export default Month;