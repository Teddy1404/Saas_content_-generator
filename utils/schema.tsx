import { pgTable, serial, varchar,text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
<<<<<<< HEAD
    formData:varchar('formData').notNull(),
=======
    FormData:varchar('formData').notNull(),
>>>>>>> 9ca0f02df6db654dc22344c37c876975fe210997
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')

})