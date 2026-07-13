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
}

export function MainLayout({
  children,
  withTransition = true,
  headerProps,
}: MainLayoutProps) {
  return (
    <>
      <Header {...headerProps} />
      {/* Spacer compensates for fixed AppBar height */}
      <Box sx={{ height: { xs: 64, md: 72 } }} aria-hidden="true" />
      <PageContainer>
        {withTransition ? <PageTransition>{children}</PageTransition> : children}
      </PageContainer>
      <Footer />
    </>
  );
}
