"use client";
import React from "react";
import { Form, Input, Button, ConfigProvider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useFetchLogin } from "../libs/useFetchLogin.js";
import toast, { Toaster } from "react-hot-toast";

const onFinish = (router, onSuccess, onError) => (values) => {
    useFetchLogin(values, router, onSuccess, onError);
};

const LoginForm = () => {
    const router = useRouter();
    const onSuccess = (message) => toast.success(message);
    const onError = (message) => toast.error(message);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorBgTextHover: "#fff",
                        colorPrimaryHover: "#fff",
                        colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                        colorBgContainerDisabled: "rgba(127, 25, 180, 0.5))",
                        colorPrimaryActive: "#fff",
                    },
                    Modal: {
                        contentBg: "#121212",
                        headerBg: "#121212",
                        titleColor: "#fff",
                    },
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
                    },
                },
            }}
        >
            <Form
                name="normal_login"
                onFinish={onFinish(router, onSuccess, onError)}
                layout="vertical"
            >
                <Form.Item
                    label="Nombre de usuario"
                    name="identifier"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingresa tu nombre de usuario!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Ingrese su nombre de usuario"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingresa tu contraseña!",
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Porfavor ingresa tu contraseña"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item>
                    <div className="flex flex-col items-center justify-between text-white gap-2">
                        <Button
                            type="default"
                            htmlType="submit"
                            style={{
                                backgroundColor: "#7f19b4",
                                color: "#fff",
                                borderColor: "#7f19b4",
                                width: "100%",
                                marginTop: "1rem",
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </Form.Item>
            </Form>
            <Toaster />
        </ConfigProvider>
    );
};

export default LoginForm;
