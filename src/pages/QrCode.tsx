import { useEffect } from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { Container } from '../components/Container';

export function QrCode() {
  useEffect(() => {
    document.title = 'QrCode';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <div>a</div>
      </Container>

      <Container>
        <p>ok</p>
      </Container>
      <Container>
        <p>ok</p>
      </Container>
    </MainTemplate>
  );
}
