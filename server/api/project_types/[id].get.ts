import { project_types } from '~/db/schema'
import { db } from '../sqlite-service'
import { eq } from 'drizzle-orm'
export default defineEventHandler(async (event) => {
    try {
        // get id as function parameter from route params
        const projectTypeId = event.context.params?.id as string
        const project_typesResp = db
            .select()
            .from(project_types)
            .where(eq(project_types.id, parseInt(projectTypeId)))
            .get()
        return { user: project_typesResp }
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        })
    }
})
