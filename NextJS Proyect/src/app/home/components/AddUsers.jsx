import React from "react";
import { Button, Input, Form, ConfigProvider } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useFetchAddUser } from "../libs/useFetchAddUser";

const onFinish = (onSuccess, onError, code, handleAddUserOk, formRef, getRooms) => (values) => {
    useFetchAddUser(values, code, onSuccess, onError);
    setTimeout(() => {
        handleAddUserOk();
    }, 1500);
    getRooms();
    formRef.current.resetFields();
}

const AddUsers = ({code, handleAddUserOk, handleAddUserCancel, getRooms}) => {

    const addformRef = React.useRef(null);
    const onSuccess = (message) => toast.success(message);
    const onError = (message) => toast.error(message);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        labelColor: "#fff",
                        labelRequiredMarkColor: "#7f19b4",
                        colorError: "#a233d1",
                    },
                    Input: {
                        colorBgContainer: "#1e1e1e",
                        colorBorder: "#1e1e1e",
                        colorText: "#fff",
                        colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                        activeBorderColor: "#fff",
                        hoverBorderColor: "#fff",
                        hoverBorderColor: "#fff",
                        colorError: "#fff",
                    },
                    Select: {
                        colorBorder: "#1e1e1e",
                        colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                        colorBgContainer: "#1e1e1e",
                        optionSelectedBg: "#1e1e1e",
                        optionSelectedColor: "#fff",
                        colorBgElevated: "#1e1e1e",
                        colorText: "#fff",
                        colorPrimaryHover: "#fff",
                        colorPrimary: "#fff",
                        hoverBorderColor: "#fff",
                        colorError: "#fff",
                    },
                },
            }}
        >
            <Form
                name="addUsers"
                ref={addformRef}
                layout="vertical"
                onFinish={onFinish(onSuccess, onError, code, handleAddUserOk, addformRef, getRooms)}
                autoComplete="off"
                style={{
                    marginTop: "20px",
                }}
            >
                <Form.Item
                    label="Agregar usuarios a la sala"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Por favor, ingrese el nombre del usuario",
                        },
                    ]}
                >
                    <Input placeholder="Ingrese el nombre del usuario" />
                </Form.Item>
                <Form.Item
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "end",
                    }}
                >
                    <Button
                        type="default"
                        style={{
                            padding: "0 20px",
                            marginRight: "10px",
                            borderColor: "#7f19b4",
                            color: "#fff",
                        }}
                        onClick={() => handleAddUserCancel(addformRef)}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="default"
                        htmlType="submit"
                        style={{
                            backgroundColor: "#7f19b4",
                            color: "#fff",
                            padding: "0 20px",
                            borderColor: "#7f19b4",
                        }}
                    >
                        Agregar
                    </Button>
                </Form.Item>
            </Form>
            <Toaster />
        </ConfigProvider>
    )
}

export default AddUsers