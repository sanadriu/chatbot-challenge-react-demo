import { useChat } from "../../contexts/chat/ChatContext";
import { IChatMessage } from "../../contexts/chat/interfaces";
import { ChatError } from "../ChatError/ChatError";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import { ChatTextInput } from "../ChatTextInput/ChatTextInput";

export function Chat(): JSX.Element {
	const chat = useChat()!;

	const { messages, streamFailed } = chat;

	const cxChat = "container max-w-5xl h-4/5 flex flex-col justify-center shadow rounded bg-gray-300";
	const cxChatMessageList = "flex flex-col flex-grow gap-2 p-2 m-2 overflow-y-scroll shadow-inner rounded bg-gray-100 ";

	if (streamFailed) {
		return (
			<section className={cxChat}>
				<ChatError
					reason="Connection to server failed"
					hint="Server could be down or query parameters could be wrong"
				/>
			</section>
		);
	} else {
		return (
			<section className={cxChat}>
				<div className={cxChatMessageList}>
					{messages.map(({ content, from }: IChatMessage, index) => (
						<ChatMessage key={index} content={content} side={from === "client" ? "start" : "end"} />
					))}
				</div>
				<ChatTextInput />
			</section>
		);
	}
}
