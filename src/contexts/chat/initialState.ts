import { IChatState } from "./interfaces";

export const initialState: IChatState = {
	streamFailed: false,
	streamResult: null,
	replySending: false,
	replyResult: null,
	messages: [],
};
