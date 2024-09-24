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
    text: "Клиенты",
    action: () => {},
  },
  {
    text: "Добавить клиента",
    action: () => {},
  },
];

export default function ClientsCreate() {
  return (
    <ThemeProvider theme="light">
      <div className="my-form-page">
        <header>
          <Text variant="header-2">Добавить клиента</Text>
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
                <Text variant="subheader-1">Фамилия</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Имя</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Отчество</Text>
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
                  <Text variant="subheader-1">Квартира</Text>
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

            <div className="my-form-item-row">
              <label htmlFor="">
                <Text variant="subheader-1">Статус рассылки</Text>
              </label>
              <Switch></Switch>
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
