export interface Ticket {
  ticketNo: number;
  escritorio: number;
  agente: string;
}

export interface TicketFromBack {
  agent?: string;
  desktop?: string;
  id?: string;
  number?: number;
}
