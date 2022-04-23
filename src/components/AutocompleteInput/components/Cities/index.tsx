import React from "react";
import { ICity } from "../../../../interfaces";
import "./styles/index.scss";

interface ICities {
  cities: ICity[];
  onClick: (name: string) => void;
}

const Cities = ({ cities, onClick }: ICities): JSX.Element => {
  return (
    <ul className="cities">
      {cities.map(({ name, id }: ICity) => (
        <li className="cities__item" key={id} onClick={() => onClick(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Cities;
