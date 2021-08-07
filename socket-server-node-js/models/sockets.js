const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    //Crear la instancia de nuestro ticket list
    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.createTicket();
        callback(nuevoTicket);
      });

      socket.on(
        "siguiente-ticket-trabajar",
        ({ nameUser, desktop }, callback) => {
          const yourTicket = this.ticketList.assignementTickets(
            nameUser,
            desktop
          );
          callback(yourTicket);
          this.io.emit("ticket-asignado", this.ticketList.last13);
        }
      );
    });
  }
}

module.exports = Sockets;
