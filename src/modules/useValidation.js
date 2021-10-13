import { reactive } from "@vue/reactivity";
const errors = reactive({});

export default function useFormValidation() {
	const validateNameField = (fieldName, fieldValue) => {
		errors[fieldName] = fieldValue === "" ? true : false;
	}
	return { errors, validateNameField }
}