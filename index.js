import mongoose from "mongoose";
import app from "./app.js"

( async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/name");
        console.log("DB connected");

        const onListening = () => {
            console.log("Listening on PORT 5000");
        }

        app.listen(5000, onListening)
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
}
)()