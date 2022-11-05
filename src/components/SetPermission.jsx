import React from "react";
import { SVGs } from "../assets/svg/SVGs";
import styled from "styled-components";

const SetPermission = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <Permission>
      <div className="tags-input">
        <input
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Add Permission"
        />
      </div>

      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              <img src={SVGs.delete} alt="" />
            </span>
          </li>
        ))}
      </ul>
    </Permission>
  );
};

export default SetPermission;

const Permission = styled.div`
  .tags-input {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;

    border: 1px solid rgb(214, 216, 218);
    border-radius: 6px;
    &:focus-within {
      border: 1px solid #0052cc;
    }
    input {
      flex: 1;
      border: none;
      height: 46px;
      font-size: 14px;

      &:focus {
        outline: transparent;
      }
    }
  }

  #tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
    // padding: 0;
    // margin: 8px 0 0 0;
  }

  .tag {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 15px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    background: #f6f6f6;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #545454;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    height: 60px;
    .tag-close-icon {
      display: block;
      width: 40px;
      transform: scale(1);
      height: 40px;
      line-height: 16px;
      text-align: center;
      font-size: 14px;
      margin-left: 8px;
      color: #0052cc;
      transition: all 0.4s;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(0.8);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .tag {
      width: 32.5%;
    }
  }
  @media screen and (max-width: 567px) {
    .tags-input {
      width: calc(100vw - 32px);
    }
  }
`;
