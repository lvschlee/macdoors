"use client";

import { Card, Text } from "@gravity-ui/uikit";

import "./styles.css";

import placeholder from "./placeholder.svg";

export default function Home() {
  return (
    <div className="main-page">
      <header className="main-page__header header">
        <Text variant="header-1">Главная</Text>
      </header>
      <div className="news-list">
        <Card className="my-card">
          <div className="col content">
            <header>
              <div>
                <Text variant="body-1" color="danger">
                  Новости
                </Text>
              </div>
              <div>
                <Text variant="header-1">Дуб шале темный</Text>
              </div>
            </header>
            <div>
              <Text>
                Уважаемые продавцы! Мы снимаем с производства двери в цвете ПВХ
                ИТАЛИЯ. По распродаже с выставок согласовывайте с Екатериной
                Авдеенко.
              </Text>
            </div>
            <footer>
              <div className="date">
                <Text color="dark-secondary">Апрель 24, 2024</Text>
              </div>
            </footer>
          </div>
          <div className="col">
            <img
              src={placeholder.src}
              width={placeholder.width}
              height={placeholder.height}
            />
          </div>
        </Card>

        <Card className="my-card">
          <div className="col content">
            <header>
              <div>
                <Text variant="body-1" color="danger">
                  Новости
                </Text>
              </div>
              <div>
                <Text variant="header-1">Дуб шале темный</Text>
              </div>
            </header>
            <div>
              <Text>
                Уважаемые продавцы! Мы снимаем с производства двери в цвете ПВХ
                ИТАЛИЯ. По распродаже с выставок согласовывайте с Екатериной
                Авдеенко.
              </Text>
            </div>
            <footer>
              <div className="date">
                <Text color="dark-secondary">Апрель 24, 2024</Text>
              </div>
            </footer>
          </div>
          <div className="col">
            <img
              src={placeholder.src}
              width={placeholder.width}
              height={placeholder.height}
            />
          </div>
        </Card>

        <Card className="my-card">
          <div className="col content">
            <header>
              <div>
                <Text variant="body-1" color="danger">
                  Новости
                </Text>
              </div>
              <div>
                <Text variant="header-1">Дуб шале темный</Text>
              </div>
            </header>
            <div>
              <Text>
                Уважаемые продавцы! Мы снимаем с производства двери в цвете ПВХ
                ИТАЛИЯ. По распродаже с выставок согласовывайте с Екатериной
                Авдеенко.
              </Text>
            </div>
            <footer>
              <div className="date">
                <Text color="dark-secondary">Апрель 24, 2024</Text>
              </div>
            </footer>
          </div>
          <div className="col">
            <img
              src={placeholder.src}
              width={placeholder.width}
              height={placeholder.height}
            />
          </div>
        </Card>

        <Card className="my-card">
          <div className="col content">
            <header>
              <div>
                <Text variant="body-1" color="danger">
                  Новости
                </Text>
              </div>
              <div>
                <Text variant="header-1">Дуб шале темный</Text>
              </div>
            </header>
            <div>
              <Text>
                Уважаемые продавцы! Мы снимаем с производства двери в цвете ПВХ
                ИТАЛИЯ. По распродаже с выставок согласовывайте с Екатериной
                Авдеенко.
              </Text>
            </div>
            <footer>
              <div className="date">
                <Text color="dark-secondary">Апрель 24, 2024</Text>
              </div>
            </footer>
          </div>
          <div className="col">
            <img
              src={placeholder.src}
              width={placeholder.width}
              height={placeholder.height}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
