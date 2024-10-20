"use client";

import {
  Breadcrumbs,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
  Text,
  ThemeProvider,
  TextInput,
  Switch,
  Button
} from "@gravity-ui/uikit";
import "./styles.css";

const items = [
  {
    text: "Персонал",
    action: () => {},
  },
  {
    text: "Добавить отдел",
    action: () => {},
  },
];

export default function StaffDepartamentCreate() {
  return (
    <ThemeProvider theme="light">
      <div className="my-form-page">
        <header className="my-header">
          <Text variant="header-2">Добавить отдел</Text>
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
              <TextInput size="l"></TextInput>
            </div>
            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Телефон</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Электронная почта</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Город</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Улица</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-address-row">
              <div className="my-width my-form-item">
                <label htmlFor="">
                  <Text variant="subheader-1">Дом</Text>
                </label>
                <TextInput size="l"></TextInput>
              </div>
              <div className="my-width my-form-item">
                <label htmlFor="">
                  <Text variant="subheader-1">Почтовый код</Text>
                </label>
                <TextInput size="l"></TextInput>
              </div>
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