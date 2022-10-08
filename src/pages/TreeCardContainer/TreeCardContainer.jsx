import { Card } from "antd";
import React from "react";
import TreeViewList from "../../components/TreeViewList/TreeViewList";
import "./TreeCardContainer.css";

function TreeCardContainer() {
  return (
    <Card className="tree-card-container">
      <TreeViewList />
    </Card>
  );
}

export default TreeCardContainer;
