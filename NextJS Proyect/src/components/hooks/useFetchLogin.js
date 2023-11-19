
// Asynchronous function to make a POST request to login API
const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`

const callLoginApi = async (data) => {
    try {
        const response = await fetch(`${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const handleLoginResponse = async (data, response, router, onSuccess, onError) => {
    if (response.status === 200) {
        // If the response status is 200 (OK), redirect the user to the home page using the router
        onSuccess("Logged in successfully");
        saveUsernameToStorage(data.identifier)
        router.push("/");
    } else if(response.status === 404) {
        // If the response status is 401 (Unauthorized), show an error message
        onError("User not found");
    } else if(response.status === 401){
        onError("Invalid credentials");
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

const saveUsernameToStorage = (identifier) => {
    localStorage.setItem("username", identifier);
}

// Asynchronous function for handling user login API call and response
export const useFetchLogin = async (values, router, onSuccess, onError) => {
    const { identifier, password } = values;

    try {
        const response = await callLoginApi({ identifier, password });
        await handleLoginResponse(values, response, router, onSuccess, onError);
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error.message);
    }
};
