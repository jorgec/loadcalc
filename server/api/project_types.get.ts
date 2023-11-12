import { project_types } from '~/db/schema'
import { db } from './sqlite-service'

export default defineEventHandler(async () => {
    try {
        const project_typesResp = db.select().from(project_types).all()
        return { project_types : project_typesResp}
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        })
    }
})