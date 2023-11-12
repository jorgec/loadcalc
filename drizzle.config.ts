import type { Config } from 'drizzle-kit'

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    driver: 'better-sqlite',
    dbCredentials: {
        url: './loadcalc.db',
    },
} satisfies Config