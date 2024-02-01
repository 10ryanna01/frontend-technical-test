import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import VehicleList from './components/VehicleList';
import Layout from './components/Layout/Layout';
import SEO from './components/SEO/SEO';

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient());
  const helmetContext = {};
  return (
    <main data-testid="appTest1">
      <QueryClientProvider client={queryClient} contextSharing>
        <HelmetProvider context={helmetContext}>
          <SEO
            title="APIs & Fetch Test Tech test"
            description="Sustainable chicharrones yuccie marfa pinterest kickstarter heirloom coloring book skateboard."
            name="Hammock Pitchfork"
            type="article"
          />
          <Layout>
            <VehicleList />
          </Layout>
        </HelmetProvider>
      </QueryClientProvider>
    </main>
  );
}
