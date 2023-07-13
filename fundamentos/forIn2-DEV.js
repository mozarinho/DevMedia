const pratos = [
    { id: 200, nome: "Talharim" },
    { id: 108, nome: "Bonoffee" },
    { id: 887, nome: "Pizza" },
];

const buscarPor = "Pizza";

for (const i in pratos) {
    if ( pratos[i].nome== buscarPor) {
        console.log(pratos[i].id);
    }
}