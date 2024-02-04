const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environments = require('./environments');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();





require('./config')();
require('./db')();



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api', userRoutes.routes);
app.use('/api', authRoutes.routes);
app.use('/api', productRoutes.routes);

// Start server

app.listen(environments.port, () => console.log(`listening on url: http://localhost:` + environments.port));
