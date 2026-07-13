import { type ReactNode } from 'react';
import { Section, type SectionProps } from './Section';
import { Container, type ContainerProps } from './Container';

export interface ContentWrapperProps {
  children: ReactNode;
  sectionProps?: Omit<SectionProps, 'children'>;
  containerProps?: Omit<ContainerProps, 'children'>;
  narrow?: boolean;
}

export function ContentWrapper({
  children,
  sectionProps,
  containerProps,
  narrow,
}: ContentWrapperProps) {
  return (
    <Section {...sectionProps}>
      <Container narrow={narrow} {...containerProps}>
        {children}
      </Container>
    </Section>
  );
}
