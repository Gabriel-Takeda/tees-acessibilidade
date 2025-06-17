
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
`;

export const StartViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 800px;
  margin: 24px auto;
  padding: 16px;
`;

// Imagem com estilo
export const ContentImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

// Container de texto ao lado da imagem
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 400px;
`;

export const TextTitle = styled.h2`
  margin: 0;
  font-size: 5rem;
  color: ${({ theme }) => theme.text};
`;

export const Caption = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.textSecondary || "#fffff"};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

import startImage from "../assets/startImage.jpg";

const StartView = ({ fontSize }) => {
  return (
    <Content>
      <StartViewWrapper>
        <ContentImage
          src={startImage}
          alt="Tela inicial: Matemática Indígena"
        />
        <TextContainer>
          <TextTitle>Conheça a Matemática Indígena</TextTitle>
          <Caption style={{ fontSize: fontSize || "2rem" }}>
            Saiba mais sobre o mundo da matemática indígena e sua história
          </Caption>
        </TextContainer>
      </StartViewWrapper>
    </Content>
  );
};

export default StartView;
