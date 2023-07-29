import connectDB from "../../../../server/middleware/mongodb";
import Component from "../../../../server/models/Components.model";

const handler = async (req, res) => {
  const componentId = req.query.componentId;

  const component = await Component.findOne({ _id: componentId });

  if (!component) {
    return res.status(404).json({ error: "Data not found" });
  }

  res.status(200).json(component);
};

export default connectDB(handler);
