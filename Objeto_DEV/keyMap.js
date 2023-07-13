var KeyMap = {
    "Backspace":8,
    "Tab":9,
    "Ctrl":17,
    "Alt":18,
    "Delete":46
};

for (var chave in KeyMap) {
    // acessamos o objeto com o acessor do vetor para configurar o nome da função dinâmica
    KeyMap["is" + chave] = (function(comparador) {
        return function(ev) {
            var codigo = ev.keyCode || ev.which;
            return codigo === comparador;
        }
    })(KeyMap[chave]);
}

