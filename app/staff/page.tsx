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

const dataDepartaments: TableDataItem[] = [];
const columnsDepartaments: TableColumnConfig<any>[] = [];

const dataEmployees: TableDataItem[] = [];
const columnsEmployees: TableColumnConfig<any>[] = [];

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
