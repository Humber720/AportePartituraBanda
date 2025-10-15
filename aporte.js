document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("aporteForm");
  const lista = document.getElementById("listaAportes");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const curso = document.getElementById("curso").value.trim();
    const monto = document.getElementById("monto").value.trim();

    if (!nombre || !curso || monto <= 0) {
      alert("Por favor completa correctamente todos los campos.");
      return;
    }

    // Mostrar en pantalla
    const li = document.createElement("li");
    li.textContent = `${nombre} — ${curso} — Aporte: ${monto} Bs`;
    lista.appendChild(li);

    // Enviar a tu hoja Excel (SheetBest)
    const url = "https://api.sheetbest.com/sheets/3f5fcdb4-4a15-42cb-a7ad-4c81b8a144ae";
    const data = {
      Nombre: nombre,
      Curso: curso,
      Aporte: monto,
      Fecha: new Date().toLocaleString("es-BO")
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log("Datos guardados en la hoja correctamente ✅");
        form.reset();
      } else {
        alert("⚠️ Error al guardar los datos en la hoja.");
      }
    } catch (error) {
      alert("❌ No se pudo conectar a la hoja Excel.");
      console.error(error);
    }
  });
});
