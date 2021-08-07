import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../../../../context/SocketContext";
import {
  Ticket,
  TicketFromBack,
} from "../../../../interfaces/ListTickets.interface";
import { Row, Col, List, Card, Tag, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { getLastTickets } from "../../../../helpers/getListTickets";

const data: Ticket[] = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Carlos Castro",
  },
];

const ListTickets = () => {
  const { socket } = useContext(SocketContext);

  const [dataTickets, setDataTickets] = useState<TicketFromBack[]>([]);

  const getTicketList = () => {
    socket.on("ticket-asignado", (data: TicketFromBack[]) => {
      setDataTickets(data);
    });
  };

  useEffect(() => {
    getTicketList();

    return () => {
      socket.off("ticket-asignado");
    };
  }, [socket]);

  useEffect(() => {
    getLastTickets()
      .then(setDataTickets)
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={dataTickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Escritorio: {item.desktop}</Tag>,
                  ]}
                >
                  <Title>N°. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={dataTickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket N°. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="magenta">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListTickets;
