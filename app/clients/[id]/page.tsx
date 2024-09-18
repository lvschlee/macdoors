"use client";

import {
  Text,
  Table,
  Button,
  Breadcrumbs,
  Label,
  ThemeProvider,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
} from "@gravity-ui/uikit";
import ButtonBack from "../../_components/ButtonBack";

import "./styles.css";

const data = [
  { key: "Фамилия, имя, отчество", value: "Анатольев Анатолий Анатольевич" },
  { key: "Номер телефона", value: "+7 90909090" },
  { key: "Электронная почта", value: "example23@yandex.ru" },
  { key: "Город", value: "Челябинск" },
  { key: "Адрес", value: "ул. Пушкина, д. 12, кв. 12 678901", align: "left" },
  { key: "Рассылка", value: <Label theme="success">Включена</Label> },
];
const columns = [
  { id: "key", meta: { copy: true } },
  { id: "value", meta: { copy: true } },
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

export default function Clients() {
  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <div>
          <ButtonBack></ButtonBack>
        </div>

        <header>
          <Text variant="header-2">Информация о клиенте</Text>
        </header>
        <div>
          <Breadcrumbs
            items={items}
            firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
            lastDisplayedItemsCount={LastDisplayedItemsCount.One}
          />
        </div>

        <div>
          <Table data={data} columns={columns} className="my-table" />
        </div>

        <footer>
          <Button view="normal" size="m">
            Редактировать информацию
          </Button>
        </footer>
      </div>
    </ThemeProvider>
  );
}
