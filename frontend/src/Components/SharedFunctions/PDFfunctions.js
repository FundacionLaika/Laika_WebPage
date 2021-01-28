export function formatDate(fecha) {
    return fecha && fecha !== "0000-00-00" ? fecha.substr(8,2) + "-" + fecha.substr(5,2) + "-" + fecha.substr(0,4) : "No hay información";
}

export function boolToString(booleano) {
    return booleano ? "Sí" : "No";
}

export function validInfo(word) {
    return word ? word : "No hay información";
}