import connectDB from "../../../server/middleware/mongodb";
import Component from "../../../server/models/Components.model";

const handler = async (req, res) => {
  const totalDocuments = await Component.countDocuments();

  // make random skip value
  const randomSkip = Math.floor(Math.random() * totalDocuments);

  // now get 6 random components using the random skip value
  const randomComponents = await Component.find().skip(randomSkip).limit(6);

  res.status(200).json(randomComponents);
};

export default connectDB(handler);
