import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
