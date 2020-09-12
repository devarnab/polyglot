import { connect, connection } from 'mongoose';

const connectDb = async () => {
  const uri = process.env.MONGODB_URI;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  await connect(uri, options);

  const db = connection;
  db.on('error', console.error.bind(console, 'database connection error'));
  db.once('open', () => {});
};

export default connectDb;
