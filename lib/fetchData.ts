import { MongoClient } from "mongodb";

interface Data {
    summary: string;
    images: string[];
}

export async function FetchData(collectionName: string): Promise<Data[]> {
    const client = await MongoClient.connect(process.env.MONGO_URI as string);
    const db = client.db();
    const collection = db.collection(collectionName);

    const result = await collection.find({}).toArray();

    // Map the MongoDB documents to match the Data interface
    const data: Data[] = result.map((doc) => ({
        summary: doc.summary,
        images: doc.images,
    }));

    client.close();
    return data;
}
