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
  TextArea,
  Icon,
} from "@gravity-ui/uikit";
import "./styles.css";
import { ArrowShapeUp, ArrowShapeUpFromLine } from "@gravity-ui/icons";

const items = [
  {
    text: "Новости",
    action: () => {},
  },
  {
    text: "Создание новости",
    action: () => {},
  },
];

export default function ClientsCreate() {
  return (
    <ThemeProvider theme="light">
      <div className="my-form-page">
        <header className="my-header">
          <Text variant="header-2">Создание новости</Text>
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
                <Text variant="subheader-1">Заголовок новости</Text>
              </label>
              <TextInput size="l"></TextInput>
            </div>

            <div className="my-form-item">
              <label htmlFor="">
                <Text variant="subheader-1">Содержание новости</Text>
              </label>
              <TextArea size="l"></TextArea>
            </div>

            <div className="my-form-item-row">
              <label htmlFor="">
                <Text variant="subheader-1">Добавить изображение</Text>
              </label>
              <Button view="normal" size="m">
                <Icon data={ArrowShapeUpFromLine} size={18} />
                Загрузить изображение
              </Button>
            </div>
            <div className="my-form-item-row">
              <label htmlFor="">
                <Text variant="subheader-1">Метки</Text>
              </label>
              <Button view="normal" size="m">
                Добавить метку
              </Button>
            </div>

            <div className="my-footer-buttons">
              <Button view="action" size="l">
                Сохранить
              </Button>
              <Button view="outlined" size="l">
                Отменить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}
