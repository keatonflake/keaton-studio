import connectDB from "./mongodb";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function FetchSkills() {
    try {
        await connectDB(); // Ensure the connection is established

        // Connect to the database using the native MongoClient
        await client.connect();
        const database = client.db();
        const skillsCollection = database.collection('skills');
        const skills = await skillsCollection.find({}).toArray();

        return skills;
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        throw error; // Optionally throw the error to handle it in the calling function
    }
}