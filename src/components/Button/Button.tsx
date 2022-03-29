import classNames from "classnames";
import React from "react";

export interface ButtonProps extends Omit<React.ComponentProps<"button">, "className"> {
	size?: "sm" | "md" | "lg";
	full?: boolean;
	children?: string;
}

export function Button({
	size = "md",
	full = false,
	children = "Button",
	disabled,
	...rest
}: ButtonProps): JSX.Element {
	const cx = classNames(
		"py-1 border rounded shadow font-medium ease-out duration-100",
		!disabled && "bg-gray-600 text-white border-gray-600",
		!disabled && "hover:bg-gray-400 hover:text-white",
		!disabled && "active:bg-gray-600 active:text-white active:scale-[0.98]",
		disabled && "bg-gray-100 text-gray-600 border-gray-100",
		size === "sm" && "min-w-[4rem] px-2 text-sm",
		size === "md" && "min-w-[6rem] px-3 text-md",
		size === "lg" && "min-w-[8rem] px-5 text-lg",
		full && "w-[100%]"
	);

	return (
		<button className={cx} {...rest}>
			{children}
		</button>
	);
}
