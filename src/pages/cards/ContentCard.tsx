import { Card } from "antd";
import React from "react";
import { Film } from "../../models/Film";
import { People } from "../../models/People";
import { Planet } from "../../models/Planet";
import { Species } from "../../models/Species";
import { Starship } from "../../models/Starship";
import { Vehicle } from "../../models/Vehicle";
import { FilmCard } from "./FilmCard";
import { PeopleCard } from "./PeopleCard";
import { PlanetCard } from "./PlanetCard";
import { SpeciesCard } from "./SpeciesCard";
import { StarshipCard } from "./Starship";
import { VehicleCard } from "./Vehicle";

export interface ContentCardProps {
  film?: Film;
  people?: People;
  planet?: Planet;
  species?: Species;
  starship?: Starship;
  vehicle?: Vehicle;
}

export const ContentCard = ({
  film,
  people,
  planet,
  species,
  starship,
  vehicle,
}: ContentCardProps) => {
  return (
    <section>
      {film && <FilmCard film={film} />}
      {people && <PeopleCard people={people} />}
      {planet && <PlanetCard planet={planet} />}
      {species && <SpeciesCard species={species} />}
      {starship && <StarshipCard starship={starship} />}
      {vehicle && <VehicleCard vehicle={vehicle} />}
    </section>
  );
};
