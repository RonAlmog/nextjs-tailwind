import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Nav />
      <div className='layout min-h-screen py-10 px-1'>{children}</div>
      <Footer />
    </>
  );
}
