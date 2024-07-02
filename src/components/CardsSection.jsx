import { CardsContainer, Card, CardTitle, CardImage, CardButton } from '../styles';
import characterImg from '../assets/character-placeholder.jpg';
import monsterImg from '../assets/monster-placeholder.jpg';

export function CardsSection() {
  return (
    <CardsContainer id="cards">
      <Card>
        <CardTitle>Para jogadores</CardTitle>
        <CardImage src={characterImg} alt="Personagem" />
        <CardButton>Crie seu personagem</CardButton>
      </Card>
      <Card>
        <CardTitle>Para mestres</CardTitle>
        <CardImage src={monsterImg} alt="Monstro" />
        <CardButton>Crie seu monstro</CardButton>
      </Card>
    </CardsContainer>
  );
}