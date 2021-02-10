import React from "react";

import { Card } from "antd";
import { Species } from "../../models/Species";

interface SpeciesCardProps {
  species: Species;
}

export const SpeciesCard = ({ species }: SpeciesCardProps) => {
  return (
    <Card title={species.name} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Классификация: </span>
          <span>{species.classification}</span>
        </li>
        <li>
          <span>Обозначение: </span>
          <span>{species.designation}</span>
        </li>
        <li>
          <span>Средний рост: </span>
          <span>{species.average_height}</span>
        </li>
        <li>
          <span>Цвет кожи: </span>
          <span>{species.skin_colors}</span>
        </li>
        <li>
          <span>Цвет волос: </span>
          <span>{species.hair_colors}</span>
        </li>
        <li>
          <span>Цвет глаз: </span>
          <span>{species.eye_colors}</span>
        </li>
        <li>
          <span>Средняя продолжительность жизни: </span>
          <span>{species.average_lifespan}</span>
        </li>
        <li>
          <span>Язык: </span>
          <span>{species.language}</span>
        </li>
      </ul>
    </Card>
  );
};
