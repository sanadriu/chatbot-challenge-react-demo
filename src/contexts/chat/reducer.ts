import React from "react";
import { ChatApiResponse } from "../../api/chat.api";
import { IChatAction, IChatMessage, IChatState } from "./interfaces";

export const reducer: React.Reducer<IChatState, IChatAction<unknown>> = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "@chat/addServerMessage":
		case "@chat/addClientMessage": {
			return {
				...state,
				messages: [...state.messages, payload as IChatMessage],
			};
		}
		case "@chat/saveStreamResult": {
			return {
				...state,
				streamResult: payload as ChatApiResponse,
			};
		}
		case "@chat/saveReplyResult": {
			return {
				...state,
				replyResult: payload as ChatApiResponse,
			};
		}
		case "@chat/setStreamFailed": {
			return {
				...state,
				streamFailed: payload as boolean,
			};
		}
		default: {
			return state;
		}
	}
};
