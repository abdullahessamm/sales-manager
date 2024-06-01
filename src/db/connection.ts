import { connect } from "mongoose"

// database connection
export default async function () {
    try {
        const connection = await connect(process.env.DB_CONN_STRING ?? 'mongodb://127.0.0.1:27017/realtime_pos');
        console.log('> database connected');
        return connection;
    } catch(e) {
        console.error("> database connection error");
        process.exit(1);
    }
}
