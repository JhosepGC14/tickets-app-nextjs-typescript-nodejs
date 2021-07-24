import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Col, Divider, Row } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { UserFrom } from "../../../../interfaces/User.interface";
import { getUserFromStorage } from "../../../../helpers/getUserFromStorage";

const InfoEscritorioTickets = () => {
  // const router = useRouter();
  // const [userForm, setUserForm] = useState<UserFrom>({
  //   desktop: null,
  //   nameUser: null,
  // });

  // console.log(userForm);

  // //apenas renderice la pagina va a setear el estado
  // useEffect(() => {
  //   setUserForm(getUserFromStorage());
  // }, []);

  // // validamos si existe el usuario en local storage
  // // si en caso existe se redirecciona al escritorio
  // if (!userForm.desktop && !userForm.nameUser) {
  //   return null;
  // }

  // if (userForm.desktop === null && userForm.nameUser === null) {
  //   router.replace("/escritorio-tickets");
  // }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Jhosep</Title>
          <Text> Usted está trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4}>
          <Button type="primary" shape="round" danger>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={20} span={4}>
          <Button shape="round" type="primary">
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InfoEscritorioTickets;
