import classNames from "classnames";

interface FormInputProps extends React.ComponentProps<"input"> {
	name: string;
	label?: string;
	invalid?: boolean;
	invalidMsg?: string;
}

export function FormInput({ name, label, invalid = false, invalidMsg, ...rest }: FormInputProps) {
	const cxLabel = "block mb-1 font-light text-gray-700";
	const cxAside = "block mt-1 text-sm text-red-600";
	const cxField = classNames(
		"w-full p-1 outline-none border rounded shadow",
		invalid ? "border-red-200 focus:border-red-400" : "border-gray-400 focus:border-gray-500"
	);

	return (
		<div>
			{label && (
				<label className={cxLabel} htmlFor={name}>
					{label}
				</label>
			)}
			<input className={cxField} id={name} name={name} {...rest} />
			{invalid && invalidMsg && <aside className={cxAside}>{invalidMsg}</aside>}
		</div>
	);
}
