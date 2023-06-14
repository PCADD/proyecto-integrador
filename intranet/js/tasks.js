document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los selects de estado y formularios de comentarios
  const statusSelects = document.querySelectorAll(".status-select");
  const commentForms = document.querySelectorAll(".add-comment-form");

  // Función para cambiar el estado de la tarea
  function changeStatus(event) {
    const status = event.target.value;
    const cardFooter = event.target.parentNode.parentNode.parentNode;
    const statusLabel = cardFooter.querySelector(".status-label .status");
    statusLabel.textContent = status;
  }

  // Función para agregar un comentario
  function addComment(event) {
    event.preventDefault();
    const commentTextarea = event.target.querySelector(".form-control");
    const commentText = commentTextarea.value.trim();

    if (commentText !== "") {
      const commentList =
        event.target.parentNode.querySelector(".comment-list");
      const comment = document.createElement("div");
      comment.classList.add("comment");
      comment.innerHTML = `
          <p class="comment-text">${commentText}</p>
          <p class="comment-date">${getCurrentDateTime()}</p>
        `;
      commentList.appendChild(comment);
      commentTextarea.value = "";
    }
  }

  // Obtener la fecha y hora actual
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  // Asignar eventos a los selects de estado y los formularios de comentarios
  for (let i = 0; i < statusSelects.length; i++) {
    statusSelects[i].addEventListener("change", changeStatus);
  }

  for (let i = 0; i < commentForms.length; i++) {
    commentForms[i].addEventListener("submit", addComment);
  }
});
