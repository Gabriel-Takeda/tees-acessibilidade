import styled from "styled-components";
import { Button, Divider, Space } from "antd";

/* 1. Skip link - só aparece ao focar */
export const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -3rem;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 0.5rem 1rem;
  text-decoration: none;
  z-index: 1000;
  border-radius: 4px;
  transition: top 0.3s ease;

  &:focus {
    top: 1rem;
  }
`;

/* Container / título / divider */

export const Container = styled.div`
  text-align: center;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

// Wrapper do título + seletor de tema
export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text};
`;

export const ThemeSelector = styled.div`
  margin-bottom: 16px;
`;

export const ThickDivider = styled(Divider)`
  && {
    border-top-width: 3px;
    border-color: ${({ theme }) => theme.primary};
    width: 200px;
    margin: 0 auto 24px;
  }
`;

/* Grupo de botões */
export const ButtonGroup = styled(Space)`
  margin-top: 16px;
`;

export const MenuButton = styled(Button) <{ $active?: boolean }>`
  && {
    background: ${({ $active, theme }) =>
    $active ? theme.background : theme.primary};
    color: ${({ $active, theme }) => ($active ? theme.primary : theme.text)};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    height: 40px;
    padding: 0 20px;
    font-weight: bold;
    transition: all 0.2s;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.background} !important;
      color: ${({ theme }) => theme.primary} !important;
      border-color: ${({ theme }) => theme.primary} !important;
    }

    &:focus-visible {
      outline: 3px dashed ${({ theme }) => theme.secondary};
      outline-offset: 4px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 32px;
  width: 100%;
  padding: 0 16px;
`;
