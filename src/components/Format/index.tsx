import React from "react";
import { upperCaseKeys } from "../../utils";

const data: Record<string, any> = {
  string: "string",
  boolean: true,
  object: {
    first: "first",
    second: [2],
  },
  array: [1],
  objectWithArray: {
    first: [1],
    second: [2],
    third: [3],
    arrayWithObj: [
      {
        first: "first",
        second: [2],
      },
      {
        second: "second",
        third: [3],
      },
      {
        third: "third",
        first: [1],
      },
    ],
  },
  arrayWithObj: [
    {
      first: "first",
      second: [2],
    },
    {
      second: "second",
      third: [3],
    },
    {
      third: "third",
      first: [1],
    },
    {
      first: [1],
      second: [2],
      third: [3],
      arrayWithObj: [
        {
          first: "first",
          second: [2],
        },
        {
          second: "second",
          third: [3],
        },
        {
          third: "third",
          first: [1],
        },
      ],
    },
  ],
};

const Format = (): JSX.Element => {
  return <pre>{JSON.stringify(upperCaseKeys(data), undefined, 2)}</pre>;
};

export default Format;
