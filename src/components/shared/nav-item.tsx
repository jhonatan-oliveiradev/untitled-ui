import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface NavProps {
	url: string;
	title: string;
	hasDropdown?: boolean;
}

const NavItem = ({ title, url, hasDropdown }: NavProps) => {
	return (
		<Link
			href={url}
			className="flex font-semibold items-center justify-center gap-1 hover:text-violet-800 transition-all"
		>
			{title}
			{hasDropdown && <FiChevronDown className="size-4 text-zinc-900" />}
		</Link>
	);
};

export default NavItem;
