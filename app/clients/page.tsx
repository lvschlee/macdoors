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
} from "@gravity-ui/uikit";

import "./styles.css";
import React from "react";

const data = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    phone: "+79993384561",
    mail: "example3Vladimir@yandex.ru",
    city: "Челябинск",
    adress: "Кыштымское шоссе, д. 50, 50340",
    orders: "1",
    value: <Label theme="success">Включена</Label>,
  },
  {
    id: 1,
    name: "Петров Петр Петрович",
    phone: "+79993384561",
    mail: "example3Vlcadimir@yandex.ru",
    city: "Миасс",
    adress: "Уктусская,47 ",
    orders: "12",
    value: <Label theme="danger">Включена</Label>,
  },
];

const columns = [
  { id: "id", name: "#" },
  { id: "name", name: "ФИО" },
  { id: "phone", name: "Телефон" },
  { id: "mail", name: "Электронная почта" },
  { id: "city", name: "Город" },
  { id: "adress", name: "Адресс" },
  { id: "orders", name: "Заказы" },
  { id: "value", name: "Статус рассылки" },
];

const items = [
  {
    text: "Клиенты",
    action: () => {},
  },
  {
    text: "Информация о клиенте",
    action: () => {},
  },
];

const MyTable = withTableSettings(Table);

export default function Clients() {
  const [settings, setSettings] = React.useState([]);

  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Клиенты</Text>
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
            <Button view="action" size="m">
              Добавить клиента
            </Button>
          </div>
        </div>

        <div>
          <MyTable
            updateSettings={() => {
              setSettings([]);
              return Promise.resolve();
            }}
            settings={settings}
            data={data}
            columns={columns}
            className="my-table"
          />
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
