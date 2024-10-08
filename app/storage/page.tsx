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

const data = [];

const columns = [];

const MyTable = withTableSettings(Table);

export default function Storage() {
  const [settings, setSettings] = React.useState([]);

  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Склад</Text>
        </header>
        <div className="my-controls">
          <div className="my-input-container">
            <TextInput placeholder="Фильтровать по названию" />
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
