
// Asynchronous function to make a POST request to login API
const callLoginApi = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
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

const handleLoginResponse = async (response, router, onSuccess, onError) => {
    if (response.status === 200) {
        // If the response status is 200 (OK), redirect the user to the home page using the router
        onSuccess("Logged in successfully");
        router.push("/home");
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

// Asynchronous function for handling user login API call and response
export const useFetchLogin = async (values, router, onSuccess, onError) => {
    const { identifier, password } = values;

    try {
        const response = await callLoginApi({ identifier, password });
        handleLoginResponse(response, router, onSuccess, onError);
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error.message);
    }
};
