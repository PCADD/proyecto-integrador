document.getElementById("buscarBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Obtener el valor del campo de búsqueda
  let searchTerm = document.getElementById("form1").value.trim();

  // Obtener todas las filas de la tabla de tareas
  let rows = document.querySelectorAll(".table tbody tr");

  // Iterar sobre las filas y mostrar solo las que coincidan con el término de búsqueda
  rows.forEach(function (row) {
    let id = row.querySelector("th").textContent.trim();
    let prioridad = row.querySelector("td:nth-child(4)").textContent.trim();

    if (id === searchTerm || prioridad === searchTerm) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
