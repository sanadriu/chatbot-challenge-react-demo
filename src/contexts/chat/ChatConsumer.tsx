import React from "react";
import { ChatContext } from "./ChatContext";
import { IChatValue } from "./interfaces";

interface ChatConsumerProps {
	children: (value: IChatValue | null) => React.ReactNode;
}

export const ChatConsumer = ({ children }: ChatConsumerProps) => {
	return <ChatContext.Consumer>{children}</ChatContext.Consumer>;
};
