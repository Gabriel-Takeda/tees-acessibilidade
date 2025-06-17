import { Select } from "antd";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  ButtonGroup,
  Container,
  Content,
  MenuButton,
  SkipLink,
  ThemeSelector,
  ThickDivider,
  Title,
  TitleBar,
} from "./styles/styles";

import AritmeticaView from "./pages/AritmeticaView";
import GeometriaView from "./pages/GeometricaView";
import GrafismoView from "./pages/GrafismoView";
import QuizView from "./pages/QuizView";
import StartView from "./pages/StartView";
import { darkTheme, lightTheme } from "./theme";

const tabs = ["Início", "Grafismos", "Aritmética", "Geometria", "Quizz"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Início");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("2rem");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <SkipLink href="#main-content">Pular para o conteúdo principal</SkipLink>
      <Container as="main" id="main-content" role="main">
        <TitleBar>
          <Title>Matemática Indígena</Title>
          <ThemeSelector>
            <Select
              defaultValue="light"
              value={theme}
              style={{ width: 120, marginRight: 16 }}
              onChange={(value) => {
                if (value === "dark" || value === "light") {
                  setTheme(value);
                }
              }}
              options={[
                { label: "Claro", value: "light" },
                { label: "Escuro", value: "dark" },
              ]}
            />
            <Select
              defaultValue="2rem"
              value={fontSize}
              style={{ width: 120 }}
              onChange={(value) => setFontSize(value)}
              options={[
                { label: "Fonte 2rem", value: "2rem" },
                { label: "Fonte 2.5rem", value: "2.5rem" },
                { label: "Fonte 3rem", value: "3rem" },
              ]}
            />
          </ThemeSelector>
        </TitleBar>
        <ThickDivider aria-hidden="true" />
        <nav aria-label="Menu de navegação principal">
          <ButtonGroup role="tablist">
            {tabs.map((tab) => (
              <MenuButton
                key={tab}
                role="tab"
                aria-selected={tab === activeTab}
                $active={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </MenuButton>
            ))}
          </ButtonGroup>
        </nav>
        <Content>
          {activeTab === "Início" && <StartView fontSize={fontSize} />}
          {activeTab === "Grafismos" && <GrafismoView fontSize={fontSize} />}
          {activeTab === "Aritmética" && <AritmeticaView fontSize={fontSize} />}
          {activeTab === "Geometria" && <GeometriaView fontSize={fontSize} />}
          {activeTab === "Quizz" && <QuizView fontSize={fontSize}/>}
        </Content>
      </Container>
    </ThemeProvider>
  );
}
