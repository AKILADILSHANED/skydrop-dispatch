import RequestCard from "./RequestCard";

// A worked example: the Pending column filters the requests, then maps each
// one to a card with a key. F6 adds the Assigned and Delivered columns.
function RequestBoard({ requests }) {
  const pending = requests.filter((request) => request.status === "pending");

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">Delivery requests</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="grid min-w-0 content-start gap-3 rounded-xl bg-slate-100 p-3">
          <h3 className="text-sm font-semibold text-slate-600">
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
