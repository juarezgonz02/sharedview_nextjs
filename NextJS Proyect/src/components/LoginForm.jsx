"use client"
import React from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'

const onFinish = (router) => async (values) => {
    const { identifier, password } = values;
    try{
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier, password }),
        });
        
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            router.push("/");
        } else {
            console.log("Error");
        }

    } catch (error) {
        console.log(error);
    }
};

const LoginForm = () => {
    const router = useRouter();
    return (
        <Form
            name="normal_login"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish(router)}
            layout='vertical'
        >
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
                        },
                        Input: {
                            colorBgContainer: "#1e1e1e",
                            colorBorder: "#1e1e1e",
                            colorText: "#fff",
                            colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                            activeBorderColor: "#fff",
                            hoverBorderColor: "#fff",
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
                <Form.Item
                    label="Username"
                    name="identifier"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Input your username" />
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
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Input your password"
                    />
                </Form.Item>
                <Form.Item>
                    <div className='flex flex-col items-center justify-between text-white gap-2'>
                        <Button
                            type="default"
                            htmlType="submit"
                            style={{
                                backgroundColor: "#7f19b4",
                                color: "#fff",
                                borderColor: "#7f19b4",
                                width: "100%",
                            }}
                        >
                            Log in
                        </Button>
                    </div>
                </Form.Item>
            </ConfigProvider>
        </Form>
    );
}

export default LoginForm