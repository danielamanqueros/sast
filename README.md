# Práctica 2: Análisis estático de seguridad (SAST)

## Archivos
- `.github/workflows/sast.yml`: flujo de GitHub Actions que ejecuta CodeQL para JavaScript/TypeScript.
- `vulnerable.js`: ejemplo didáctico con una vulnerabilidad intencional (uso inseguro de `innerHTML`).
- `index.html`: página opcional para abrir el ejemplo localmente.

## Uso
1. Sube esta carpeta a un repositorio de GitHub.
2. Conserva `sast.yml` en `.github/workflows/`.
3. Haz push a la rama `main`.
4. Revisa la pestaña **Actions**.
5. Revisa **Security → Code scanning** si está disponible en el repositorio.

Nota: que CodeQL termine correctamente no garantiza que detecte una alerta para cada ejemplo. La detección depende de las reglas y del contexto del código. Este ejemplo es solo para práctica local y educativa.
