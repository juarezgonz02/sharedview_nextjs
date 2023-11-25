import React from "react";
import { Button, Select, Form, ConfigProvider } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useFetchChangeState } from "../libs/useFetchChangeState";

const onFinish = (onSuccess, onError, code, handleStateOk, getRooms) => (values) => {
    useFetchChangeState(values, code, onSuccess, onError);
    setTimeout(() => {
        handleStateOk();
        getRooms();
    }, 1500);
}

const ChangeState = ({ handleStateOk, handleStateCancel, code, state, getRooms}) => {
    const onSuccess = (message) => toast.success(message);
    const onError = (message) => toast.error(message);
    console.log(state)

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
                name="changeState"
                layout="vertical"
                onFinish={onFinish(onSuccess, onError, code, handleStateOk, getRooms)}
                autoComplete="off"
                style={{
                    marginTop: "20px",
                }}
            >
                <Form.Item
                    label="Cambiar el estado de la sala"
                    name="state"
                    initialValue={
                        state === true ? "Publica" : "Privada"
                    }
                    rules={[
                        {
                            required: true,
                            message: "Por favor, ingrese el estado de la sala",
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        options={[
                            {
                                value: true,
                                label: 'Publica',
                            },    
                            {
                                value: false,
                                label: 'Privada',
                            },                     
                        ]}
                    />
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
                        onClick={() => handleStateCancel()}
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
                        Cambiar
                    </Button>
                </Form.Item>
            </Form>
            <Toaster />
        </ConfigProvider>
    );
};

export default ChangeState;