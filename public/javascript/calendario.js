document.addEventListener("DOMContentLoaded", function () {
    var calendar = document.getElementById("calendar");
    var eventDetails = document.getElementById("event-details");
    var eventTitle = document.getElementById("event-title");
    var eventDescription = document.getElementById("event-description");
    var eventTime = document.getElementById("event-time");
    var eventRoom = document.getElementById("event-room");

    var date = new Date();
    var year = date.getFullYear();
    var month = 8; // Lembrando que o mês de setembro é representado pelo número 8 (janeiro é 0, fevereiro é 1, etc.)

    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();

    var header = "<tr><th>Domingo</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th><th>Sábado</th></tr>";
    var body = "";

    var dayCount = 1;

    for (var i = 0; i < 6; i++) {
        body += "<tr>";

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                body += "<td></td>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                var isToday = (year === date.getFullYear() && month === date.getMonth() && dayCount === date.getDate());
                var isEventDay = (dayCount >= 8 && dayCount <= 12);

                body += "<td" + (isToday ? " class='today'" : "") + (isEventDay ? " class='event-day'" : "") + " data-day='" + dayCount + "'>" + dayCount + "</td>";
                dayCount++;
            }
        }

        body += "</tr>";
    }

    calendar.innerHTML = "<table id='calendar'>" + header + body + "</table>";

    var eventDays = document.querySelectorAll("#calendar td.event-day");
    eventDays.forEach(function (day) {
        day.addEventListener("click", function () {
            var clickedDay = this.getAttribute("data-day");
            var eventTitleText = "Programação do Evento - Dia " + clickedDay;
            var eventDescriptionText = "Descrição da atividade do evento no dia " + clickedDay + ".";
            var eventTimeText = "Horário: 14:00 - 16:00";
            var eventRoomText = "Sala: Sala A";

            eventTitle.textContent = eventTitleText;
            eventDescription.textContent = eventDescriptionText;
            eventTime.textContent = eventTimeText;
            eventRoom.textContent = eventRoomText;

            eventDetails.style.display = "block";
        });
    });
});
