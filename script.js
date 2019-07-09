/**
 * Função de ordenação do Brendon Hudson para arrays com objetos JavaScript
 * 
 * @param idProp é o id da propriedade usada para ordenar o vetor
 * @author Brendon Hudson
 */
const hudSort = (idProp) => {

}


/**
 * Controlador principal que é executado quando todos os componentes da página terminarem de carregar.
 */
window.onload = function () {

  let listEl = document.getElementById("list");
  let listIdPropEl = document.getElementById("listId");
  let sortButtonEl = document.getElementById("listSortButton");
  let resultEl = document.getElementById("result");

  // Ouve os cliques no botão de ordenar
  sortButtonEl.addEventListener("click", () => {

    // Transformo o JSON de entrada em objeto JS
    const list = JSON.parse(listEl.value);

    // Se não preencher o campo, adotar _id como sendo padrão
    if (listIdPropEl.value.length < 1) {
      listIdPropEl.value = '_id';
    }

    // Ordeno a entrada do usuário
    list.sort((a, b) => {
      if (a[listIdPropEl.value] < b[listIdPropEl.value]) {
        return -1;
      }
      else if (a[listIdPropEl.value] > b[listIdPropEl.value]) {
        return 1;
      }
      else { // Se forem iguais, desempatar pelo timestamp de criação (o mais antigo primeiro)
        if (a['data']['timestamp'] < b['data']['timestamp']) {
          return -1;
        }
        else if (a['data']['timestamp'] > b['data']['timestamp']) {
          return 1;
        }
        else {
          return 0;
        }
      }
    })

    // Imprimo o resultado
    resultEl.innerHTML = JSON.stringify(list, undefined, 2);
    // result.map(
    //   item => resultEl.innerHTML = resultEl.innerHTML + `<li class="list-group-item">${item}</li>`
    // );

  });
}