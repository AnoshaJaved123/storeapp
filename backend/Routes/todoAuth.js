const { RestartProcess } = require('concurrently')
const express= require('express')
const router = express.Router()
const Todo = require('../Modules/Todo')


router.post('/createtodo',
async (req,res) => {
   try {
    const sign = await Todo.create({
        email: req.body.email,
        todoid:req.body.todoid,
        todo: req.body.todo,

    })
    res.json(sign)
} catch (error) {
    // console.log('file not uploaded')
    console.log(error.message)
    return res.status(500).json('Internal server error')
}
})


//Route 2

router.get('/fectchtodo',
async (req,res)=>{
    try {
        const gettodo = await Todo.find({})
        res.json(gettodo)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json("internal server error")
        
    }
    
})

router.get('/fetchtodo/:id',
async (req,res) =>{
    try {
        const serchitem = await Todo.findById(req.params.id)
        if (!serchitem) {
            return res.status(400).json('not found')
        }
        // serchitem = await Item.find()
        res.json(serchitem);   
     } 
        
        catch (error) {
        console.log(error.message)
        return res.status(500).json('internal server error')
    }
}
)

//Route 3

router.delete('/deletetodo/:id',
async (req,res)=>{
    try {
        let tododel = await Todo.findById(req.params.id)

        if (!tododel) {
            return res.status(400).json("not found")
        }
        tododel = await Todo.findByIdAndDelete(req.params.id)
        res.json({ "Success": "item has been deleted", tododel: tododel });
    } catch (error) {
        console.log(error.message)

return res.status(500).json('internal server error')
    }
}
)



module.exports = router;