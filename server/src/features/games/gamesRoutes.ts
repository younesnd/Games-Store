import {FastifyInstance, FastifyPluginOptions, HookHandlerDoneFunction} from 'fastify'

import {getGames,getGame} from './gamesController'

function userRoutes( fastify: FastifyInstance, opts: FastifyPluginOptions, done: HookHandlerDoneFunction) {
    fastify.get('/:surname', getGame)
    fastify.get('/all',getGames)
    //fastify.post('/', { schema: registerUserSchema }, registerUser)
    //fastify.post('/reset', resetUsers)
    //fastify.delete('/:id', deleteUser)
    done()
  }
  
  export default userRoutes
  