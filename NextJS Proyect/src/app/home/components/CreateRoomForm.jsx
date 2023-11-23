"use client";
import React, { useState } from "react";
import { Button, Input, Form, Select, ConfigProvider } from "antd";

const onFinish = (formRef) => (values) => {
    console.log("Success:", values);
    formRef.current?.resetFields();
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};


const CreateRoomForm = ({ handleOk, handleCancel }) => {
    const [state, setState] = useState("public");

    const onChangeState = (value) => {
        setState(value);
    };

    const formRef = React.useRef(null);

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
                onFinish={onFinish(formRef)}
                onFinishFailed={onFinishFailed(formRef)}
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
                    label="Estado de la sala"
                    name="state"
                    rules={[
                        {
                            required: true,
                            message: "Seleccione un estado!",
                        },
                    ]}
                >
                    <Select
                        placeholder="Seleccione un estado"
                        onChange={onChangeState}
                        value={state}
                    >
                        <Select.Option value="public">Publica</Select.Option>
                        <Select.Option value="private">Privada</Select.Option>
                    </Select>
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
                    >
                        Crear
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
};

export default CreateRoomForm;
