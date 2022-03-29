import React, { useRef } from "react";
import { useChat } from "../../contexts/chat/ChatContext";
import { Button } from "../Button/Button";

export function ChatTextInput(): JSX.Element {
	const chat = useChat()!;
	const textRef = useRef<HTMLInputElement>(null);

	const { sendClientMessage } = chat;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const input = textRef.current;
		const content = input?.value;

		if (content) {
			sendClientMessage(content);
			input.value = "";
		}
	};

	const cxBox = "flex p-2 gap-2";
	const cxField = "p-1 flex-grow outline-none border border-gray-400 focus:border-gray-500 rounded shadow";

	return (
		<form className={cxBox} onSubmit={handleSubmit}>
			<input className={cxField} type="text" ref={textRef} />
			<Button type="submit">Send</Button>
		</form>
	);
}
