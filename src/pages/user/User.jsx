import React from "react";
import Orders from "./orders/Orders";
import Info from "./info/Info";
import "./style.css";
export default function User() {
  return (
    <section className="user__box content__container">
        <Orders />
        <Info />
    </section>
  );
}
