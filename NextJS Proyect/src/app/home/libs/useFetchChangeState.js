const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`;

const callChangeStateApi = async ({state, code}) => {
    try{
        const response = await fetch(
            `${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/room/${code}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        isPublic: state,
                    }
                ),
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
        onSuccess("Room state changed successfully")
    } else {
        const data = await response.json();
        const errorMessage = data.message || "Failed to change room state";
        onError(errorMessage);
    }
}



export const useFetchChangeState = async (values, code, onSuccess, onError) => {
    console.log(code);
    const {state} = values;
    try{
        const {response} = await callChangeStateApi({state, code})
        await handleCreateRoomResponse(response, onSuccess, onError)
    } catch(error){
        onError("Error en el servidor")
    }
}