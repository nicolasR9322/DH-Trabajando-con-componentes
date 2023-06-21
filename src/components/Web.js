import React from "react";
import { Sidebar } from "./Siderbar/Siderbar";
import { ContentWrapper } from "./ContentWrapper/ContentWrapper";

export const Web = () => {
  return (
   
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <ContentWrapper />
        </div>
      </div>
    
  );
};
