import { createClient } from '@vercel/postgres';
const connectDb = async () => {
    const client = createClient({
        connectionString: import.meta.env.POSTGRES_URL
    });
    await client.connect();
    return client;
};

export default await connectDb();
