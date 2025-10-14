document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("aporteForm");
    const lista = document.getElementById("listaAportes");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const monto = document.getElementById("monto").value;
  
      if (!nombre || monto <= 0) {
        alert("Por favor completa correctamente todos los campos.");
        return;
      }
  
      const li = document.createElement("li");
      li.textContent = `${nombre} — Aporte: ${monto} Bs`;
  
      lista.appendChild(li);
      form.reset();
    });
  });
  