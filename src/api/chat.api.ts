import { config } from "../config/config";

export interface ChatApiResponse {
	success: boolean;
	message: string;
	data?: any;
	errors?: [];
}

const route = "/chats";

function subscribe(chatId: string, phone: string): EventSource {
	return new EventSource(`${config.api.baseUrl}${route}/${chatId}/subscribe?phone=${phone}`);
}

function reply(chatId: string, phone: string, content: string): Promise<ChatApiResponse> {
	return fetch(`${config.api.baseUrl}${route}/${chatId}/reply`, {
		method: "POST",
		body: JSON.stringify({ phone, content }),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.catch((error: Error) => ({
			success: false,
			message: error.message,
		}));
}

export const chatApi = {
	subscribe,
	reply,
};
