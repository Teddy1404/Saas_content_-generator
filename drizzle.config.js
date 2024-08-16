<<<<<<< HEAD
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:fTABj5mJZb9W@ep-wild-bonus-a1tuja25.ap-southeast-1.aws.neon.tech/Ai-content-generator?sslmode=require',
    }
  };
=======
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
>>>>>>> 9ca0f02df6db654dc22344c37c876975fe210997
