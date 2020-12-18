import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required('No numbers or special characters allowed').min(2, 'must be at least 2 characters'),
    size: yup.string(),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    specialInstructions: yup.string()
});