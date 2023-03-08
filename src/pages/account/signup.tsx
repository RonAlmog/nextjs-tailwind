import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SignupPage() {
  return (
    <Layout>
      <Seo templateTitle='Signup' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <p>Signup Here</p>

            <button className='loading btn-error btn-block btn'>Button</button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
