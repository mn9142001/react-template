import GenericForm from "../../utils/generic_form";

const SignUp = () => {
    const fields = [
        { name: "email", placeholder: "Email", type: "email" },
        { name: "password1", placeholder: "Password", type: "password" },
        { name: "password2", placeholder: "Repeat password", type: "password" },
        { name: "username", placeholder: "Username", type: "text" },
        { name: "first_name", placeholder: "First Name", type: "text" },
        { name: "last_name", placeholder: "Last Name", type: "text" },
    ];

    const handleSubmit = (formData) => {
        // Handle form submission with the formData
        console.log("Form submitted:", formData);
    };

    return <GenericForm fields={fields} onSubmit={handleSubmit} />;
};

export default SignUp;
