const z = require("zod");

const createTodoSchema = z.object({
    title: z.string(),
    description : z.string()
})

const updateTodoSchema = z.object({
   id: z.string()
});

module.exports={
    createTodoSchema,
    updateTodoSchema
}