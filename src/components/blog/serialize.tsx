import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

type CustomText = {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
  text?: string | boolean;
};

export const serialize = (children: any[]) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      const customNode = node as CustomText;

      if (customNode.bold) {
        text = (
          <strong className="font-bold text-neutral-300" key={i}>
            {text}
          </strong>
        );
      }

      if (customNode.code) {
        text = (
          <code
            className="rounded-md border-[1px] border-neutral-700 bg-neutral-800 px-2"
            key={i}
          >
            {text}
          </code>
        );
      }

      if (customNode.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (customNode.underline) {
        text = <u key={i}>{text}</u>;
      }

      if (customNode.text === "") {
        text = <br />;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h2":
        return (
          <h2 className="mb-1 text-2xl text-neutral-100" key={i}>
            {serialize(node.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className="mb-1 text-xl text-neutral-100" key={i}>
            {serialize(node.children)}
          </h3>
        );

      case "blockquote":
        return (
          <blockquote className="text-white" key={i}>
            {serialize(node.children)}
          </blockquote>
        );
      case "ul":
        return (
          <ul className="ml-3 list-inside list-disc leading-7" key={i}>
            {serialize(node.children)}
          </ul>
        );
      case "ol":
        return (
          <ol className="ml-2 list-inside list-decimal leading-7" key={i}>
            {serialize(node.children)}
          </ol>
        );
      case "li":
        return (
          <li className="text-neutral-400" key={i}>
            {serialize(node.children)}
          </li>
        );
      case "link":
        return (
          <a
            href={escapeHTML(node.url)}
            className="underline"
            target="_blank"
            key={i}
          >
            {serialize(node.children)}
          </a>
        );

      default:
        return (
          <p
            className="break-words text-base leading-7 text-neutral-400"
            key={i}
          >
            {serialize(node.children)}
          </p>
        );
    }
  });
