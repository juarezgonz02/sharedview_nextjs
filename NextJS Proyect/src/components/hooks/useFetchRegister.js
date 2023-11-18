
// Asynchronous function to make a POST request to register API
const callRegisterApi = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/auth/register", {
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

const handleResponse = (response, router) => {
    if (response.status === 201) {
        // If the response status is 201 (Created), extract username from data and store it in local storage
        const { username } = data;
        localStorage.setItem("username", username);
        // Redirecting the user to the login page using the router
        router.push("/login");
    } else {
        console.log("Error");
    }
};

// Asynchronous function for handling user registration API call and response
export const useFetchRegister = async (values, router) => {
    const { name, username, email, password } = values;
    try {
        const response = await callRegisterApi({ name, username, email, password });
        handleResponse(response, router);
    } catch (error) {
        console.error("Error al procesar el registro:", error.message);
    }
};

