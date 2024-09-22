"use client";

import { Calculator, House, Person, Persons, Receipt, Star, Sun, Trolley } from "@gravity-ui/icons";
import { AsideHeader } from "@gravity-ui/navigation";
import { useState } from "react";
import SidebarLogo from "./SidebarLogo";

const menuItems = [
  {
    id: "1",
    title: "Главная",
    icon: House,
  },
  {
    id: "2",
    title: "Новости",
    icon: Star,
  },
  {
    id: "3",
    title: "Клиенты",
    icon: Person,
  },
  {
    id: "4",
    title: "Заказы",
    icon: Receipt,
  },
  {
    id: "5",
    title: "Склад",
    icon: Trolley,
  },
  {
    id: "6",
    title: "Персонал",
    icon: Persons,
  },
  {
    id: "7",
    title: "Бухгалтерия",
    icon: Calculator,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <AsideHeader
      logo={{
        text: "МакДорс",
        icon: Sun,
      }}
      menuItems={menuItems}
      compact={open}
      onChangeCompact={() => setOpen(!open)}
    />
  );
}
