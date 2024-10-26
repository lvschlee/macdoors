"use client";

import {
  Breadcrumbs,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
  Text,
  ThemeProvider,
  TextInput,
  Switch,
  Button,
  Select
} from "@gravity-ui/uikit";
import "./styles.css";

const items = [
  {
    text: "Склад",
    action: () => {},
  },
  {
    text: "Добавить атрибут",
    action: () => {},
  },
];

export default function StaffDepartamentCreate() {
  return (
    <ThemeProvider theme="light">
      <div className="my-form-page">
        <header className="my-header">
          <Text variant="header-2">Добавить атрибут</Text>
          <div>
            <Breadcrumbs
              items={items}
              firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
              lastDisplayedItemsCount={LastDisplayedItemsCount.One}
            />
          </div>
        </header>
        <div>
          <form className="my-form" action="">
            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Название</Text>
              </label>
              <Select size="l"></Select>
            </div>
            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Значение</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>
            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Описание</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>
            <div className="my-footer-buttons">
              <Button view="action" size="l">Сохранить</Button>
              <Button view="outlined" size="l">Отменить</Button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}