document.addEventListener('DOMContentLoaded', function () {
    var adicionarCursoBtn = document.getElementById('adicionarCurso');
    var listaCursos = document.getElementById('listaCursos');
    var valorTotal = document.getElementById('valorTotal');
    var cursosSelecionados = [];
    var somaValores = 0;

    adicionarCursoBtn.addEventListener('click', function () {
        var selectCurso = document.getElementById('curso');
        var selectedOption = selectCurso.options[selectCurso.selectedIndex];
        var cursoNome = selectedOption.textContent;
        var cursoValor = parseFloat(selectedOption.getAttribute('data-valor'));

        // Verifica se o curso já foi selecionado
        if (cursosSelecionados.includes(cursoNome)) {
            alert('Esse curso já foi selecionado!');
            return;
        }

        // Adiciona o curso à lista de cursos selecionados
        cursosSelecionados.push(cursoNome);

        // Cria o elemento <li> com o nome do curso e o botão de remover
        var listItem = document.createElement('li');
        listItem.textContent = cursoNome;
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function () {
            // Remove o curso da lista de cursos selecionados
            var index = cursosSelecionados.indexOf(cursoNome);
            cursosSelecionados.splice(index, 1);

            // Remove o item da lista de cursos no DOM
            listItem.remove();

            // Subtrai o valor do curso do total
            somaValores -= cursoValor;
            valorTotal.textContent = 'R$' + somaValores.toFixed(2);
        });
        listItem.appendChild(removeButton);

        // Adiciona o item à lista de cursos no DOM
        listaCursos.appendChild(listItem);

        // Adiciona o valor do curso ao total
        somaValores += cursoValor;
        valorTotal.textContent = 'R$' + somaValores.toFixed(2);
    });
});
