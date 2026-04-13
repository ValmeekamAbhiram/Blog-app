import { app, connectDB } from '../backend/server.js';

export default async (req, res) => {
    // Ensure DB is connected for every request in serverless
    await connectDB();
    return app(req, res);
};
