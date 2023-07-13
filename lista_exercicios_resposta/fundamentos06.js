function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(`R$ ${jurosSimples(1000, 8/100, 12)}`);
jurosComp = jurosCompostos(1000, 0.08, 12)
console.log(`R$ ${jurosComp.toFixed(2).toString().replace(".", ",")}`);
