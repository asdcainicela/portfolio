# Guía de Despliegue (GitHub Pages)

Este proyecto está configurado para desplegarse automáticamente a GitHub Pages cada vez que subas cambios a la rama `main`.

## Pasos para Desplegar

### 1. Guardar y Subir Cambios (Git)
Abre una terminal en la carpeta del proyecto y ejecuta estos comandos:

```bash
# 1. Agregar todos los cambios (incluyendo los fixes de 3D y Build)
git add .

# 2. Crear un commit con los cambios
git commit -m "fix: visibilidad 3D y errores de compilación para deploy"

# 3. Subir a GitHub
git push origin main
```

### 2. Verificar en GitHub Actions
Una vez que hagas el `push`:
1. Ve a tu repositorio en GitHub.
2. Haz clic en la pestaña **"Actions"**.
3. Verás un flujo llamado **"Deploy to GitHub Pages"** ejecutándose. Espera a que termine (debe aparecer un check verde ✅).

### 3. Configuración de GitHub Pages (Solo la primera vez)
Si es la primera vez que despliegas:
1. Ve a **Settings** (Configuración) de tu repositorio.
2. En el menú de la izquierda, selecciona **Pages**.
3. En la sección **"Build and deployment"**:
   - **Source**: Debe decir "Deploy from a branch".
   - **Branch**: Selecciona `gh-pages` (esta rama se crea automáticamente después del primer despliegue exitoso) y la carpeta `/(root)`.
4. Haz clic en **Save**.

### 4. Ver tu Web
GitHub te dará un link arriba en la misma sección de **Pages** (ejemplo: `https://asdcainicela.github.io/portfolio/`).

---

## Notas Técnicas
- **Base Path**: El proyecto está configurado en `vite.config.ts` con `base: '/portfolio/'`. Si cambias el nombre del repositorio, asegúrate de actualizar ese valor.
- **Build Automático**: El archivo `.github/workflows/deploy.yml` se encarga de instalar dependencias y construir el sitio antes de publicarlo.
