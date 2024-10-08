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
import Dialog from "@/app/_components/Dialog";

const data = [
  {
    id: 1,
    name: "Дуб шале темный",
    content: "Мы снимаем с произв...",
    date: "25.04.2024",
    lable: (
      <div className="my-lables">
        <Label theme="danger">Распродажа</Label>
        <Label theme="utility">Важное</Label>
        <Label theme="success">Важное</Label>
      </div>
    ),
  },
  {
    id: 1,
    name: "Информация о по...",
    content: "Уважаемые продавцы! Прошу обратит...",
    date: "26.04.2024",
    lable: (
      <div className="my-lables">
        <Label theme="unknown">Поставки</Label>
      </div>
    ),
  },
];
const columns = [
  { id: "id", name: "#" },
  { id: "name", name: "Заголовок" },
  { id: "content", name: "Содержание" },
  { id: "date", name: "Дата создания" },
  { id: "lable", name: "Метки" },
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
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <div>
        <div>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Dialog open={open} title="Удалить новость">
            Вы действительно хотите удалить новость?
          </Dialog>
        </div>
      </div>
      <div className="my-container">
        <header>
          <Text variant="header-2">Новости</Text>
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
              Добавить новость
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
