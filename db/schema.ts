import {type InferModel, sql} from 'drizzle-orm'
import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core'

export const project_types = sqliteTable('project_types', {
    id: integer('id').primaryKey(),
    name: text('name'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export type ProjectType = InferModel<typeof project_types>;
export type InsertProjectType = InferModel<typeof project_types, 'insert'>;