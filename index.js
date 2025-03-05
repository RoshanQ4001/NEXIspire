// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Nexispire', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Mongoose schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Set up Express app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', (req, res) => res.render("index", { alert: null }));
app.get('/services', (req, res) => res.render('services'));
app.get('/portfolio', (req, res) => res.render('portfolio'));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/contact', (req, res) => res.render('contact', { alert: null }));
app.get('/basic', (req, res) => res.render('basic'));
app.get('/standard', (req, res) => res.render('standard'));
app.get('/premium', (req, res) => res.render('premium'));
app.get('/login', (req, res) => res.render('login'));

// Handle form submission and save to MongoDB
app.post('/send-message', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.render("contact", { alert: "All fields are required." });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.render("contact", { alert: "Message sent successfully!" });
    } catch (error) {
        console.error('Error saving to MongoDB:', error);
        res.render("contact", { alert: "Message not sent. Please try again later." });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// index.ejs (example)
// Add this inside your body tag to show the alert
// 
// <% if (alert) { %>
//     <div class="alert alert-info" role="alert">
//         <%= alert %>
//     </div>
// <% } %>

// Now, when you submit the form:
// ✅ Success -> "Message sent successfully!"
// ❌ Failure -> "Message not sent. Please try again later."



