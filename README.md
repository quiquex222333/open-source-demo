# Presentacion: CI/CD + Testing

Repositorio para una charla/demo sobre calidad continua en open source.

Contiene dos partes:

1. Demo en Node.js con funciones simples en `src/`.
2. Presentacion en Slidev dentro de `slidev/`.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior (recomendado)

## Estructura

```text
presentacion/
├── src/
│   ├── index.js
│   └── calculator.js
├── slidev/
│   ├── slides.md
│   ├── components/
│   ├── snippets/
│   └── package.json
├── package.json
└── README.md
```

## Uso rapido

### 1) Demo Node.js

Instalar dependencias del proyecto raiz:

```bash
npm install
```

Ejecutar demo:

```bash
npm run dev
```

Salida esperada (resumen):

- `suma de 2 + 3 es: 5`
- `Descuento de 100 con 20% es: 80`

### 2) Presentacion Slidev

Entrar a la carpeta de la presentacion e instalar dependencias:

```bash
cd slidev
npm install
```

Levantar modo desarrollo:

```bash
npm run dev
```

Compilar para produccion:

```bash
npm run build
```

Exportar (PDF/estatico, segun configuracion local de Slidev):

```bash
npm run export
```

Mas detalle en [slidev/README.md](./slidev/README.md).

## Scripts disponibles

### Raiz (`package.json`)

- `npm run dev`: ejecuta `node src/index.js`
- `npm test`: script placeholder (aun no hay pruebas configuradas)

### Slidev (`slidev/package.json`)

- `npm run dev`: inicia Slidev con apertura automatica del navegador
- `npm run build`: genera `slidev/dist`
- `npm run export`: exporta la presentacion

## Nota tecnica

La demo de `src/` esta unificada en CommonJS:

- `src/index.js` usa `require`
- `src/calculator.js` usa `module.exports`

Con esto, `npm run dev` ya no muestra el warning de `MODULE_TYPELESS_PACKAGE_JSON`.

## Despliegue de la presentacion

La carpeta `slidev/` ya incluye configuraciones para hosting estatico:

- `vercel.json`
- `netlify.toml`

Ambas usan `npm run build` y publican desde `dist`.

## Licencia

ISC
