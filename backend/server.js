const express=require('express');
const cors=require('cors');
const mysql2=require('mysql2');

const app=express();

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud1"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send("Hello from backend!");
})


app.get('/student', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql="INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error")
            return res.json(data);
    })
})

app.put('/update/:ID', (req, res) => {
    const sql="update student set `Name` = ?, `Email` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.ID;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error")
            return res.json(data);
    })
})

app.delete('/student/:ID', (req, res) => {
    const sql="DELETE FROM student WHERE ID = ?";
    const ID=req.params.ID;

    db.query(sql, [ID], (err, data) => {
        if(err) return res.json("Error")
        return res.json(data);
    })
})



app.listen(8081, () => {
    console.log("Server is listening");
})