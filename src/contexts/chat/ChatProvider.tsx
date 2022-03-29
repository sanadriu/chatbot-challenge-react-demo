import React, { useCallback, useEffect, useReducer } from "react";
import { chatApi, ChatApiResponse } from "../../api/chat.api";
import { addClientMessage, addServerMessage, saveReplyResult, saveStreamResult, setStreamFailed } from "./actions";
import { ChatContext } from "./ChatContext";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

interface ChatProviderProps {
	chatId: string;
	phone: string;
	children: React.ReactNode;
}

export const ChatProvider = ({ chatId, phone, children }: ChatProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const sendClientMessage = useCallback(
		async function (content: string) {
			if (content) dispatch(addClientMessage(content));

			dispatch(saveReplyResult(await chatApi.reply(chatId, phone, content)));
		},
		[dispatch, chatId, phone]
	);

	useEffect(() => {
		const chatSubscription = chatApi.subscribe(chatId, phone);

		chatSubscription.onmessage = function (ev: MessageEvent) {
			const response = JSON.parse(ev.data) as ChatApiResponse;
			const content = response.data;

			if (content) dispatch(addServerMessage(content));

			dispatch(saveStreamResult(response));
		};

		chatSubscription.onopen = function () {
			dispatch(setStreamFailed(false));
		};

		chatSubscription.onerror = function () {
			dispatch(setStreamFailed(true));
		};

		return () => {
			chatSubscription.close();
		};
	}, [chatId, phone]);

	return <ChatContext.Provider value={{ ...state, chatId, phone, sendClientMessage }}>{children}</ChatContext.Provider>;
};
