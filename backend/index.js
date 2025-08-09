const express = require("express");
const app = express();
const { createTodoSchema, updateTodoSchema } = require('./types')
const { todo } = require("./db")
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res)=>{
    const response = createTodoSchema.safeParse(req.body);
    if(!response.success){
        return res.status(403).json({
            msg: "Wrong Inputs!"
        })
    }
    
    const {title, description } = response.data;
    
    await todo.create({
        title: response.data.title,
        description: response.data.description,
        completed: false
    })

    res.json({
        msg: "Todo created succesfully!"
    })
})

app.get('/todos', async (req, res) =>{
    const todos = await todo.find({});
    res.json({todos});
})

app.put('/completed', async (req, res) => {
    const response = updateTodoSchema.safeParse(req.body);
    if(!response.success){
        return res.status(403).json({
            msg: "Wrong Inputs!"
        })
    }

    const { id } = response.data;

    await todo.updateOne({
        _id: response.data.id,
    },{
        completed: true
    })
    res.json({
        msg: "Todo updated successfully!"
    })
})

app.listen(3000);