import missions from "../data/missions";
import MissionCard from "./MissionCard";
import Title from "./Title";

function Missions() {
	return (
		<div className="missions-component">
			<Title headline="Missões" idName="missions-title" />
			<section className="missions">
				{missions.map((mission) => (
					<MissionCard
						key={mission.id}
						name={mission.name}
						year={mission.year}
						country={mission.country}
						destination={mission.destination}
					/>
				))}
			</section>
		</div>
	);
}

export default Missions;
