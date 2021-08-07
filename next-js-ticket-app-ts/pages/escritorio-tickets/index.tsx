import LayoutAntd from "../../components/Shared/Layout";
import InfoEscritorioTickets from "../../components/Escritorio/components/InfoEscritorioTickets";
import WithoutAuth from "../../HOC/WithoutAuth";

const EscritorioTicketsPage = () => {
  return (
    <LayoutAntd>
      <InfoEscritorioTickets />
    </LayoutAntd>
  );
};

export default WithoutAuth(EscritorioTicketsPage);
