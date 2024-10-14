'use client';

import {
  Breadcrumbs,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
  Text,
  ThemeProvider,
} from "@gravity-ui/uikit";
import { useRouter } from "next/navigation";

import './styles.css';

export default function FinacesSalaryCreate() {
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
                action: () => router.push('/finances'),
              },
              {
                text: "Зарплата",
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
