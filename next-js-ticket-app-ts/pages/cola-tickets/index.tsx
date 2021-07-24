import LayoutAntd from "../../components/Shared/Layout";
import ListTickets from "../../components/Tickets/components/ListTickets";

const ColaTicketsPage = () => {
  return (
    <LayoutAntd hiddenMenu> 
      <ListTickets />
    </LayoutAntd>
  );
};

export default ColaTicketsPage;
