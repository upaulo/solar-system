import type { CSSProperties } from "react";
import { useState } from "react";

type CustomCssProperties = CSSProperties & {
	[key: `--${string}`]: string | number | undefined;
};

type PlanetCardProps = {
	planetName: string;
	planetImage: string;
	planetSize: CustomCssProperties;
};

function PlanetCard({ planetName, planetImage, planetSize }: PlanetCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="planet-card-component"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <p className="planet-name">{planetName}</p>}
			<img
				id={planetName}
				src={planetImage}
				alt={`Planeta ${planetName}`}
				style={planetSize}
			/>
		</div>
	);
}

export default PlanetCard;
