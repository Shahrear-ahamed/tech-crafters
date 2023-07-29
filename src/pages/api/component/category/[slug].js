import connectDB from "../../../../../server/middleware/mongodb";
import Component from "../../../../../server/models/Components.model";

const handler = async (req, res) => {
  const slug = req.query.slug;

  const updatedSlug = slug.replace(/-/g, " ");

  const slugComponents = await Component.find({
    category: { $regex: updatedSlug, $options: "i" },
  });

  if (slugComponents.length === 0) {
    return res.status(404).json({ error: "Data not found" });
  }

  res.status(200).json(slugComponents);
};

export default connectDB(handler);
