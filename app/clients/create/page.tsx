import { Text, ThemeProvider } from "@gravity-ui/uikit";

export default function StaffDepartamentCreate() {
  return (
    <ThemeProvider theme="light">
      <div className="my-container">
        <header>
          <Text variant="header-2">Добавить департамент</Text>
        </header>
      </div>
    </ThemeProvider>
  );
}
