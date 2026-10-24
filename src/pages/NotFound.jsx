// F7 · Shown for any address that doesn't match a route.
function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">No such page</h1>
      <p className="mt-2 text-slate-600">
        Check the address, or go back to the dashboard.
      </p>
    </main>
  );
}

export default NotFound;
