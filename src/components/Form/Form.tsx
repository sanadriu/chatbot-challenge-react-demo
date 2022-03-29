import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ValidationError } from "yup";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { validationSchema } from "./validation";

export function Form(): JSX.Element {
	const [, setSearchParams] = useSearchParams();
	const [errors, setErrors] = useState<{ [index: string]: string }>();
	const formRef = useRef<HTMLFormElement>(null);

	const cxForm = "container max-w-xl p-6 flex flex-col gap-4 bg-stone-300 border rounded-md shadow-md";

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const form = formRef.current;

		if (!form) return;

		const chatId = (form.elements.namedItem("chatId") as HTMLInputElement).value;
		const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

		try {
			await validationSchema.validate(
				{ chatId, phone },
				{
					abortEarly: false,
					stripUnknown: true,
				}
			);

			setSearchParams({ chatId, phone });
		} catch (validationErrors) {
			if (validationErrors instanceof ValidationError) {
				const errors: { [index: string]: string } = {};

				validationErrors.inner.forEach(({ path, message }) => {
					errors[path as string] ||= message;
				});

				setErrors(errors);
			}
		}
	};

	return (
		<form className={cxForm} onSubmit={handleSubmit} ref={formRef}>
			<h1 className="w-full p-0 m-0 font-extralight text-center text-4xl text-gray-700">Chat access</h1>
			<FormInput
				label="Chat ID"
				name="chatId"
				type="text"
				placeholder="Chat #id"
				invalid={Boolean(errors?.chatId)}
				invalidMsg={errors?.chatId}
			/>
			<FormInput
				label="Phone number"
				name="phone"
				type="tel"
				placeholder="Phone number"
				invalid={Boolean(errors?.phone)}
				invalidMsg={errors?.phone}
			/>
			<Button type="submit">Enter to chat</Button>
		</form>
	);
}
