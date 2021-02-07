import React from "react";
import { Button } from "antd";
import { Input } from "antd";

import s from "./Search.module.scss";

export const Search: React.FC = () => {
  return (
    <section className={s.container}>
      <div>
        <h1 className={s.name}>Star Wars</h1>
        <div>
          <Input placeholder="Search..." />

          <Button type="primary">Button</Button>
        </div>
      </div>
    </section>
  );
};
