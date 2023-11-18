
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

const handleLoginResponse = (response, router) => {
    if (response.status === 200) {
        // If the response status is 200 (OK), redirect the user to the home page using the router
        router.push("/");
    } else {
        console.log("Error");
    }
};

// Asynchronous function for handling user login API call and response
export const useFetchLogin = async (router, values) => {
    const { identifier, password } = values;

    try {
        const response = await callLoginApi({ identifier, password });
        handleLoginResponse(response, router);
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error.message);
    }
};
