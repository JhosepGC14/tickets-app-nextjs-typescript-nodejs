import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Typography,
  Divider,
} from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getUserFromStorage } from "../../../../helpers/getUserFromStorage";
import { UserFrom } from "../../../../interfaces/User.interface";

const { Title, Text } = Typography;

const FormLogin = () => {
  //hooks
  const router = useRouter();

  const onFinish = ({ nameUser, desktop }: any) => {
    localStorage.setItem("user", nameUser);
    localStorage.setItem("desktop", desktop);
    router.push("/escritorio-tickets");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="nameUser"
          rules={[{ required: true, message: "Porfavor ingrese su nombre." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Porfavor ingrese el número de escritorio.",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={false}>
            <SaveOutlined />
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLogin;
