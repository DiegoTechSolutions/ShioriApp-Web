# 🚀 GUÍA DE INICIO RÁPIDO - ShioriApp Landing Page

## ¿Primer Paso? Instala Node.js

Si aún no tienes Node.js, descárgalo desde:
👉 https://nodejs.org/ (Descarga la versión LTS)

Verifica la instalación:
```
node --version
npm --version
```

## 📝 Pasos para Ejecutar

### 1. Abre la Terminal/PowerShell

En Windows:
- Presiona `Win + R`
- Escribe `cmd` y presiona Enter
- O abre PowerShell directamente

### 2. Navega a la carpeta del proyecto

```
cd "c:\Users\Diego\Documents\DuocUc\Desarollo Fullstack III\ShioriApp-Web"
```

### 3. Instala las dependencias

```
npm install
```

⏳ **Espera** - Esto descargará ~500MB de archivos (solo la primera vez)

### 4. Inicia el servidor de desarrollo

```
npm run dev
```

✅ **Listo** - Tu navegador abrirá automáticamente: http://localhost:5173

## 🎯 Esto es lo que verás:

- **Navbar sticky** con logo y menú navegable
- **Hero Section** con mockup de teléfono animado
- **Características** en tarjetas con iconos
- **Galería** de screenshots (placeholders)
- **Blog** con noticias y tutoriales
- **Comunidad** con formulario de contacto
- **Footer** con enlaces a redes sociales

## 🛠️ Otros Comandos Útiles

```bash
# Parar el servidor (en la terminal)
Ctrl + C

# Compilar para producción
npm run build

# Ver el build compilado localmente
npm run preview

# Instalar una nueva dependencia (ejemplo: axios)
npm install axios
```

## 🌐 Acceder desde otro dispositivo

Si quieres ver la página en tu teléfono mientras desarrollas:

```bash
# En la terminal, cuando corra "npm run dev", busca la línea:
# Local:   http://localhost:5173
# Network: http://192.168.X.X:5173
```

Abre ese URL de Network en tu teléfono

## 🎨 Personaliza Rápidamente

### Cambiar el color rojo principal:

Edita `tailwind.config.js`, línea ~15:
```javascript
primary: {
  500: '#tu-nuevo-color', // Cambiar este
}
```

### Cambiar links de redes sociales:

Edita `src/data/social.js`:
```javascript
export const socialLinks = [
  {
    url: 'tu-link-discord',
    // ...
  },
]
```

### Cambiar email de contacto:

Edita `src/data/social.js`:
```javascript
export const contactEmail = 'tu-email@gmail.com'
```

## 📱 Testing en Dispositivos

### Móvil:
- Abre la URL de Network en tu teléfono
- Usa Chrome DevTools (F12) → Toggle device toolbar

### Tablet:
- En Chrome DevTools → Selecciona iPad

### Desktop:
- Tu pantalla actual

## ⚠️ Problemas Comunes

**Error: "npm: comando no encontrado"**
→ Reinstala Node.js desde nodejs.org

**Error: "Puerto 5173 ya en uso"**
→ Ejecuta: `npm run dev -- --port 3000`

**Los cambios CSS no se ven**
→ Recarga: Ctrl + Shift + R (hard reload)

**El proyecto es lento**
→ Cierra otras aplicaciones pesadas (Chrome con muchas pestañas, etc.)

## ✨ Próximas Acciones

1. **Integra tu logo** (reemplaza `S` en Navbar.jsx)
2. **Descarga real del APK** (actualiza URL en HeroSection.jsx)
3. **Agrega capturas reales** (reemplaza placeholders con screenshots)
4. **Personaliza colores** (ajusta rojo si lo deseas)
5. **Sube a producción** (Vercel, Netlify o GitHub Pages)

## 🚀 Listo para Producción

Cuando quieras desplegar:

```bash
npm run build
```

Esto crea una carpeta `dist/` con tu sitio compilado y optimizado.

Sube `dist/` a:
- **Vercel**: https://vercel.com (recomendado)
- **Netlify**: https://netlify.com
- **GitHub Pages**: Tu repositorio GitHub

## 📚 Recursos Útiles

- React: https://react.dev
- TailwindCSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com
- Lucide Icons: https://lucide.dev

## 💬 ¿Problemas?

1. Revisa el README.md para más detalles
2. Busca en Google el error exacto
3. Verifica que Node.js esté actualizado
4. Prueba: `npm install` de nuevo

---

**¡Ya está todo listo para que comiences a desarrollar!** 🎉

Si tienes dudas, siempre puedes volver a revisar este archivo.
