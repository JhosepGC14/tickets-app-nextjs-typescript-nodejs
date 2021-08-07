import { TicketFromBack } from "../interfaces/ListTickets.interface";

export const getLastTickets = async (): Promise<TicketFromBack[]> => {
  const response = await fetch("http://localhost:8080/listTickets");
  const data = await response.json();
  return data.response;
};
