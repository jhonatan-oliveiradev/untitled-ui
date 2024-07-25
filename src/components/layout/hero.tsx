import GridContainer from "../shared/grid-container";
import TagFeature from "../tag-feature";

const HeroSection = () => {
	return (
		<section className="pt-24">
			<GridContainer className="">
				<div className="space-y-4 flex items-center justify-center flex-col">
					<TagFeature />
					<h1 className="text-6xl font-bold text-zinc-900">
						Beautiful analytics to grow smarter
					</h1>
					<p>
						Powerful, self-serve product and growth analytics to help you
						convert, engage, and retain more users. Trusted by over 4,000
						startups.
					</p>
				</div>
			</GridContainer>
		</section>
	);
};

export default HeroSection;
