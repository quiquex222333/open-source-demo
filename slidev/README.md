# Presentacion en Slidev

Presentacion principal del proyecto: **CI/CD + Testing**.

Archivo base de contenido: `slides.md`.

## Requisitos

- Node.js 20+
- npm 10+ (recomendado)

## Instalacion

Desde esta carpeta (`slidev/`):

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

- Inicia Slidev en modo desarrollo.
- Abre automaticamente el navegador.
- URL por defecto: `http://localhost:3030`.

## Build para produccion

```bash
npm run build
```

Genera los archivos estaticos en `dist/`.

## Exportar presentacion

```bash
npm run export
```

Nota: la exportacion puede requerir dependencias extra del sistema segun tu entorno (por ejemplo, para renderizado de PDF).

## Estructura relevante

```text
slidev/
├── slides.md                 # Contenido principal
├── components/Counter.vue    # Componente de ejemplo
├── snippets/external.ts      # Snippet de ejemplo
├── pages/imported-slides.md  # Referencia de import de slides
├── vercel.json               # Config para Vercel
├── netlify.toml              # Config para Netlify
└── package.json
```

## Despliegue

Ya existe configuracion para deploy estatico en:

- Vercel (`vercel.json`)
- Netlify (`netlify.toml`)

En ambos casos, comando de build: `npm run build`, directorio de salida: `dist`.
