
const callDeleteRoomApi = async (code) => {
    const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`;
    try {
        const response = await fetch(
            `${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/room/${code}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const handleDeleteRoomResponse = async (response) => {
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        try {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Error en el servidor";
            throw errorMessage;
        } catch (error) {
            throw "Error en el servidor";
        }
    }
}

export const useFetchDeleteRoom = async (code) => {
    try	{
        const response = await callDeleteRoomApi(code);
        await handleDeleteRoomResponse(response);
    } catch (error) {
        console.log(error);
    }
}