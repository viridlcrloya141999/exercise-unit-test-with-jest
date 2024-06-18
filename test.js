
// Importar las funciones
const { fromDollarToYen, fromYenToPound } = require('./path_to_your_functions');

// Pruebas para fromDollarToYen
test('Convierte 10 dólares a yenes', () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62); // 10 dólares deberían ser aproximadamente 1462.62 yenes
});
Pruebas para fromYenToPound
// Pruebas para fromYenToPound
test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56); // 1000 yenes deberían ser aproximadamente 5.56 libras
});