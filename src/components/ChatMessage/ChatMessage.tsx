import classNames from "classnames";

interface ChatMessageProps {
	content: string;
	side: "start" | "end";
}

export function ChatMessage({ content, side }: ChatMessageProps): JSX.Element {
	const cx = classNames(
		"py-2 px-4 border-2 text-lg font-medium rounded-md shadow-md max-w-[50%]",
		side === "start" ? "bg-gray-700 text-white self-start" : "bg-white text-gray-600 self-end"
	);

	return <div className={cx}>{content}</div>;
}
