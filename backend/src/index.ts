import app from "./app.js";
import connectToDatabase from "./db/connection.js";

// connections and listeners
connectToDatabase().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT,  () => 
        console.log(`Server started on port ${PORT} and connected to database`)
    );
}).catch((err) => console.log(err));