import styled from "styled-components";
import aritmeticaImage from "../assets/aritmatica.png";
import React from "react"; // IMPORTAÇÃO NECESSÁRIA

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  max-width: 1000px;
  margin: 24px auto;
  padding: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: center;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 12px;
  font-size: 2rem;
  color: ${({ theme }) => theme.secondaryText};
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AritmeticaView = ({ fontSize }) => {
  return (
    <Wrapper>
      <Image src={aritmeticaImage} alt="Aritmética Indígena" />
      <TextContainer>
        <Title>Aritmética Indígena</Title>
        <Paragraph style={{ fontSize: fontSize || "2rem" }}>
          A aritmética indígena, ou etnomatemática, refere-se aos sistemas de
          numeração, cálculo e outras práticas matemáticas que os povos
          indígenas utilizam para resolver problemas práticos e compreender o
          mundo. Esta abordagem sublinha que a matemática não é apenas uma
          disciplina formal, mas também uma prática cultural que se manifesta em
          várias formas de pensamento e conhecimento. A etnomatemática reconhece
          que os povos indígenas possuem conhecimentos matemáticos complexos,
          frequentemente diferentes dos sistemas matemáticos ocidentais.
        </Paragraph>
        <Paragraph style={{ fontSize: fontSize || "2rem" }}>
          Ao invés de apenas considerar a matemática como um conjunto de regras
          e fórmulas, a etnomatemática explora como as culturas indígenas
          aplicam esses conhecimentos para atividades cotidianas, como
          agricultura, construção, artesanato e navegação, revelando uma relação
          intrínseca entre cultura, ambiente e saber matemático.
        </Paragraph>
      </TextContainer>
    </Wrapper>
  );
};

export default AritmeticaView;
