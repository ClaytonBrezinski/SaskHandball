const express = require('express');
const app = express();
var db = require('./database/index');

if (process.env.NODE_ENV === 'production') {
	// have express serve production assets that exist within the client build file
	app.use(express.static('client/build'));

	// have expess serve up the index.html file if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);

app.get("/api/leagues", db.getAllLeagues);
// app.get("/api/pets/:id", db.getPetById);
// app.post("/api/pets", db.createPet);