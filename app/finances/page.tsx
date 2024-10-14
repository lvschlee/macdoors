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

const dataTransactions: TableDataItem[] = [];
const columnsTransactions: TableColumnConfig<any>[] = [];

const dataSalary: TableDataItem[] = [];
const columnsSalary: TableColumnConfig<any>[] = [];

const MyTable = withTableSettings(Table);

export default function Finances() {
  const router = useRouter();
  const [settings, setSettings] = React.useState([]);
  const [tab, setTab] = React.useState("transactions");

  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Бухгалтерия</Text>
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
            {tab === "transactions" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/finances/create/transaction");
                }}
              >
                Добавить запись
              </Button>
            ) : null}

            {tab === "salary" ? (
              <Button
                view="action"
                size="m"
                onClick={() => {
                  router.push("/finances/create/salary");
                }}
              >
                Добавить запись
              </Button>
            ) : null}
          </div>
        </div>

        <div>
          <Tabs activeTab={tab}>
            <Tabs.Item
              id="transactions"
              title="Движение средств"
              onClick={() => setTab("transactions")}
            />
            <Tabs.Item
              id="salary"
              title="Зарплата"
              onClick={() => setTab("salary")}
            />
          </Tabs>

          {tab === "transactions" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataTransactions}
              columns={columnsTransactions}
              className="my-table"
            />
          ) : null}

          {tab === "salary" ? (
            <MyTable
              updateSettings={() => {
                setSettings([]);
                return Promise.resolve();
              }}
              settings={settings}
              data={dataSalary}
              columns={columnsSalary}
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
