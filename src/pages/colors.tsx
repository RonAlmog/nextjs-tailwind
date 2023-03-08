import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ColorsPage() {
  return (
    <Layout>
      <Seo templateTitle='Colors' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>colors</div>
        </section>
      </main>
    </Layout>
  );
}
