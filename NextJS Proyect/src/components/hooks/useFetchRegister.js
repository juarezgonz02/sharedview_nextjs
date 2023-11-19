
// Asynchronous function to make a POST request to register API
const callRegisterApi = async (data) => {
    const env_url = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`

    try {
        const response = await fetch(`${env_url}:${process.env.NEXT_PUBLIC_API_PORT}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const handleResponse = async (response, requestData, router, onSuccess, onError) => {
    if (response.status === 201) {
        const { username } = requestData;
        localStorage.setItem("username", username);
        onSuccess("Account created successfully");
        router.push("/login");
    } else {
        try {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Error en el servidor";
            onError(errorMessage);
        } catch (error) {
            onError("Error en el servidor");
        }
    }
};

// Asynchronous function for handling user registration API call and response
export const useFetchRegister = async (values, router, onSuccess, onError) => {
    const { name, username, email, password } = values;
    try {
        const response = await callRegisterApi({ name, username, email, password });
        handleResponse(response, { username }, router, onSuccess, onError);
    } catch (error) {
        console.log("Error al procesar el registro:", error.message);
    }
};

