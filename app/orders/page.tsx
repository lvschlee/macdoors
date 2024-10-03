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
    name: "Петров Петр Петрович",
    phone: "+79993384561",
    manager: "СТМ - 1",
    city: "Миасс",
    adress: "Уктусская,47 ",
    amount: "9.800 р",
    tags: <Label theme="danger">Распродажа</Label>,
  },
];

const columns = [
  { id: "id", name: "#" },
  { id: "name", name: "Клиент" },
  { id: "phone", name: "Телефон" },
  { id: "manager", name: "Продавец" },
  { id: "city", name: "Город" },
  { id: "adress", name: "Адресс" },
  { id: "amount", name: "Сумма" },
  { id: "tags", name: "Метки" },
];

const MyTable = withTableSettings(Table);

export default function Orders() {
  const [settings, setSettings] = React.useState([]);

  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Заказы</Text>
        </header>
        <div className="my-controls">
          <div className="my-input-container">
            <TextInput placeholder="Поиск клиента по ФИО или адресу" />
          </div>
          <div>
            <Select size="m" placeholder="M Size" className="my-select">
              <Select.Option value="val_1">Value 1</Select.Option>
            </Select>
          </div>
          <div>
            <Button view="action" size="m">
              Создать заказ
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
