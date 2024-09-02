const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function fetchProjects() {
    try {
        await client.connect();
        const database = client.db();
        const projectsCollection = database.collection('projects');
        const projects = await projectsCollection.find({}).toArray();
        return projects;
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
    // finally {
    //     await client.close();
    // }
}

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

