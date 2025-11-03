type TitleProps = {
	headline: string
	idName: string
};

function Title({ headline, idName }: TitleProps) {
	return (
		<div className="title-component">
			<h2 id={idName}>{headline}</h2>
		</div>
	);
}

export default Title;
