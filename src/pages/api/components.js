import connectDB from "../../../server/middleware/mongodb";
import Component from "../../../server/models/Components.model";

const handler = async (req, res) => {
  const components = await Component.find({});

  res.status(200).json(components);
};

export default connectDB(handler);
