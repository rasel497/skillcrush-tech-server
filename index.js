const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const res = require('express/lib/response');

app.get('/', (req, res) => {
    res.send('skillcrush technology is running');
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cours => cours.id == id);
    // console.log(course);
    res.send(course);
})

app.get('/courses', (req, res) => {
    res.send(courses);
});

// added all in home page // for homecourses
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.listen(port, () => {
    console.log(`Skillcrush Technology runing on port, ${port}`);
})