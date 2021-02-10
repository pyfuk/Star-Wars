import React from "react";

import { Card } from "antd";
import { People } from "../../models/People";

interface PeopleCardProps {
  people: People;
}

export const PeopleCard = ({ people }: PeopleCardProps) => {
  return (
    <Card title={people.name} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Рост: </span>
          <span>{people.height}</span>
        </li>
        <li>
          <span>Вес: </span>
          <span>{people.mass}</span>
        </li>
        <li>
          <span>Цвет волос: </span>
          <span>{people.hair_color}</span>
        </li>
        <li>
          <span>Цвет кожи: </span>
          <span>{people.skin_color}</span>
        </li>
        <li>
          <span>Цвет глаз: </span>
          <span>{people.eye_color}</span>
        </li>
        <li>
          <span>Дата рождения: </span>
          <span>{people.birth_year}</span>
        </li>
        <li>
          <span>Пол: </span>
          <span>{people.gender}</span>
        </li>
      </ul>
    </Card>
  );
};
