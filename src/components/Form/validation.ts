import { object, string } from "yup";
import validator from "validator";

export const validationSchema = object({
	chatId: string()
		.required("Chat ID is required")
		.test("chat", "Chat ID is not valid", (value) => typeof value === "string" && validator.isMongoId(value))
		.label("Chat ID"),
	phone: string()
		.required("Phone number is required")
		.test(
			"phone",
			"Phone number must be valid and from Spain",
			(value) => typeof value === "string" && validator.isMobilePhone(value, "es-ES")
		)
		.label("Phone"),
});
