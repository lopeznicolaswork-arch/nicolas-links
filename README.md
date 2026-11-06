# Nicolás López Olivas — Portfolio Ejecutivo & Directivo (Nodux)

Sitio web personal y portfolio directivo de **Nicolás López Olivas** (CEO & Founder en **Nodux** · Preventa Técnica & Estrategia B2B).

Inspirado en la filosofía de diseño frontend moderna, táctil y lúdica de referentes como **Josh W. Comeau**: tipografía nítida, modos claro/oscuro fluidos, microinteracciones táctiles, microsonidos sintetizados y una arquitectura frontend 100% modular y desacoplada de datos.

---

## 🏛️ Arquitectura Distribuida del Proyecto

El proyecto dejó de ser un archivo HTML monolítico de +770 líneas y ahora sigue una arquitectura frontend limpia, escalable y centrada en diseño:

```
nicolas-links/
├── index.html                   # HTML base con fuentes de alta fidelidad y meta SEO
├── package.json                 # Scripts (dev, build, preview) y dependencias
├── vite.config.ts               # Bundler ultrarrápido con Vite y Tailwind CSS v4
├── tsconfig.json                # Configuración estricta de TypeScript
├── src/
│   ├── main.tsx                 # Entrada de React 19
│   ├── App.tsx                  # Layout orquestador con orbes de gradiente ambiental
│   ├── index.css                # Tailwind v4, modo oscuro (.dark), gradientes y animaciones
│   ├── types/                   # Tipos e interfaces de TypeScript
│   │   └── index.ts
│   ├── data/                    # 🎯 Capa de datos desacoplada (edición sin tocar JSX)
│   │   ├── profile.ts           # Bio, datos de contacto, enlaces y cargos
│   │   ├── metrics.ts           # Métricas ejecutivas y telemetría de tracción
│   │   ├── nodux.ts             # Pestañas interactivas y plataformas de Nodux
│   │   ├── podiums.ts           # Hackathons y podios nacionales (AWS, HP, IBM)
│   │   ├── leadership.ts        # Gobernanza y divulgación (IEEE, LEAD, CONEII)
│   │   ├── credentials.ts       # Becas y formación ejecutiva (Harvard, BCG, etc.)
│   │   └── experience.ts        # Trayectoria de campo, Sunedu y AIESEC
│   ├── components/              # 🧩 Componentes modulares de interfaz
│   │   ├── Navbar.tsx           # Barra flotante tipo glassmorphism con estado en vivo
│   │   ├── Hero.tsx             # Posicionamiento directivo, CTAs y tablero de telemetría
│   │   ├── NoduxSection.tsx     # Sección insignia en titanio con pestañas interactivas
│   │   ├── PodiumsSection.tsx   # Tarjetas de premios con efectos de confeti
│   │   ├── LeadershipSection.tsx# Sección de gobernanza y divulgación científica
│   │   ├── CredentialsSection.tsx # Grid de becas y credenciales internacionales
│   │   ├── ExperienceSection.tsx# Grid de trayectoria de campo y auditorías
│   │   ├── Footer.tsx           # Cita de cierre ejecutiva y navegación rápida
│   │   └── ui/                  # Componentes reutilizables de UI
│   │       ├── ThemeToggle.tsx  # Switch animado de modo claro/oscuro
│   │       ├── SoundToggle.tsx  # Switch de efectos de sonido Web Audio
│   │       └── Sparkles.tsx     # Destellos interactivos al estilo Josh W. Comeau
│   ├── hooks/
│   │   └── useTheme.ts          # Hook para gestión y persistencia de tema
│   └── utils/
│       ├── confetti.ts          # Efectos de celebración con canvas-confetti
│       └── sound.ts             # Microsonidos sintetizados sin dependencias externas
```

---

## 🚀 Cómo Ejecutar y Desarrollar

### 1. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL local indicada (ej. `http://localhost:5173`).

### 2. Compilar para producción (Build estático)
```bash
npm run build
```
Genera la carpeta optimizada `dist/` lista para desplegar en **Vercel**, **Netlify** o **GitHub Pages**.

### 3. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## ✏️ Cómo Actualizar el Contenido

Para añadir nuevos premios, plataformas o actualizar tus métricas, **no necesitas editar código JSX ni HTML**. Simplemente edita los archivos dentro de `src/data/`:

- **¿Nuevo podio o hackathon?** Añade un objeto en [`src/data/podiums.ts`](src/data/podiums.ts).
- **¿Nueva plataforma o producto de Nodux?** Actualiza [`src/data/nodux.ts`](src/data/nodux.ts).
- **¿Nuevas métricas de tracción?** Modifica [`src/data/metrics.ts`](src/data/metrics.ts).
- **¿Nuevas certificaciones o becas?** Agrega un elemento a [`src/data/credentials.ts`](src/data/credentials.ts).

---

## ✨ Características de Diseño Destacadas

- **Aura & Gradientes Táctiles (Josh W. Comeau style)**: Fondos con orbes sutiles de color difuso y gradientes caramelo de alto contraste.
- **Doble Modo (Dark & Light)**: Modo oscuro profundo por defecto para un porte ejecutivo de tecnología, conmutador con memoria en `localStorage`.
- **Micro-sonidos Web Audio**: Clicks y pops sintetizados directamente por el navegador (con botón de silencio accesible).
- **Efectos de Confeti**: Disparo de confeti al interactuar con premios o copiar enlaces.
- **Tipografía de Alta Jerarquía**: Combinación de `Outfit` (titulares), `Plus Jakarta Sans` (cuerpo) y `JetBrains Mono` (telemetría y código).
