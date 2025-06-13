// styles/styles.ts
import styled from "styled-components";
import grafismo from "../assets/grafismo.png";
import grafismo2 from "../assets/grafismo_2.png";
import React from "react"; // IMPORTAÇÃO NECESSÁRIA

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  padding: 0 16px;
`;

// Wrapper para imagem e texto lado a lado em todas as views
export const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 24px auto;
  padding: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

// Imagem com estilo
export const ContentImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    max-width: 90%;
  }
`;

// Título principal com cor dinâmica do tema
export const TextTitle = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Legenda ou descrição com cor dinâmica do tema
export const Caption = styled.p`
  margin-top: 8px;
  font-size: 2rem;
  text-align: justify;
  width: 100%;
  color: ${({ theme }) => theme.secondaryText};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GrafismoView = ({ fontSize }) => {
  return (
    <Content>
      <HorizontalWrapper>
        <ContentImage src={grafismo} alt="Grafismo indígena 1" />
        <ContentImage src={grafismo2} alt="Grafismo indígena 2" />
        <TextContainer>
          <TextTitle>Grafismos Indígenas</TextTitle>
          <Caption style={{ fontSize: fontSize || "2rem" }}>
            Os grafismos indígenas são formas de arte gráfica que representam
            ideias e vivências através de padrões geométricos, simbolizando
            peixes, cobras, rios e outros elementos culturais, carregando
            significados religiosos e antropológicos.
          </Caption>
        </TextContainer>
      </HorizontalWrapper>
    </Content>
  );
};

export default GrafismoView;
