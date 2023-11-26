"use client";
import { Form, Input, Button, ConfigProvider } from "antd";
import { useFetchRegister } from "../libs/useFetchRegister.js";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const onFinish = (router, onSuccess, onError) => (values) => {
    useFetchRegister(values, router, onSuccess, onError);
};

const RegisterForm = () => {
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
                name="register"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish(router, onSuccess, onError)}
                layout="vertical"
                style={{
                    width: "100%",
                }}
            >
                <Form.Item
                    label="Nombre"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese su nombre!",
                        },
                    ]}
                >
                    <Input placeholder="Ingrese su nombre" autoComplete="off"/>
                </Form.Item>
                <Form.Item
                    label="Nombre de usuario"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese su nombre de usuario!",
                        },
                    ]}
                >
                    <Input placeholder="Ingrese su nombre de usuario" autoComplete="off"/>
                </Form.Item>
                <Form.Item
                    label="Correo electronico"
                    name="email"
                    autoComplete="off"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese su email!",
                        },
                    ]}
                >
                    <Input placeholder="Ingrese su correo" autoComplete="off"/>
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese su contraseña!",
                        },
                    ]}
                >
                    <Input.Password type="password" placeholder="Ingrese su contraseña" autoComplete="off" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="default"
                        htmlType="submit"
                        style={{
                            backgroundColor: "#7f19b4",
                            color: "#fff",
                            borderColor: "#7f19b4",
                            width: "100%",
                            marginTop: "10px",
                        }}
                        className="hover:bg-purple-600"
                    >
                        Registrarse
                    </Button>
                </Form.Item>
            </Form>
            <Toaster />
        </ConfigProvider>
    );
};

export default RegisterForm;
