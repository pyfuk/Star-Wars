import { Card } from "antd";
import React from "react";
import { Film } from "../../models/Film";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <Card title={film.title} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Эпизод: </span>
          <span>{film.episode_id}</span>
        </li>
        <li>
          <span>Режиссер: </span>
          <span>{film.director}</span>
        </li>
        <li>
          <span>Продюсер: </span>
          <span>{film.producer}</span>
        </li>
        <li>
          <span>Дата выхода: </span>
          <span>{film.release_date}</span>
        </li>
        <li>
          <span>Открытие: </span>
          <span>{film.opening_crawl}</span>
        </li>
      </ul>
    </Card>
  );
};
