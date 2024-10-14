"use client";

import {
  Breadcrumbs,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
  Text,
  ThemeProvider,
} from "@gravity-ui/uikit";

import "./styles.css";
import { useRouter } from "next/navigation";

export default function FinancesTransactionCreate() {
  const router = useRouter();
  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header className="header">
          <Text variant="header-2">Бухгалтерия</Text>
          <Breadcrumbs
            items={[
              {
                text: "Бухгалтерия",
                action: () => router.push("/finances"),
              },
              {
                text: "Движение средств",
                action: () => {},
              },
              {
                text: "Добавить запись",
                action: () => {},
              },
            ]}
            firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
            lastDisplayedItemsCount={LastDisplayedItemsCount.One}
          />
        </header>

        <div></div>
      </div>
    </ThemeProvider>
  );
}
