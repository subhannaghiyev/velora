import { type ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Header, type HeaderProps } from '@/components/shell/Header';
import { Footer } from '@/components/shell/Footer';
import { PageContainer } from './PageContainer';
import { PageTransition } from '@/components/motion/PageTransition';

export interface MainLayoutProps {
  children: ReactNode;
  withTransition?: boolean;
  headerProps?: HeaderProps;
  // When true: no spacer, header overlays content, transparent at top.
  // Use for pages with a full-bleed hero. Default: false (solid header).
  heroLayout?: boolean;
}

export function MainLayout({
  children,
  withTransition = true,
  headerProps,
  heroLayout = false,
}: MainLayoutProps) {
  const resolvedHeaderProps: HeaderProps = {
    transparentOnTop: heroLayout,
    solidOnScroll: true,
    ...headerProps,
  };

  return (
    <>
      <Header {...resolvedHeaderProps} />
      {!heroLayout && (
        <Box sx={{ height: { xs: 64, md: 72 } }} aria-hidden="true" />
      )}
      <PageContainer>
        {withTransition ? <PageTransition>{children}</PageTransition> : children}
      </PageContainer>
      <Footer />
    </>
  );
}
