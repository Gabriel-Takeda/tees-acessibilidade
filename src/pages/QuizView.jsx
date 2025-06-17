import styled from "styled-components";

const Container = styled.section`
  padding: 2rem;
  font-size: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const FormButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: rgb(245, 124, 0);
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: rgb(208, 104, 0);
    outline: 3px solid rgb(245, 124, 0);
    outline-offset: 2px;
  }
`;

export default function QuizView({fontSize}) {
  return (
    <Container role="region" aria-labelledby="quiz-title">
      <Title id="quiz-title" style={{fontSize: fontSize}}>Quizz de Matemática Indígena</Title>
      <Description
      style={{fontSize: fontSize}}
      >
        Clique no botão abaixo para acessar o quizz. O formulário será aberto
        em uma nova aba.
      </Description>
      <FormButton
        href="https://docs.google.com/forms/d/e/1FAIpQLSf8-hGE-dY5WlXZm145Aal0TtCrWx5F9pqhEWe9D84ZX3M3Ig/viewform"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir quizz de matemática indígena em nova aba"
      >
        Acessar Quizz
      </FormButton>
    </Container>
  );
}
