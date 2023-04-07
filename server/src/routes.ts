import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from 'fastify'

function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) {
  fastify.register(import('./features/games/gamesRoutes'), {
  prefix: '/games',
  })
 // fastify.register(import('./features/user/userRoutes'), {
   // prefix: '/user',
  //})
  //fastify.register(import('./features/usersExp/usersExpRoutes'), {
    //prefix: '/usersExp',
  //})
  done()
}

export default routes
