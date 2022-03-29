import { useSearchParams } from "react-router-dom";
import { ChatProvider } from "./contexts/chat/ChatProvider";
import { Chat } from "./components/Chat/Chat";
import { Layout } from "./components/Layout/Layout";
import { Form } from "./components/Form/Form";

function App() {
	const [searchParams] = useSearchParams();
	const chatId = searchParams.get("chatId");
	const phone = searchParams.get("phone");

	return (
		<Layout>
			{chatId && phone ? (
				<ChatProvider chatId={chatId} phone={phone}>
					<Chat />
				</ChatProvider>
			) : (
				<Form />
			)}
		</Layout>
	);
}

export default App;
