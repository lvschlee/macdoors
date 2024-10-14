"use client";

import {
  Calculator,
  House,
  Person,
  Persons,
  Receipt,
  Star,
  Sun,
  Trolley,
} from "@gravity-ui/icons";
import { AsideHeader, MenuItem } from "@gravity-ui/navigation";
import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "1",
      title: "Главная",
      icon: House,
      onItemClick() {
        router.push("/");
      },
    },
    {
      id: "2",
      title: "Новости",
      icon: Star,
      onItemClick() {
        router.push("/news");
      },
    },
    {
      id: "3",
      title: "Клиенты",
      icon: Person,
      onItemClick() {
        router.push("/clients");
      },
    },
    {
      id: "4",
      title: "Заказы",
      icon: Receipt,
      onItemClick() {
        router.push("/orders");
      },
    },
    {
      id: "5",
      title: "Склад",
      icon: Trolley,
      onItemClick() {
        router.push("/storage");
      },
    },
    {
      id: "6",
      title: "Персонал",
      icon: Persons,
      onItemClick() {
        router.push("/staff");
      },
    },
    {
      id: "7",
      title: "Бухгалтерия",
      icon: Calculator,
      onItemClick() {
        router.push("/finances");
      },
    },
  ];

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
