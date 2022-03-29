import classNames from "classnames";

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
	const cx = classNames("h-screen p-2 flex justify-center items-center bg-gray-100");

	return <main className={cx}>{children}</main>;
}
