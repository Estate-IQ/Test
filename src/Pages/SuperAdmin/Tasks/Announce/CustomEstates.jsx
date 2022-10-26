import React from "react";

const CustomTag = ({ classNames, onDelete, tag }) => (
  <button
    type="button"
    className={classNames.selectedTag}
    title="Click to remove tag"
    onClick={onDelete}
  >
    <span className={classNames.selectedTagName} title={tag.name}>
      {tag.tag}
    </span>
  </button>
);

export default CustomTag;
