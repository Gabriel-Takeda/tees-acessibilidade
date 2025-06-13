import styled from "styled-components";
import geometria from "../assets/geometria.png";
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
  flex-wrap: wrap; /* Permite quebra de linha para responsividade */

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

// Aqui alterei para pegar a cor do tema no styled-components via props
const Title = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text}; // tema aqui

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Também aqui
const Paragraph = styled.p`
  margin-top: 12px;
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary || "#fffff"};
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GeometriaView = ({ fontSize }) => {
  return (
    <Wrapper>
      <Image src={geometria} alt="Geometria Indígena" />
      <TextContainer>
        <Title>Geometria Indígena</Title>
        <Paragraph style={{ fontSize: fontSize || "2rem" }}>
          A geometria indígena, ou grafismo indígena, refere-se aos padrões
          geométricos e simétricos presentes nas artes, artesanatos e expressões
          culturais dos povos indígenas, como pinturas corporais, cerâmicas,
          cestaria e tecelagem. Estes padrões são frequentemente inspirados na
          natureza, representando elementos como animais, plantas e o universo,
          e podem ter significados simbólicos e espirituais.
        </Paragraph>
      </TextContainer>
    </Wrapper>
  );
};

export default GeometriaView;
