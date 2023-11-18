
export const useFetchLogin = async (router, values) => {
    const { identifier, password } = values;
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier, password }),
        });
        if (response.status === 200) {
            router.push("/");
        } else {
            console.log("Error");
        }
    } catch (error) {
        console.log(error);
    }
}