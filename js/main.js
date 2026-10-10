// =====================================================================
// Rutana – Landing page scripts
// Parte asignada: TESTIMONIALS + FOOTER.
// Aquí solo se incluye el script del año del footer.
// El resto (menú hamburguesa, sombra del header, enlace activo) se
// agrega junto con la feature branch del header.
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Año en el footer ----------
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});