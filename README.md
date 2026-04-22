# ShioriApp - Landing Page & Promotional Website

Una landing page moderna y responsiva para ShioriApp, el lector de manga más ágil y personalizables disponible para Android.

## 🌟 Características

- **Interfaz Moderna**: Diseño inspirado en Material Design 3 con tema rojo protagonista
- **Totalmente Responsivo**: Funciona perfectamente en móvil, tablet y escritorio
- **Múltiples Secciones**:
  - Hero Section con mockup de teléfono
  - Características destacadas con iconos
  - Galería de capturas de pantalla
  - Blog con noticias y tutoriales
  - Página de comunidad y contacto
- **Rápido y Ligero**: Construido con React + Vite
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Conectividad Social**: Enlaces a Discord, GitHub, Twitter e Instagram

## 🚀 Stack Tecnológico

- **React 18** - Librería UI moderna
- **Vite** - Bundler rápido y moderno
- **React Router v6** - Enrutamiento de aplicación
- **TailwindCSS** - Framework CSS utility-first
- **Lucide React** - Iconos hermosos
- **PostCSS & Autoprefixer** - Procesamiento de CSS

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn (viene con Node.js)
- Terminal/Consola

## 🛠️ Instalación

### 1. Clonar o descargar el proyecto

```bash
# Si tienes git
git clone <tu-repositorio>
cd ShioriApp-Web

# O simplemente navega a la carpeta del proyecto
cd "c:\Users\Diego\Documents\DuocUc\Desarollo Fullstack III\ShioriApp-Web"
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:
- react y react-dom
- react-router-dom para navegación
- lucide-react para iconos
- tailwindcss, postcss y autoprefixer
- vite y plugins necesarios

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

### 4. Compilar para producción

```bash
npm run build
```

Esto generará una carpeta `dist/` lista para desplegar

### 5. Vista previa de producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
ShioriApp-Web/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Navegación principal
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── HeroSection.jsx  # Sección hero
│   │   ├── FeatureCard.jsx  # Tarjeta de característica
│   │   ├── ScreenshotCard.jsx
│   │   ├── BlogCard.jsx
│   │   └── SectionTitle.jsx
│   ├── pages/               # Páginas principales
│   │   ├── Home.jsx         # Página de inicio
│   │   ├── Gallery.jsx      # Galería de capturas
│   │   ├── Blog.jsx         # Lista de blog
│   │   ├── BlogPost.jsx     # Artículo individual
│   │   └── Community.jsx    # Página de comunidad
│   ├── data/                # Datos mock
│   │   ├── features.js      # Características
│   │   ├── screenshots.js   # Capturas de pantalla
│   │   ├── blog.js          # Artículos del blog
│   │   └── social.js        # Enlaces sociales
│   ├── styles/              # Estilos (si es necesario)
│   ├── App.jsx              # Componente principal con Router
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias
├── vite.config.js           # Config de Vite
├── tailwind.config.js       # Config de TailwindCSS
├── postcss.config.js        # Config de PostCSS
└── README.md                # Este archivo
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#TU_NUEVO_ROJO', // Cambiar el rojo principal
    600: '#TU_NUEVO_ROJO_OSCURO',
    // ...
  },
}
```

### Cambiar Enlaces Sociales

Edita `src/data/social.js`:

```javascript
export const socialLinks = [
  {
    id: 1,
    name: 'Discord',
    url: 'https://tu-servidor-discord.com', // Cambiar URL
    // ...
  },
  // ...
]
```

### Cambiar Email de Contacto

Edita `src/data/social.js`:

```javascript
export const contactEmail = 'tu-email@ejemplo.com'
```

### Agregar Características

Edita `src/data/features.js` para añadir más características que aparecerán automáticamente en la Home.

### Agregar Artículos al Blog

Edita `src/data/blog.js` para agregar nuevos artículos de blog.

### Agregar Capturas de Pantalla

Edita `src/data/screenshots.js` para agregar nuevas capturas (actualmente usa placeholders).

## 🌐 Desplegar

### Opción 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify

```bash
npm run build
# Sube la carpeta 'dist/' a Netlify
```

### Opción 3: GitHub Pages

Edita `vite.config.js`:

```javascript
export default defineConfig({
  base: '/ShioriApp-Web/', // Tu nombre de repositorio
  // ...
})
```

Luego:

```bash
npm run build
git add dist/
git commit -m "Build"
git push
```

## 📱 Características Responsivas

La aplicación está optimizada para:

- **Móvil**: 320px+ (iPhone SE, etc.)
- **Tablet**: 768px+ (iPad, etc.)
- **Desktop**: 1024px+ (Escritorio)

Usa Tailwind's responsive prefixes (sm:, md:, lg:, etc.)

## 🔧 Troubleshooting

### Error: "npm: comando no encontrado"

**Solución**: Instala Node.js desde https://nodejs.org/

### Puerto 5173 ya en uso

```bash
npm run dev -- --port 3000
```

### Cambios CSS no se aplican

- Limpia el caché: `Ctrl + Shift + Delete` en el navegador
- Reinicia el servidor `npm run dev`

## 📝 Notas Importantes

- Los placeholders de capturas de pantalla pueden reemplazarse con imágenes reales
- Los datos del blog están en formato mock (JSON) - escalable a CMS después
- El formulario de contacto está configurado para alert básico - implementar backend si es necesario
- Las URLs de descargas son placeholders - actualizar cuando Play Store esté disponible

## 🤝 Contribuciones

¿Quieres mejorar ShioriApp? Puedes:

- Sugerir mejoras en Discord
- Reportar errores en GitHub
- Enviar pull requests con mejoras
- Compartir feedback

## 📞 Contacto

- Email: shioriapp@gmail.com
- Discord: [Servidor Discord]
- GitHub: [Repositorio]
- Twitter: @shioriapp
- Instagram: @shioriapp

## 📄 Licencia

ShioriApp es de código abierto. Verifica la licencia específica en el repositorio.

## ✨ Próximas Mejoras Planeadas

- [ ] Integración con trackers (MyAnimeList, AniList)
- [ ] Versión web complementaria
- [ ] Blog conectado a CMS
- [ ] Estadísticas de usuario
- [ ] Formulario de contacto con backend
- [ ] Tema adaptativo (claro/oscuro dinámico)

---

**Versión**: 1.0.0  
**Última actualización**: Abril 2026  
**Desarrollado con ❤️ para la comunidad de manga**
