import styled from 'styled-components/native';

type StyledWithWidthProps = {width: number};

const BaseText = styled.Text`
  color: #fff;
  text-align: center;
  max-width: 350px;
`;

export const SuperHeroListItemContainer = styled.SafeAreaView`
  align-items: center;
`;

export const HeroInfoWrapper = styled.View`
  align-items: center;
  margin: 0 0 20px 0;
`;

export const AlterEgo = styled(BaseText)`
  font-size: 26px;
  font-weight: 500;
`;

export const Description = styled(BaseText)`
  margin: 20px 0;
  letter-spacing: 1px;
  font-size: 18px;
`;

export const HeroCard = styled.View<StyledWithWidthProps>`
  align-items: center;
  width: ${props => props.width}px;
`;

export const HeroCardImage = styled.Image.attrs({
  resizeMode: 'cover',
})<StyledWithWidthProps & {height: number}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const Comic = styled(BaseText)`
  margin-top: auto;
  font-weight: bold;
  font-size: 34px;
`;
