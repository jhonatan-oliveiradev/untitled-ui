import Link from "next/link";
import Badge from "./shared/badge";
import { FiArrowRight } from "react-icons/fi";

const TagFeature = () => {
	return (
		<div className=" bg-violet-100 w-fit rounded-3xl">
			<div className="flex items-center justify-center gap-3 py-1 px-3">
				<Badge>New feature</Badge>
				<Link
					href="/"
					className="group flex items-center text-sm justify-center gap-2 font-semibold text-violet-500"
				>
					Check out the team dashboard
					<FiArrowRight className="size-4 text-violet-400 group-hover:translate-x-1 transition-all" />
				</Link>
			</div>
		</div>
	);
};

export default TagFeature;
