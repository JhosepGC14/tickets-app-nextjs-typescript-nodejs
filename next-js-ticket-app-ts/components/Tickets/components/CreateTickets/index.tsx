import React, { useContext, useState } from "react";
import { SocketContext } from "../../../../context/SocketContext";
import { TicketFromBack } from "../../../../interfaces/ListTickets.interface";

import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row, Button, Space } from "antd";
import Title from "antd/lib/typography/Title";

const CreateTickets = () => {
  const { socket } = useContext(SocketContext);
  const [lastTicket, setLastTicket] = useState<TicketFromBack | null>(null);

  const newTicket = (): void => {
    socket.emit("solicitar-ticket", null, (ticket: TicketFromBack) => {
      setLastTicket(ticket);
    });
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
      {lastTicket && (
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
              {lastTicket?.number}
            </Title>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTickets;
