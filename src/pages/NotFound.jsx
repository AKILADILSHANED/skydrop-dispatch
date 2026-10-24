// F7 · Shown for any address that doesn't match a route.
function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-heading">No such page</h1>
      <p className="mt-2 text-ink-muted">
        Check the address, or go back to the dashboard.
      </p>
    </main>
  );
}

export default NotFound;
