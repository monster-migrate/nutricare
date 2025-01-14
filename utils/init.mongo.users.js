const mongoose = require("mongoose");
const { usersData } = require("./users.data");
const MONGO_ATLAS_URI = process.env.MONGO_URI;

if (!MONGO_ATLAS_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    role: { type: String, enum: ['admin', 'pantry', 'delivery'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function useExistingData() {
    try {
        await mongoose.connect(MONGO_ATLAS_URI, {
            dbName: "NutriCare",
            serverSelectionTimeoutMS: 30000,
        });
        console.log("Connected to MongoDB Atlas.");

        const result = await User.insertMany(usersData);
        console.log("Documents inserted successfully:", result);

        await mongoose.connection.close();
        console.log("Connection closed.");
    } catch (error) {
        console.error("Error using existing data:", error);
        process.exit(1);
    }
}

useExistingData();
