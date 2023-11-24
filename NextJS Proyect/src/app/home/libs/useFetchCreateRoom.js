const ENV_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}`;

const callCreateRoomApi = async (values) => {
    try {
        const response = await fetch(
            `${ENV_URL}:${process.env.NEXT_PUBLIC_API_PORT}/room`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                credentials: "include",
            }
        );

        const data = await response.json(); // Extract JSON content
        return { response, data };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const handleCreateRoomResponse = async (response, onSuccess, onError) => {
    if (response.status === 201) {
        onSuccess("Room created successfully");
    } else {
        const data = await response.json();
        const errorMessage = data.message || "Failed to create room";
        onError(errorMessage);
    }
};

export const useFetchCreateRoom = async (values, onSuccess, onError) => {
    const { name } = values;
    try {
        const { response } = await callCreateRoomApi({ name });
        await handleCreateRoomResponse(response, onSuccess, onError);
    } catch (error) {
        onError("Error en el servidor");
    }
};
