import connectDB from "../../../server/middleware/mongodb";
import Component from "../../../server/models/Components.model";

const handler = async (req, res) => {
  const categories = await Component.find({}).select("category -_id");

  const uniqueCategories = [
    ...new Set(categories.map((item) => item.category)),
  ];

  const uniqueCategoriesWithSlug = uniqueCategories.map((category, index) => {
    const slug = category.toLowerCase().replace(/\s/g, "-");
    return {
      name: category,
      slug,
      key: index + 1,
    };
  });

  res.status(200).json(uniqueCategoriesWithSlug);
};

export default connectDB(handler);
