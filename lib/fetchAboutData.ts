import connectDB from "./mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function FetchAboutData() {
    try {
        await connectDB();

        await client.connect()
        const database = client.db()
        const aboutCollection = database.collection("about_me")
        const data = await aboutCollection.find({}).toArray()

        return data
    } catch (error) {
        console.error(`Error ${(error as Error).message}`)

    }
}