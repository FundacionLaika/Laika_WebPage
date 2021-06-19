import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import "./Styles/Calendario.css";

require("moment/locale/es.js");

const localizer = momentLocalizer(moment);

async function fetchEvents() {
	var response = await fetch("https://fundacionlaika.herokuapp.com/events", {
		method: "get",
		headers: { "Content-Type": "application/json" },
	});

	if (response.status !== 200) return [];
	var events = await response.json();

	return events;
}

function generateEvent(message, animalId, animalName, date) {
	const eventDate = new Date(date);
	eventDate.setHours(12,0,0,0);
	const generatedEvent = {
		title: message + animalName + " (ID: " + animalId + ")",
		start: eventDate,
		end: eventDate,
	};
	return generatedEvent;
}

function decodeEvents(encodedEvents) {
	if (!encodedEvents) return;

	const decoder = {
		FechaRescate: "Se rescato a ",
		FechaEsterilizacion: "Se esterilizo a ",
		FechaInicioHT: "Inicio de Hogar Temporal de ",
		FechaFinalHT: "Fin de Hogar Temporal de ",
		VisitaAdopcion: "Se realizo visita de adopcion a ",
		FechaAdopcion: "Se adopto a ",
		FechaVacuna1: {
			Canino: "Puppy",
			Felino: "Triple Viral Felina",
			Otro: "Vacuna 1",
		},
		FechaVacuna2: {
			Canino: "Refuerzo Puppy",
			Felino: "Refuerzo Triple Viral Felina",
			Otro: "Vacuna 2",
		},
		FechaVacuna3: {
			Canino: "Multiple",
			Felino: "Leucemia",
			Otro: "Vacuna 3",
		},
		FechaVacuna4: {
			Canino: "Refuerzo Multiple",
			Felino: "Desparasitacion",
			Otro: "Vacuna 4",
		},
		FechaVacuna5: {
			Canino: "Rabia",
			Felino: "Rabia",
			Otro: "Vacuna 5",
		},
	};

	var eventsList = [];

	encodedEvents.forEach((animal) => {
		const animalId = animal["ID_Animal"];
		const animalName = animal["Nombre"];
		const animalSpecie = animal["Especie"];

		for (const event in animal) {
			const eventDate = animal[event];
			if (!eventDate) continue;

			if (
				event === "ID_Animal" ||
				event === "Nombre" ||
				event === "Especie"
			)
				continue;

			if (event.includes("FechaVacuna")) {
				if (!decoder[event]) continue;

				const vacuna = decoder[event][animalSpecie];

				const generatedEvent = generateEvent(
					"Se aplico vacuna " + vacuna + " a ",
					animalId,
					animalName,
					eventDate
				);
				eventsList.push(generatedEvent);
			} else if (event === "CitasMedicas") {
				const citasMedicas = eventDate.split(",");
				citasMedicas.forEach((citaMedica) => {
					const generatedEvent = generateEvent(
						"Cita medica de ",
						animalId,
						animalName,
						citaMedica
					);
					eventsList.push(generatedEvent);
					console.log(generatedEvent);
				});
			} else {
				if (!decoder[event]) continue;
				const generatedEvent = generateEvent(
					decoder[event],
					animalId,
					animalName,
					eventDate
				);
				eventsList.push(generatedEvent);
			}
		}
	});

	return eventsList;
}

function Calendario(props) {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const eventsData = await fetchEvents();

			const eventList = decodeEvents(eventsData);

			setEvents(eventList);
		}
		fetchData();
	}, [props]);

	return (
		<div className="calendarComponent">
			<div className="calendario bigCalendar-container">
				<Calendar
					popup
					localizer={localizer}
					events={events}
					defaultDate={new Date()}
				/>
			</div>
		</div>
	);
}

export default Calendario;
