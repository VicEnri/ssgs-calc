const readline = require('readline');
const { add, subtract, multiply, divide, power } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella calcolatrice!");

function showMenu() {
    console.log("\nOperazioni disponibili:");
    console.log("1. Addizione");
    console.log("2. Sottrazione");
    console.log("3. Moltiplicazione");
    console.log("4. Divisione");
    console.log("5. Potenza");
    console.log("6. Esci");
}

function handleOperation() {
    showMenu();
    rl.question("Seleziona un'operazione (1-6): ", (operation) => {
        if (operation === '6') {
            console.log("Grazie per aver usato la calcolatrice. Arrivederci!");
            rl.close();
            return;
        }

        if (!['1', '2', '3', '4', '5'].includes(operation)) {
            console.log("Operazione non valida. Riprova.");
            return handleOperation();
        }

        rl.question("Inserisci il primo numero: ", (num1) => {
            const a = parseFloat(num1);
            if (isNaN(a)) {
                console.log("Parametro non valido. Riprova.");
                return handleOperation();
            }

            rl.question("Inserisci il secondo numero: ", (num2) => {
                const b = parseFloat(num2);
                if (isNaN(b)) {
                    console.log("Parametro non valido. Riprova.");
                    return handleOperation();
                }

                let result;
                try {
                    switch (operation) {
                        case '1':
                            result = add(a, b);
                            break;
                        case '2':
                            result = subtract(a, b);
                            break;
                        case '3':
                            result = multiply(a, b);
                            break;
                        case '4':
                            result = divide(a, b);
                            break;
                        case '5':
                            result = power(a, b);
                            break;
                    }
                    console.log(`Risultato: ${result}`);
                } catch (error) {
                    console.log(error.message);
                }

                handleOperation();
            });
        });
    });
}

handleOperation();