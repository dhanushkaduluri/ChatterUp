import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const baseUrl = 'mongodb+srv://dhanushkaduluri:630356Dk@cluster0.fbxouqf.mongodb.net/?retryWrites=true&w=majority';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(baseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
