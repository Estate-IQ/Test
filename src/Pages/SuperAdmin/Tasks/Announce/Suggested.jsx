import React from "react";
import tags from "./Data.json";

const getTagLabel = (tag) => {
  const tagParts = tag.split(" > ");
  if (tagParts.length === 1) {
    return tagParts[0];
  } else if (tagParts.length === 2) {
    return tagParts.join(" > ");
  } else {
    const firstNode = tagParts[0];
    const lastNode = tagParts[tagParts.length - 1];
    return [firstNode, lastNode].join(" ...  ");
  }
};

// const getIndentedTagName = (tag) => {
//   const tagParts = tag.split(" > ");
//   return tagParts
//     .map((tag, index) => {
//       return index === tagParts.length - 1
//         ? tag
//         : "&nbsp;".repeat((index + 1) * 4);
//     })
//     .join("");
// };

/**
 * INPUT: "Bakery Products > Biscuits > Savoury",
 * OUTPUT:
 * {
 *   "id": 2,
 *   "name": "Bakery Products > Biscuits > Savoury",
 *   "tag": "Bakery Products ... Savoury"
 * },
 */
export default tags.map((tagString, index) => ({
  id: index + 1,
  name: tagString, // getIndentedTagName(tagString),
  tag: getTagLabel(tagString),
}));
