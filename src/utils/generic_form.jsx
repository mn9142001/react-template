import React, { useState } from "react";
import isFormValid from "./validator";
import axios from "axios";
import { useMutation } from "react-query";
import { AUTH_HEADER } from "./constants";

const GenericForm = ({ fields, onSubmit, onSuccess, onPreSubmit, submitUrl, onError, method="post", token, formStyle, formDivStyle }) => {
    const initialFormData = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormData);

    const setData = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        return setData(name, value)
    };

    const sendData = data => {
        console.log(submitUrl, "asdfjsdaoipfgj")
        let config = {
            method : method,
            data : data,
            headers : {}
        }

        if(submitUrl.href){
            submitUrl = submitUrl.href
        }

        if (token){
            config.headers.authorization = `${AUTH_HEADER} ${token}`
        }
        return axios(submitUrl, config)
    }

    const mutateData = useMutation({
        mutationFn : sendData,
        onSuccess : response => {
            if (onSuccess) {
                return onSuccess(response)
            }
            console.log("response", response)
        },
        onError : error => {
            if(onError){
                return onError(error)
            }
            console.log("error", error)
        }
    })

    const autoSubmit = data => {
        mutateData.mutate(data)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const is_valid = isFormValid(initialFormData, formData);
        if (is_valid) {
            let _formData = formData
            if(onPreSubmit) {
                _formData = onPreSubmit(_formData)
            }
            onSubmit ? onSubmit(_formData) : autoSubmit(_formData);
        }
    };

    const inputStyle = "p-1 text-center border-black border-2 text-black rounded-md m-2";

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form className="flex flex-col w-fit p-2" onSubmit={formSubmitHandler}>
                {fields.map((field) => (
                    field.isCustomComponent ? <field.element key={field.name} onValueChange={value => setData(field.name, value)} /> :
                    <input
                        key={field.name}
                        className={inputStyle}
                        placeholder={field.placeholder}
                        type={field.type}
                        name={field.name}
                        onChange={inputChangeHandler}
                        value={formData[field.name]}
                    />
                ))}
                <button disabled={mutateData.isLoading} type="submit" className="p-2 bg-gray-500 text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GenericForm