import React from "react";
import styled from "styled-components";

const PaginationCmp = styled.ul`
  position: relative;
  display: flex;
  padding-top: 0.8vw;
  color: #364f6b;
  font-size: 1.5vw;
  margin-top: 1.2vw;
  list-style-type: none;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    height: 0.052vw;
    background-color: #c3c3c3;
    left: 10%;
    right: 10%;
    top: 0;
  }
`;
const Page = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
  font-weight: ${(props) => (props.current ? "bold" : "normal")};
  margin-left: ${(props) => (!props.first ? "0.8vw" : null)};
  border: 0.104vw solid transparent;
  &:hover {
    border: 0.104vw solid #364f6b;
  }
`;

export default function Pagination(props) {
  let pages = new Array(props.pagesCount).fill(null).map((item, index) => index + 1);
  let printPages = [...pages];

  if (pages.length > 10) {
    if (props.page !== 1) {
      if (props.page > 4) {
        if (props.page + 5 >= pages.length) {
          printPages = [
            1,
            "...",
            ...pages.slice(pages.length - 10, pages.length + 1),
          ];
        } else {
          printPages = [
            1,
            "...",
            ...pages.slice(props.page - 4, props.page + 5),
            "...",
            pages.length,
          ];
        }
      } else {
        printPages = [...pages.slice(0, 10), "...", pages.length];
      }
    } else {
      printPages = [
        ...pages.slice(props.page - 1, props.page + 9),
        "...",
        pages.length,
      ];
    }
  }
  return (
    <PaginationCmp>
      {printPages.map((item, index) => (
        <Page
          first={index === 0 ? true : null}
          key={item + index}
          current={item === props.page}
          onClick={() => {
            if (item !== "...") {
              props.setPage(item);
              props.setStartIndex((item - 1) * 10);
              props.setEndIndex((item - 1) * 10 + 9);
            }
          }}
        >
          {item}
        </Page>
      ))}
    </PaginationCmp>
  );
}
