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

const dataDepartaments: TableDataItem[] = [{
  id: 1,
  name: 'Фабрика дверей "МакДорс"',
  phone: "+79993384561",
  mail: "05.04.2017",
  city: "05.04.2017",
  address: "05.04.2017",
  
},];
const columnsDepartaments: TableColumnConfig<any>[] = [
  { id: "id", name: "#" },
  { id: "name", name: "Название" },
  { id: "phone", name: "Телефон" },
  { id: "mail", name: "Электронная почта" },
  { id: "city", name: "Город" },
  { id: "address", name: "Адресс" },
];

const dataEmployees: TableDataItem[] = [{
  id: 1,
  title: "Дуб шале темный",
  description: "Мы снимаем с произв...",
  date: "05.04.2017",
  tags: <Label theme="danger">Распродажа</Label>,
},];
const columnsEmployees: TableColumnConfig<any>[] = [
  { id: "id", name: "#" },
  { id: "title", name: "Заголовок" },
  { id: "description", name: "Содержание" },
  { id: "date", name: "Дата создания" },
  { id: "tags", name: "Метки" },
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
          <Text variant="header-2">Персонал</Text>
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
            {tab === "departaments" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/staff/create/departament");
                }}
              >
                Добавить отдел
              </Button>
            ) : null}

            {tab === "employees" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/staff/create/employee");
                }}
              >
                Добавить сотрудника
              </Button>
            ) : null}
          </div>
        </div>

        <div>
          <Tabs activeTab={tab}>
            <Tabs.Item
              id="departaments"
              title="Отделы"
              onClick={() => setTab("departaments")}
            />
            <Tabs.Item
              id="employees"
              title="Сотрудники"
              onClick={() => setTab("employees")}
            />
          </Tabs>

          {tab === "departaments" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataDepartaments}
              columns={columnsDepartaments}
              className="my-table"
            />
          ) : null}

          {tab === "employees" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataEmployees}
              columns={columnsEmployees}
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
