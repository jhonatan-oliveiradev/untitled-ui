import Image from "next/image";
import GridContainer from "./grid-container";
import NavItem from "./nav-item";

const menuItems = [
	{
		url: "/",
		title: "Home",
		dropdown: false
	},
	{
		url: "/products",
		title: "Products",
		dropdown: true
	},
	{
		url: "/resources",
		title: "Resources",
		dropdown: true
	},
	{
		url: "/pricing",
		title: "Pricing",
		dropdown: false
	}
];

const Header = () => {
	return (
		<header className="sticky top-0 border-b w-full flex items-center h-20 z-50">
			<GridContainer className="flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Image
						src="/untitledui-logo.svg"
						alt="Untitled UI"
						width={142}
						height={32}
					/>
					<nav className="flex items-center justify-center gap-8">
						{menuItems.map((menuItem) => (
							<NavItem
								key={menuItem.url}
								url={menuItem.url}
								title={menuItem.title}
								hasDropdown={menuItem.dropdown}
							/>
						))}
					</nav>
				</div>
				<Image
					src="https://github.com/jhonatan-oliveiradev.png"
					alt="Avatar"
					width={40}
					height={40}
					className="rounded-full"
				/>
			</GridContainer>
		</header>
	);
};

export default Header;
