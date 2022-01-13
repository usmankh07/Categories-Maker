const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static('static'))


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, ('./static/index.html')))
})
app.get('/news', (req, res)=>{
    res.sendFile(path.resolve(__dirname, ('./static/news.html')))
})
app.get('/services', (req, res)=>{
    res.sendFile(path.resolve(__dirname, ('./static/services.html')))
})

app.all('*', (req, res)=> {
    res.send(`<h1>404 Error Not Found~~~</h1>`)
})
app.listen(port, ()=> {
    console.log(`Port is running at ${port}`);
})






