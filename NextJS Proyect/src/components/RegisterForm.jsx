'use client';
import React from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation'

const onFinish = (router) => async (values) => {
    const { name, username, email, password } = values;
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, email, password })
        });

        if (response.status === 201) {
            router.push('/login');
        } else {
            console.log("Error");
        }
    } catch (error) {
        console.log(error)
    }
};

const RegisterForm = () => {
    const router = useRouter();

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
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish(router)}
                layout='vertical'
                style={{
                    width: "100%",
                }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input placeholder="Input your name" />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input placeholder="Input your username" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder="Input your email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        type="password"
                        placeholder="Input your password"
                    />
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
                        className='hover:bg-purple-600'
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
}

export default RegisterForm;
