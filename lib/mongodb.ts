import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        if (mongoose.connection.readyState >= 1) return; // If already connected

        await mongoose.connect(process.env.MONGODB_URI || '');
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;
