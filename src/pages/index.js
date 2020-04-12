import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { TestimonialSection } from '@mathewkostiuk/gatsby-theme-shopify-testimonials';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <TestimonialSection />
    <Contact />
  </Layout>
);
