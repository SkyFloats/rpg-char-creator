import { InfoContainer, InfoCard, DevImage, DevInfo, DevName, DevDescription } from '../styles';
import devImg from '../assets/dev-placeholder.jpg';

export function InfoSection() {
  return (
    <InfoContainer id="info">
      <InfoCard>
        <DevImage src={devImg} alt="Dev" />
        <DevInfo>
          <DevName>Daniel Lucas SkyFloat Ferreira</DevName>
          <DevDescription>Sou um amante de RPG, tanto de mesa quanto eletrônico, e gosto de espalhar esse sabor fantastico para o mundo da programação.</DevDescription>
        </DevInfo>
      </InfoCard>
      {/* Adicione mais InfoCards conforme necessário */}
    </InfoContainer>
  );
}