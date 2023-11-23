"use client";
import React from "react";
import { Button, Input, Form, ConfigProvider } from "antd";
import toast, { Toaster } from "react-hot-toast";


const CreateRoomForm = ({ handleOk, handleCancel, createRooms}) => {
    const formRef = React.useRef(null);
    const onSuccess = (message) => toast.success(message);
    const onError = (message) => toast.error(message);

    const onFinish = (values) => {
        createRooms(onSuccess, onError, values);
        formRef.current.resetFields();
    };

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
                name="basic"
                layout="vertical"
                ref={formRef}
                onFinish={onFinish}
                autoComplete="off"
                style={{
                    marginTop: "20px",
                }}
            >
                <Form.Item
                    label="Nombre de la sala"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Ingrese el nombre de la sala!",
                        },
                    ]}
                >
                    <Input placeholder="Ingrese el nombre" />
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
                        onClick={() => handleCancel(formRef)}
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
                        onClick={() =>
                            setTimeout(() => {
                                handleOk(formRef);
                            }, 1000)
                        }
                    >
                        Crear
                    </Button>
                </Form.Item>
            </Form>
            <Toaster />
        </ConfigProvider>
    );
};

export default CreateRoomForm;
