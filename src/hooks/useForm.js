import { useRef, useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const enabled = useRef();
    const ignore_tls = useRef();


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        enabled,
        ignore_tls
    }
}