import { useContext, useState } from "react";
import { Button, Col, Divider, Row } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { SocketContext } from "../../../../context/SocketContext";
import { getUserFromStorage } from "../../../../helpers/getUserFromStorage";
import { TicketFromBack } from "../../../../interfaces/ListTickets.interface";

const InfoEscritorioTickets = () => {
  const { socket } = useContext(SocketContext);
  const [ticketToWork, setTicketToWork] = useState<TicketFromBack | null>(null);
  const [user] = useState(getUserFromStorage());

  const nextTicket = () => {
    const user = getUserFromStorage();
    socket.emit("siguiente-ticket-trabajar", user, (ticket: TicketFromBack) => {
      setTicketToWork(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user?.nameUser || ""}</Title>
          <Text> Usted está trabajando en el escritorio: </Text>
          <Text type="success">{user?.desktop || ""}</Text>
        </Col>
        <Col span={4}>
          <Button type="primary" shape="round" danger>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticketToWork && (
        <Row>
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticketToWork.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={20} span={4}>
          <Button onClick={nextTicket} shape="round" type="primary">
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InfoEscritorioTickets;
