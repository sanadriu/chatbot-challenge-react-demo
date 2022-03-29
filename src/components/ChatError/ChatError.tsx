import errorImage from "./images/error.png";

interface ErrorStatusProps {
	reason?: string;
	hint?: string;
}

export function ChatError({ reason = "Unexpected error", hint }: ErrorStatusProps): JSX.Element {
	const cx =
		"flex flex-col items-center self-center gap-2 sm:gap-4 md:gap-6 p-12 rounded shadow bg-gray-100 text-center";
	const cxImage = "w-40 sm:w-48 md:w-56";
	const cxTitle = "text-3xl sm:text-4xl md:text-5xl text-gray-700 font-medium";
	const cxSubtitle = "text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium";
	const cxHint = "text-md sm:text-lg md:text-xl text-gray-700 font-light";

	return (
		<div className={cx}>
			<img className={cxImage} src={errorImage} alt="error" />
			<h3 className={cxTitle}>Something went wrong...</h3>
			<h4 className={cxSubtitle}>{reason}</h4>
			{hint && <p className={cxHint}>{hint}</p>}
		</div>
	);
}
