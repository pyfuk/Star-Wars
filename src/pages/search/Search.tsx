import React from "react";
import { AutoComplete } from "antd";
import s from "./Search.module.scss";
import { useState } from "react";

import { ContentCardProps, ContentCard } from "../cards/ContentCard";
import { prepareOption } from "../../components/PrepareOption";
import { Film } from "../../models/Film";
import { Vehicle } from "../../models/Vehicle";
import { People } from "../../models/People";
import { Planet } from "../../models/Planet";
import { Species } from "../../models/Species";
import { Starship } from "../../models/Starship";

export const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<ContentCardProps>({
    film: undefined,
    people: undefined,
    planet: undefined,
    species: undefined,
    starship: undefined,
    vehicle: undefined,
  });

  const options = prepareOption(input);

  const handleSearch = (value: string) => {
    setInput(value);
  };

  const onSelect = (value: string) => {
    const selected = options.find((option) => option.value === value);
    switch (selected?.type) {
      case "film":
        setData({
          film: selected.object as Film,
        });
        break;
      case "vehicle":
        setData({
          vehicle: selected.object as Vehicle,
        });
        break;
      case "people":
        setData({
          people: selected.object as People,
        });
        break;
      case "planets":
        setData({
          planet: selected.object as Planet,
        });
        break;
      case "species":
        setData({
          species: selected.object as Species,
        });
        break;
      case "starships":
        setData({
          starship: selected.object as Starship,
        });
        break;
    }
  };

  return (
    <section className={s.container}>
      <div>
        <h1 className={s.name}>Star Wars</h1>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{
            width: 300,
            marginBottom: 20,
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        />

        <ContentCard
          film={data.film}
          people={data.people}
          planet={data.planet}
          species={data.species}
          starship={data.starship}
          vehicle={data.vehicle}
        />
      </div>
    </section>
  );
};
