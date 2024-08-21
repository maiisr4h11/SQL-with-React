const express = require("express"); // Import express for server functionality
const mysql2 = require("mysql2"); // Import mysql for database connectivity
const cors = require("cors"); // Import cors for Cross-Origin Resource Sharing

const app = express(); // Create an instance of the express application
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "day3"
});

app.get("/",(req,res) => {
    const sql = "SELECT * FROM exam"; //SQL to fetch data from database
    db.query(sql, (err,data) => {
        if(err) {
            res.json(err);
        }else{
            res.send(data);
        }
    })
})

app.post("/add", (req,res) => {
    const sql = "INSERT INTO exam (name,email,marks,grade,city) VALUES (?)"; //SQL to insert data into database
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ]
    db.query(sql, [values], (err, data) => { // Execute the query
        if (err) {
            res.json(err); // Send error response if query fails
        } else {
            res.json(data); // Send success response with data
        }
    })
});

app.put("/update/:id", (req,res) => {
    const sql = "UPDATE exam SET name = ?, email = ?, marks = ?, grade = ?, city = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city,
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err,data) => {
        if (err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
})

// Route to delete a student
app.delete("/exam/:id", (req, res) => {
    const sql = "DELETE FROM exam WHERE id = ?"; // SQL query to delete a student
    const id = req.params.id // Get student ID from route parameters
    db.query(sql, [id], (err, data) => { // Execute the query
        if (err) {
            res.json(err); // Send error response if query fails
        } else {
            res.json(data); // Send success response with data
        }
    })
})

//Start server
app.listen(4000, () => {
    console.log("Server started on port 4000");
});
