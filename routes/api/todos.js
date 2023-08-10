const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

//INDEX INCOMPLETE//

router.get('/', todoCtrl.indexIncomplete, todoCtrl.jsonTodos)

//INDEX COMPLETE//

router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)

//DELETE//

router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)

//UPDATE//

router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)

//CREATE//

router.post('/', todoCtrl.create, todoCtrl.jsonTodo)

//SHOW

router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router