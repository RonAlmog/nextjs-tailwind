import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function TestPage() {
  return (
    <Layout>
      <Seo templateTitle='Test' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <h2>Helooo Woooorld!!</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
