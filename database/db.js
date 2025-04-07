import mongoose from "mongoose";

const connectDB = async () => {
  console.log('DB', process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected: ${conn.connection.host}');
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;