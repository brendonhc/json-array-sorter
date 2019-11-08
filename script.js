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
    list.sort((a,b) => a[listIdPropEl.value] < b[listIdPropEl.value] ? -1 : 1)

    // Imprimo o resultado
    resultEl.innerHTML = JSON.stringify(list, undefined, 2);
  });
}
