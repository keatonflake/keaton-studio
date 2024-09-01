import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function fetchProjects() {
    try {
        await client.connect();
        const database = client.db("portfolio");
        const projectsCollection = database.collection("projects");
        const projects = await projectsCollection.find({}).toArray();
        return projects;
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    } finally {
        await client.close();
    }
}