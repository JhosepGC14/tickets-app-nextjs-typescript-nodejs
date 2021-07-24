import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { Empty } from "antd";
import LayoutAntd from "../components/Shared/Layout";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, []);

  return (
    <LayoutAntd hiddenMenu>
      <>
        <Empty description={false} />
        <h1 style={{ textAlign: "center" }}>Ups!! Pagina no encontrada</h1>
        <span style={{ textAlign: "center", display: "block" }}>
          Redireccionando...
        </span>
      </>
    </LayoutAntd>
  );
};

export default Custom404;
