import planets from "../data/planets";
import PlanetCard from "./PlanetCard";

function SolarSystem() {
	const planetSizesScale = [1.5, 3.5, 4, 2.5, 10, 9, 6, 6];

	return (
		<div className="solar-system-component">
			<section className="planets">
				<hr className="planets-line" />
				{planets.map((planet, index) => {
					const scaleFactor = planetSizesScale[index];
					return (
						<PlanetCard
							key={planet.id}
							planetName={planet.name}
							planetImage={planet.image}
							planetSize={{ "--planet-scale": scaleFactor }}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default SolarSystem;
