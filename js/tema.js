// Modo oscuro: activa o desactiva css/dark.css al pulsar el botón de la navbar
const boton = document.getElementById('btn-theme');
const darkTheme = document.getElementById('dark-theme');

// Al cargar la página, si antes se eligió el modo oscuro, se vuelve a activar
if (localStorage.getItem('tema') === 'oscuro') {
  darkTheme.disabled = false;
  boton.textContent = 'Modo claro';
}

boton.addEventListener('click', () => {
  // Invierte el estado: si está deshabilitado lo habilita, y viceversa
  darkTheme.disabled = !darkTheme.disabled;
  // Cambia el texto del botón según el modo
  boton.textContent = darkTheme.disabled ? 'Modo oscuro' : 'Modo claro';
  // Guarda la elección para que se mantenga en las demás páginas
  localStorage.setItem('tema', darkTheme.disabled ? 'claro' : 'oscuro');
});
