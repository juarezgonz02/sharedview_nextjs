const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`;

const callAddUserApi = async ({username, code}) => {
    try{
        const response = await fetch(
            `${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/room/${code}/user/${username}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }
        )
        const data = await response.json();
        return {response, data};
    } catch(error){
        console.error(error);
        throw error;
    }
}

const handleCreateRoomResponse = async (response, onSuccess, onError) => {
    if(response.status === 200){
        onSuccess("User added successfully")
    } else {
        const data = await response.json();
        const errorMessage = data.message || "Failed to add user";
        onError(errorMessage);
    }
}


export const useFetchAddUser = async (values, code, onSuccess, onError) => {
    const {username} = values;
    try{
        const {response} = await callAddUserApi({username, code})
        await handleCreateRoomResponse(response, onSuccess, onError)
    } catch(error){
        onError("Error en el servidor")
    }
}
