type MissionCardProps = {
	name: string,
	year: string,
	country: string,
	destination: string
};

function MissionCard({
	name, year, country, destination,
}: MissionCardProps) {
	return (
		<div className="mission-card-component">
			<div className="mission-name">
				<p>{name}</p>
			</div>

			<div className="mission-info">
				<img
					className="mission-icon"
					src="year-icon.svg"
					alt="Mission Year Icon"
					/>
			<p className="mission-year">{year}</p>

			<img
				className="mission-icon"
				src="country-icon.svg"
				alt="Mission Country Icon"
			/>
			<p className="mission-country">{country}</p>

			<img
				className="mission-icon"
				src="destination-icon.svg"
				alt="Mission Destination Icon"
			/>
			<p className="mission-destination">{destination}</p>
			</div>
		</div>
	);
}

export default MissionCard;
