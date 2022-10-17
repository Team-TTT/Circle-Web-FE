import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  return (
    <>
      <div>ProjectDetailPage</div>
      <h3>{projectId}</h3>
    </>
  );
}
