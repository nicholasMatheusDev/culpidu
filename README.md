# culpidu

## Desenvolvimento

Requer Node 24 (ver `.nvmrc`).

```bash
npm ci
npm run lint
npm test
npm start
```

O servidor ouve em `PORT` (padrão 3000) e expõe `GET /health`.

## CI/CD

O workflow `.github/workflows/ci-cd.yml` roda no GitHub Actions:

| Evento | Lint e testes | Build da imagem | Publica no GHCR | Tags da imagem |
|---|---|---|---|---|
| Pull request | sim | sim | não | — |
| Push na `main` | sim | sim | sim | `latest`, `sha-<commit>` |
| Tag `vX.Y.Z` | sim | sim | sim | `X.Y.Z`, `X.Y`, `sha-<commit>` |

A imagem fica em `ghcr.io/nicholasmatheusdev/culpidu`.