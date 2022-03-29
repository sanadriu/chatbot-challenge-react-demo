import { createContext, useContext } from "react";
import { IChatValue } from "./interfaces";

export const ChatContext = createContext<IChatValue | null>(null);

export function useChat() {
	return useContext(ChatContext) || null;
}
