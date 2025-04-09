import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.redirect("https://www.maretol.xyz", 308)
})

export default app
