import styled from 'styled-components/native';

export interface IconProps {
  name: string;
  size?: number;
  onPress?: () => void;
}

export const StyledIcon= styled.TouchableOpacity`
  padding: 10px;
`;

export const StyledImage = styled.Image<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  resize-mode: contain;
`;
