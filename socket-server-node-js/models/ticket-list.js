const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pendings = [];
    this.assignements = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  //extraer los 3 que se veran en la tarjeta y 20 en el hospital
  get last13() {
    return this.assignements.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendings.push(newTicket);
    return newTicket;
  }

  assignementTickets(agent, desktop) {
    if (this.pendings.length === 0) {
      return null;
    }

    const nextTicket = this.pendings.shift();
    nextTicket.agent = agent;
    nextTicket.desktop = desktop;

    this.assignements.unshift(nextTicket);
    return nextTicket;
  }
}

module.exports = TicketList;
