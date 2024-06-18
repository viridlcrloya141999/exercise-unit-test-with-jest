// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87 // libra esterlina
};
// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; // Convertir dólares a euros
    let yenes = euros * oneEuroIs.JPY; // Convertir euros a yenes
    return yenes;
}
// Función para convertir de yenes a libras
function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY; // Convertir yenes a euros
    let pounds = euros * oneEuroIs.GBP; // Convertir euros a libras
    return pounds;
}
