

const callGetRoomsApi = async () => {
    const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`;
    try {
        const response = await fetch(
            `${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/user/rooms`,
            {
                method: "GET",
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

const handleGetRoomsResponse = async (response) => {
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


export const useFetchRooms = async () => {
    try {
        const response = await callGetRoomsApi();
        const data = await handleGetRoomsResponse(response);
        return data.rooms;
    } catch (error) {
        console.log(error);
    }
}
