import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
	return (
		<span className="flex bg-white font-semibold text-violet-500 w-fit items-center justify-center text-center border border-violet-500/50 rounded-2xl text-sm py-0.5 px-2">
			{children}
		</span>
	);
};

export default Badge;
