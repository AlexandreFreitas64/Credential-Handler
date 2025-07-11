import { Container } from '../../components/Container';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <></>
      </Container>

      <Container>
        <></>
      </Container>

      {children}

      <Container>
        <></>
      </Container>
    </>
  );
}
