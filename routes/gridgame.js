import express from 'express';  //imports node module express for http requests.
import path from 'path';        //Importing path module to handle file paths in a cross-platform way.

const __dirname = import.meta.dirname;
const route = express.Router(); //Creates a route object
console.log("hello");

//used to GET route for the root of Calendar

route.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, '../public/GridGame/index.html'))
    console.log(__dirname);
});
//exporting it for importing in app.js file
export default route;