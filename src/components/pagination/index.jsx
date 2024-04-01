import React from "react";
import { Container } from "./styled";

export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Container>
      <button onClick={onLeftClick}>previous</button>
      <div>
        {page} / {totalPages}
      </div>
      <button onClick={onRightClick}>next</button>
    </Container>
  );
}
