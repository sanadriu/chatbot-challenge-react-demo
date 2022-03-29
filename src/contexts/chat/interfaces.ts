import { ChatApiResponse } from "../../api/chat.api";
import { chatActionType } from "./types";

export interface IChatMessage {
	content: string;
	from: "client" | "server";
}

export interface IChatAction<T> {
	type: chatActionType;
	payload: T;
}

export interface IChatState {
	messages: Array<IChatMessage>;
	streamFailed: boolean;
	streamResult: ChatApiResponse | null;
	replySending: boolean;
	replyResult: ChatApiResponse | null;
}

export interface IChatValue extends IChatState {
	sendClientMessage: (content: string) => void;
	chatId: string;
	phone: string;
}
