"use client"

import React from "react";
import { TruncatedList, TruncatedListProps } from "react-truncate-list";
import "react-truncate-list/dist/styles.css";
function TruncateListWrapper(props: TruncatedListProps) {
  return (
    <TruncatedList
      className="flex flex-wrap"
      alwaysShowTruncator
      renderTruncator={props.renderTruncator}
      style={props.style}
    >
      {props.children}
    </TruncatedList>
  )
}

export default TruncateListWrapper;