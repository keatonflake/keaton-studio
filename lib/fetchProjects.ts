import connectDB from "./mongodb";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function FetchProjects() {
    try {
        await connectDB(); // Ensure the connection is established

        // Connect to the database using the native MongoClient
        await client.connect();
        const database = client.db();
        const projectsCollection = database.collection('projects');
        const projects = await projectsCollection.find({}).toArray();

        return projects;
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        throw error; // Optionally throw the error to handle it in the calling function
    }
}


// finally {
//     await client.close();
// }

// import { fetchProjects } from "../../lib/fetchProjects"; // Update the path as necessary

// export default async function ProjectsPage() {
//   const projects = await fetchProjects();

//   console.log(projects); // Logs the data to the server console

//   return (
//     <div>
//       <h1>Projects</h1>
//       <pre>{JSON.stringify(projects, null, 2)}</pre>
//     </div>
//   );
// }

