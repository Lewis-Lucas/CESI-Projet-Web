mesTickets = [];
idCurrentTicket = null;
details = [];
$(document).ready( function () {
  $('#SuppressionTicket').hide();
  $("#pageNouveauTicket").hide();

  initialisationTickets();
  loadTableau(mesTickets);
	$('#tableau').DataTable();

  $('#menuToggle').click(function() {
    $("#menuToggle").animate({
      height : "+=10px",
      width : "+=10px"
    });
    $("#accordionSidebar").animate({width :"toggle"});
    $("#menuToggle").animate({
      height : "-=10px",
      width : "-=10px"
    });
  });

  $("#buttonModalSupprimerTicket").click(function() {
    var lignes = document.getElementById('lines').childNodes;
    for(var i=1;i<lignes.length;i++) {
        if(lignes[i].childNodes[0].innerHTML == objectSelected) {
            console.log(lignes[i])
            $('#tableau').DataTable().row(lignes[i]).remove().draw();
        }
    }
    $("#modalSuppression").hide();
  });

  $("#fermerModal").click(function() {
    $("#modalSuppression").hide();
  });
  $("#fermerModalEdit").click(function() {
    $("#modalEdit").hide();
  });
  $("#closedModalSuppr").click(function() {
    $("#modalSuppression").hide();
  });
  $("#closedModalEdit").click(function() {
    $("#modalEdit").hide();
  });

  $("#closedModal").click(function() {
    $("#modalSuppression").hide();
  });


  $("#navNouveauTicket").click(function() {
    $("#pageListeTicket").hide();
    $("#pageNouveauTicket").show();
  });

  $("#navAccueil").click(function() {
    $("#pageListeTicket").show();
    $("#pageNouveauTicket").hide();
  })
});

/*Fonction qui permet de créer plusieurs objets en dur*/
function initialisationTickets() {
    var createdDate = new Date('2020,3,30');
    var date = createdDate.getDate() + '/' + createdDate.getMonth() + '/' + createdDate.getFullYear();
    var tick1 = new Ticket(1, 'Ticket100000', 'Lucas', 'Lewis', 'Manque package', 'Problème WINDOWS 10', date,'Non assigné', "Rodolphe");
    var tick2 = new Ticket(2, 'Ticket104578', 'Droza', 'Jessica', 'Besoin de droit', 'STP donne moi une bonne note',date,'Assigné', "Rodolphe");
    var tick3 = new Ticket(3, 'Ticket175455', 'Bagattin', 'Samuel', 'Besoin de droit', 'LAche ta meilleure note', date,'En cours', "Rodolphe");

    createdDate = new Date('2020,3,23');
    date = createdDate.getDate() + '/' + createdDate.getMonth() + '/' + createdDate.getFullYear();
    var tick4 = new Ticket(4, 'Ticket178855', 'Dasse', 'Hector', 'Impossible de se connecter', 'tu me mets un A je te paye une Pinte', date,'En cours', "Rodolphe");
    var tick5 = new Ticket(5, 'Ticket777777', 'Louvet', 'Hugo', 'Identifiant oublié', 'Manque package', 'je te donne un A... toi aussi', date,'Assigné', "Rodolphe");
    var tick6 = new Ticket(6, 'Ticket746899', 'Canario', 'Chris', 'CommentOnMetUnEspace', 'Manque package', 'Salut mon coquin, mon tel (06958515..)', date,'Closed', "Rodolphe");
    var tick7 = new Ticket(7, 'Ticket785456', 'Netto', 'Médéric', 'Mot de passe oublié', 'Manque package', 'si tu veux remanger raclette chez moi --> A', date,'Closed', "Rodolphe");
    var tick8 = new Ticket(8, 'Ticket175547', 'Peeters', 'Kévin', 'Impossible de se connecter', 'Salut j espère que tu profites bien de mon collègue Mede', date,'New', "Rodolphe");

    createdDate = new Date('2020,4,01');
    date = createdDate.getDate() + '/' + createdDate.getMonth() + '/' + createdDate.getFullYear();
    var tick9 = new Ticket(9, 'Ticket178800', 'Dideron', 'Solenne', 'Impossible de se connecter', 'j ai voté pour toi en délégué', date,'New', "Rodolphe");
    var tick10 = new Ticket(10, 'Ticket104578', 'Clain', 'Alexandre', 'Qqun peut me gratter le dos?', "On peut s'arranger si je paye mes chocos?",date,'Assigné', "Rodolphe");
    var tick11 = new Ticket(11, 'Ticket665445', 'Delouche', 'Rémi', "Besoin d'un café", 'Plutot chaud ce binome', date,'En cours', "Rodolphe");
    var tick12 = new Ticket(12, 'Ticket000159', 'GREG', 'Greg', 'Recette de la raclette', 'Je crois que tu veux me donner A', date,'En cours', "Rodolphe");

    mesTickets.push(tick1,tick2,tick3,tick4,tick5,tick6,tick7,tick8,tick9,tick10,tick11,tick12)
}

/*Fonction qui permet de*/
function loadTableau(tickets) {
    var lignes = document.getElementById('lines');
    tickets.forEach(ticket => {
        var newLigne = document.createElement('tr');
        newLigne.setAttribute('id',ticket.id)

        var id = document.createElement('td');
        var ticketNum = document.createElement('td');
        var nom = document.createElement('td');
        var titre = document.createElement('td');
        var date = document.createElement('td');
        var technicien = document.createElement('td');
        var status = document.createElement('td');
        var actions = document.createElement('td');

        details.push(ticket.id, ticket.ticketNum, ticket.nom, ticket.prenom, ticket.titre, ticket.description, ticket.date, ticket.technicien, ticket.status);

        id.innerHTML = ticket.id;
        id.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        ticketNum.innerHTML = ticket.ticketNum;
        ticketNum.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        nom.innerHTML = ticket.nom + " " + ticket.prenom;
        nom.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        titre.innerHTML = ticket.titre;
        titre.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        date.innerHTML = ticket.date;
        date.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        technicien.innerHTML = ticket.technicien;
        technicien.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        status.innerHTML = ticket.status;
        status.setAttribute('onclick','afficherModalDetail('+ticket.id + ' , "' + ticket.ticketNum+'" , "'+ ticket.nom +'", "'+ ticket.prenom + '", "' + ticket.titre + '", "' + ticket.description + '", "' + ticket.date + '", "' + ticket.technicien + '", "' + ticket.status+'")');
        actions.setAttribute('onclick','supprimerTicket("'+ticket.id+'")');
        actions.classList.add('text-center');
        actions.innerHTML = '<div id="deleteTicket" ><i class="fas fa-trash-alt"></i></div>';

        newLigne.appendChild(id);
        newLigne.appendChild(ticketNum);
        newLigne.appendChild(nom);
        newLigne.appendChild(titre);
        newLigne.appendChild(date);
        newLigne.appendChild(technicien);
        newLigne.appendChild(status);
        newLigne.appendChild(actions);

        lignes.appendChild(newLigne)
    });
}

function supprimerTicket(id){
  idCurrentTicket = id;
  $("#modalSuppression").show();
}

function afficherModalDetail(id, ticketNum, nom, prenom, titre, description, date, technicien, status){

  $("#inputId").val(id);
  $("#inputTicketNum").val(ticketNum);
  $("#inputTechnicien").val(technicien);
  $("#inputNom").val(nom);
  $("#inputPrenom").val(prenom);
  $("#inputTitre").val(titre);
  $("#inputDesc").val(description);
  $("#inputDate").val(date);
  $("#inputState").val(status);
  $("#modalEdit").show();
}
