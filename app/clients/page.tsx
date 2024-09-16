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
  withTableCopy,
} from "@gravity-ui/uikit";

const MyTable = withTableCopy(Table);
const data = [
  { id: 1, text: "Hello" },
  { id: 2, text: <Label>test</Label> },
];
const columns = [
  { id: "id", meta: { copy: ({ id }) => `ID #${id}` } },
  { id: "text", meta: { copy: true } },
];

const items = [
  {
    text: "Region",
    action: () => {},
  },
  {
    text: "Country",
    action: () => {},
  },
  {
    text: "City",
    action: () => {},
  },
  {
    text: "District",
    action: () => {},
  },
  {
    text: "Street",
    action: () => {},
  },
];

export default function Clients() {
  return (
    <ThemeProvider theme="light">
      <div>
        <Text variant="header-2">Clients</Text>
        <Breadcrumbs
          items={items}
          firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
          lastDisplayedItemsCount={LastDisplayedItemsCount.One}
        />
        <MyTable data={data} columns={columns} />
        <Button view="action" size="m">
          Test
        </Button>
      </div>
    </ThemeProvider>
  );
}
