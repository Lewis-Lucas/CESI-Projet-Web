class Ticket {
    constructor(id ,ticketNum ,nom, prenom, titre, description, date, status, technicien) {
        this.id = id;
        this.ticketNum = ticketNum;
        this.nom = nom;
        this.prenom = prenom;
        this.titre = titre;
        this.description = description;
        this.date = date;
        this.status = status
        this.technicien = technicien;
    }

    //SETTERS
    setId(id) {
        this.id = id;
    }
    setTicketNum(ticketNum) {
        this.ticketNum = ticketNum;
    }
    setNom(nom) {
        this.nom = nom;
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }
    setDescription(description) {
        this.description = description;
    }
    setDate(date) {
        this.date = date;
    }
    setStatus(status) {
        this.status = status;
    }
}
