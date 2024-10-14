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

export default function StaffEmployeeCreate() {
  const router = useRouter();
  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header className="header">
          <Text variant="header-2">Добавить сотрудника</Text>
          <Breadcrumbs
            items={[
              {
                text: "Персонал",
                action: () => router.push('/staff'),
              },
              {
                text: "Добавить сотрудника",
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
