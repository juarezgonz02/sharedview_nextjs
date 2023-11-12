"use client";
import React, { useState } from "react";
import { Button, Input, Form, Select, Space } from "antd";
import { message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

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
    );
};

export default CreateRoomForm;
