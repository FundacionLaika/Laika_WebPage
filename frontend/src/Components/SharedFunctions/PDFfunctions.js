export function formatDate(fecha) {
    return fecha.substr(8,2) + "-" + fecha.substr(5,2) + "-" + fecha.substr(0,4);
}

export function boolToString(booleano) {
    return booleano ? "Sí" : "No"
}