export default function linkToCamelCase(linkData) {
  return linkData
    .split("-")
    .map((singleSlug, index) => {
      if (index === 0) {
        return singleSlug;
      } else {
        return singleSlug.charAt(0).toUpperCase() + singleSlug.slice(1);
      }
    })
    .join("");
}
