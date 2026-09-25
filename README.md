
# Next.js

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Next.js](https://nextjs.org/) apps in minutes. Use this repo with the [Next.js tutorial](https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs) to build and customize a new static site.

This repo can be used as starter Next.js application for testing basic Next.js features.

## Node 22 compatibility

This legacy fixture targets Node 22. When loaded during builds or server startup,
`next.config.js` unconditionally maps `crypto.createHash("md4")` to SHA256 because
Next11's bundled webpack uses MD4, which is unavailable with OpenSSL 3. The override
affects every MD4 caller in that process, not just webpack. Keep this workaround
isolated to this fixture: it changes digest values and lengths, does not provide
cryptographic MD4 compatibility, and is not a platform change.

## Running locally

To run locally, open the development server with the following command:

```bash
npm run dev
```

Next, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

For a more rich local development experience, refer to [Set up local development for Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/local-development).
