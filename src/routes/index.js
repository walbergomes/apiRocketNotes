const { Router } = require("express");

const userRouter = require('./users.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')
const sessionsRouter = require('./sessions.routes')

const routes = Router()
routes.use("/users", userRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/sessions", sessionsRouter)

module.exports = routes