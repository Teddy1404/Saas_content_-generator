import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:iB12eMqaPvDS@ep-delicate-tree-a5d3iely.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
  verbose: true,
  strict: true,
})