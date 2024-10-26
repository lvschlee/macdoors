"use client";

import {
  Text,
  Table,
  Button,
  Label,
  ThemeProvider,
  TextInput,
  Select,
  withTableSettings,
  Pagination,
  TableDataItem,
  TableColumnConfig,
  Tabs,
} from "@gravity-ui/uikit";

import "./styles.css";
import React from "react";
import { useRouter } from "next/navigation";

const dataGoods: TableDataItem[] = [{
  id: 1,
  name: 'Сибирь Термо-Марвин антик серебро',
  description: 'Дверная коробка Усиленная профильная конструкция Дверн...',
  date: "05.04.2017",
  quantity: "356",
  
},];
const columnsGoods: TableColumnConfig<any>[] = [
  { id: "id", name: "#" },
  { id: "name", name: "Название" },
  { id: "description", name: "Описание" },
  { id: "date", name: "Дата изготовления" },
  { id: "quantity", name: "Количество" },
 
];

const dataGroupsAtributes: TableDataItem[] = [{
  id: 1,
  name: "Цвет",
  description: "Белый горизонт",
},];
const columnsGroupsAtributes: TableColumnConfig<any>[] = [
  { id: "id", name: "#" },
  { id: "name", name: "Название" },
  { id: "description", name: "Описание" },
];

const dataAtributes: TableDataItem[] = [{
  id: 1,
  group: "Цвет",
  meaning: <Label theme="normal">Американский 
орех </Label>,
  description: "Используется только для дверей ПВХ",
},];
const columnsAtributes: TableColumnConfig<any>[] = [
  { id: "id", name: "#" },
  { id: "group", name: "Группа" },
  { id: "meaning", name: "Значение" },
  { id: "description", name: "Описание" },
];

const MyTable = withTableSettings(Table);

export default function Staff() {
  const router = useRouter();
  const [settings, setSettings] = React.useState([]);
  const [tab, setTab] = React.useState("departaments");

  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Склад</Text>
        </header>
        <div className="my-controls">
          <div className="my-input-container">
            <TextInput placeholder="Placeholder" />
          </div>
          <div>
            <Select size="m" placeholder="M Size" className="my-select">
              <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
          </div>
          <div>
            {tab === "goods" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/storage/create/goods");
                }}
              >
                Добавить продукцию
              </Button>
            ) : null}

            {tab === "groupsatributes" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/storage/create/groupsatributes");
                }}
              >
                Добавить группу
              </Button>
            ) : null}
            {tab === "atributes" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/storage/create/atributes");
                }}
              >
                Добавить атрибут
              </Button>
            ) : null}
          </div>
        </div>

        <div>
          <Tabs activeTab={tab}>
            <Tabs.Item
              id="goods"
              title="Продукция"
              onClick={() => setTab("goods")}
            />
            <Tabs.Item
              id="groupsatributes"
              title="Группы атрибутов"
              onClick={() => setTab("groupsatributes")}
            />
            <Tabs.Item
              id="atributes"
              title="Атрибуты"
              onClick={() => setTab("atributes")}
            />
          </Tabs>

          {tab === "goods" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataGoods}
              columns={columnsGoods}
              className="my-table"
            />
          ) : null}

          {tab === "groupsatributes" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataGroupsAtributes}
              columns={columnsGroupsAtributes}
              className="my-table"
            />
          ) : null}

{tab === "atributes" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataAtributes}
              columns={columnsAtributes}
              className="my-table"
            />
          ) : null}
        </div>

        <footer className="my-footer">
          <Pagination
            page={1}
            pageSize={100}
            total={1000}
            onUpdate={() => {}}
          />
        </footer>
      </div>
    </ThemeProvider>
  );
}
