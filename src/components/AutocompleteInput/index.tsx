import React, { useState, useEffect, useRef } from "react";
import fetchJsonp from "fetch-jsonp";
import { BASE_URL } from "../../const";
import { ICity, IData } from "../../interfaces";
import "./styles/index.scss";
import { useDebounce } from "../../hooks";
import { Cities, Loading } from "./components";
import { Popover } from "react-tiny-popover";

interface IAutocompleteInput {
  value: string;
  onChange: (value: string) => void;
}

const AutocompleteInput = ({
  value,
  onChange,
}: IAutocompleteInput): JSX.Element => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isSelectedCity, setIsSelectedCity] = useState<boolean>(false);
  const debouncedSearch = useDebounce({ value, delay: 500 });
  const refSearch = useRef<HTMLDivElement>();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--width",
      `${refSearch.current.clientWidth}px`
    );
  }, []);

  useEffect(() => {
    if (debouncedSearch && !isSelectedCity) {
      setIsSearching(true);
      fetchJsonp(`${BASE_URL}${debouncedSearch}`)
        .then((response) => response.json())
        .then((json: IData) => {
          const { result } = json;
          setIsSearching(false);
          setCities(result.slice(1));
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setCities([]);
      setIsSelectedCity(false);
    }
  }, [debouncedSearch]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  const handleClick = (name: string) => {
    setIsSelectedCity(true);
    onChange(name);
    setCities([]);
  };

  const handleOutClick = () => {
    setCities([]);
  };

  return (
    <div ref={refSearch} className="search">
      <label htmlFor="autocomplete-input" className="search__label">
        Город:
      </label>
      <Popover
        containerClassName="search__result-container"
        isOpen={cities.length > 0}
        onClickOutside={handleOutClick}
        positions={["bottom"]}
        content={
          <div className="search__result">
            {isSearching ? (
              <Loading />
            ) : (
              <Cities cities={cities} onClick={handleClick} />
            )}
          </div>
        }
      >
        <input
          id="autocomplete-input"
          type="text"
          className="search__input"
          value={value}
          onChange={handleChange}
        />
      </Popover>
    </div>
  );
};

export default AutocompleteInput;
