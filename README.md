# Café Ancona - Menú Digital Interactivo | Café & Galería de Arte

Menú digital web de alta estética para **Café Ancona** (Café & Galería de Arte). Diseñado en HTML5, CSS3 y JavaScript vanilla.

## Características Principales

1. **Marco de Piedra Volcánica (Basalto / Recinto Mexicano):**
   - Marco perimetral continuo y poroso (`assets/marco_piedra_volcanica.png`), inspirado en la arquitectura tradicional de cantera y basalto volcánico.
   - Sombreado de profundidad y relieve biselado optimizado para dispositivos móviles y escritorio.

2. **Fondo de Lienzo al Óleo (Preservado):**
   - Textura táctil de lienzo de lino (`assets/canvas_texture.svg`) con iluminación cenital de foco de galería (`.gallery-lighting-layer`).

3. **Tarjetas con Efecto Glassmorphism:**
   - Acabado de vidrio esmerilado translúcido (`backdrop-filter: blur(14px) saturate(150%)`).
   - Refracta suavemente la textura del lienzo inferior, con bordes de luz blanca y sutiles tonos botánicos al pasar el cursor.

4. **Identidad Tipográfica Oficial de Café Ancona:**
   - Estructura fiel a su letrero físico exterior:
     - `CAFÉ` centrado superior con serifa espaciada (`tracking-[0.34em]`).
     - `ANCONA` en mayúsculas romanas clásicas monumentales (`Cinzel` peso 900, `tracking-[0.14em]`).
     - Filete divisorio fino en verde salvia.
     - `CAFÉ & GALERÍA DE ARTE` en sans-serif extendido.
   - Flanqueado por ramas botánicas de olivo/laurel (`assets/ramita_botanica.svg`), tal como en el caballete de exhibición en la entrada.

5. **Acentos en Verde Botánico y Categoría "Bocados del Jardín":**
   - Paleta inspirada en su caballete exterior (`#1e3b2b`, `#2d5438`, `#385945`, `#eef5f0`).
   - Categorías botánicas con sección "Bocados del Jardín", "Matcha & Tés", "Café de Especialidad" y "Galería de Arte".

6. **Sección Administrable de Exposiciones de Arte:**
   - Sección dedicada **"Exposiciones"** totalmente dinámica: se pueden agregar, editar o retirar exposiciones simplemente modificando las filas en Google Sheets o en `DEFAULT_MENU_ROWS` (cambiando `estado` a `'activo'` o `'inactivo'`).
   - **Video único en la primera exposición:** Cumple con la directriz de mantener un único video estelar en la primera obra/evento (documental de taller en formato 16:9 con reproductor lightbox de teatro) para no sobrecargar la conexión de los dispositivos móviles.
   - **Carteles oficiales en alta definición:** Las demás exposiciones exhiben sus carteles y obras originales (como las muestras de *Emmanuel Paloméc* y *Gabriel Acosta*), con botón para expandir el cartel en pantalla completa y consultar fechas, músicos invitados y detalles de inauguración.

7. **Serpiente Emplumada Ondulante:**
   - Recorre suavemente el encabezado de derecha a izquierda debajo de los títulos en un bucle armónico.
   - Animación cinemática en Canvas 2D sin estelas ni distracciones.

8. **Encabezado Inteligente (Smart Header):**
   - Se repliega al deslizar hacia abajo para maximizar la lectura del menú, y se despliega al volver a subir.
