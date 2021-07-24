import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row, Button, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";

interface Props {}

const CreateTickets = (props: Props) => {
  const newTicket = (): void => {
    console.log("nuevo ticket");
  };

  return (
    <>
      <Row justify="center">
        <Col span={14} offset={6}>
          <Space align="center" direction="vertical">
            <Title level={3}>Presione el botón para un nuevo ticket</Title>

            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              onClick={newTicket}
            >
              Nuevo Ticket
            </Button>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }} justify="center">
        <Col span={14}>
          <Title
            style={{
              textAlign: "center",
            }}
            level={5}
          >
            Su número
          </Title>
          <br />
          <Title
            level={5}
            type="success"
            style={{
              fontSize: 55,
              textAlign: "center",
            }}
          >
            55
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default CreateTickets;
