const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/order', (req, res) => {
    res.sendFile(__dirname + '/public/order.html');
});

app.post('/submit-order', (req, res) => {
    const { 'food-item': foodItem, quantity, address } = req.body;

    console.log(`Order received: ${foodItem} x${quantity}, Address: ${address}`);
    
    // Simulate order processing
    res.send(`<h1>Thank you for your order!</h1><p>You ordered ${quantity} ${foodItem}(s). We will deliver it to ${address} soon!</p>`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
