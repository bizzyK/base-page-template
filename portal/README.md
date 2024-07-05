# Portal

This project uses Node 20.x

### Install
Run the following to set up the application locally:
```bash
yarn install
```

### Build
```bash
yarn build
```

### Development Mode

Create a `.env.local` that looks like the following:
```
DIRECTUS_URL=http://placeholder
DIRECTUS_STATIC_TOKEN=your-static-token
```
Then run
```bash
yarn dev
```
Open the following:
`http://localhost:3000/sld30`
`http://localhost:3000/hha`

### Unit tests
```bash
yarn test
```

### Lint
```bash
yarn lint
```
