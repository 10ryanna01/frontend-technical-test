export default function Layout({ children }) {
  return (
    <>
      <main data-testid="layoutTest1" className="UI__main-layout">
        {/* build out default app layout with this component */}

        {children}
      </main>
    </>
  );
}
