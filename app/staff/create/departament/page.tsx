'use client';

import {
  Breadcrumbs,
  FirstDisplayedItemsCount,
  LastDisplayedItemsCount,
  Text,
  ThemeProvider,
} from "@gravity-ui/uikit";

import './styles.css';
import { useRouter } from "next/navigation";

export default function StaffDepartamentCreate() {
  const router = useRouter();
  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header className="header">
          <Text variant="header-2">Добавить отдел</Text>
          <Breadcrumbs
            items={[
              {
                text: "Персонал",
                action: () => router.push('/staff'),
              },
              {
                text: "Добавить отдел",
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
