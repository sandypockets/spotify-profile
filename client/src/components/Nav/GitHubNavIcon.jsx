import {IconGithub} from "../icons";
import React from "react";

export default function GitHubNavIcon() {
  return (
    <a
      className="text-lightGrey w-10 h-10 mb-12 hover:text-blue"
      href="https://github.com/sandypockets"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub />
    </a>
  )
}