import { ChatApiResponse } from "../../api/chat.api";
import { IChatAction, IChatMessage } from "./interfaces";

export function addServerMessage(content: string): IChatAction<IChatMessage> {
	return { type: "@chat/addServerMessage", payload: { content, from: "server" } };
}

export function addClientMessage(content: string): IChatAction<IChatMessage> {
	return { type: "@chat/addClientMessage", payload: { content, from: "client" } };
}

export function saveReplyResult(response: ChatApiResponse): IChatAction<ChatApiResponse> {
	return { type: "@chat/saveReplyResult", payload: response };
}

export function saveStreamResult(response: ChatApiResponse): IChatAction<ChatApiResponse> {
	return { type: "@chat/saveStreamResult", payload: response };
}

export function setStreamFailed(value: boolean): IChatAction<boolean> {
	return { type: "@chat/setStreamFailed", payload: value };
}
