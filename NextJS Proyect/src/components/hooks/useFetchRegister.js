
export const useFetchRegister = async (values, router) => {
    const { name, username, email, password } = values;
    try {
        const response = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, username, email, password }),
        });

        if (response.status === 201) {
            localStorage.setItem("username", username);
            router.push("/login");
        } else {
            console.log("Error");
        }
    } catch (error) {
        console.log(error);
    }
}
