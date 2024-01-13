const express = require('express');
const app = express();
const zod = require('zod');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const schema = zod.array(zod.number())

const Schema = zod.object({
    email: zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("us"))
})



app.post('/kidney', (req, res) => {
  const kidney = req.body.kidneys;
  const response = schema.safeParse(kidney);
  res.send(response);
});


app.listen(3000,()=>(console.log('server is running on port 3000')));;