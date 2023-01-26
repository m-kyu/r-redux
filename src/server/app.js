const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const todoList = [
    {id:1, text: '할일 1', done:false}
]

app.get('/', function (req, res){
    res.send('hello world');
})

app.get('/api/todo', function (req, res){
    res.json(todoList);
})

app.listen(4000, ()=>{
    console.log('server start')
})