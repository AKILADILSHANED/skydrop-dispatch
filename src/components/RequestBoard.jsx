import RequestCard from "./RequestCard";

// A worked example: the Pending column filters the requests, then maps each
// one to a card with a key. F6 adds the Assigned and Delivered columns.
function RequestBoard({ requests }) {
  const pending = requests.filter((request) => request.status === "pending");

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-heading">Delivery requests</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="grid min-w-0 content-start gap-3 rounded-2xl bg-sunk p-3">
          <h3 className="px-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Pending ({pending.length})
          </h3>
          {pending.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RequestBoard;
