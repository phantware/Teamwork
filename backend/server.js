import express from 'express'
const app = express();
const port = process.env.PORT || 5080;
app.get("/", (req, res) => {
    res.send(" Hello, Welcome to my app projectcd");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
