import { Plane } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center gap-3 rounded-3xl border border-white/60 bg-white/70 px-4 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl backdrop-saturate-150 lg:rounded-full">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
          <Plane size={18} />
        </span>
        <div>
          <p className="font-semibold text-heading">SkyDrop Dispatch</p>
          <p className="text-sm text-ink-muted">Kollupitiya hub · drone parcel delivery</p>
        </div>
        {/* F7: add navigation links here. S1: add live counts here. */}
      </div>
    </header>
  );
}

export default Header;
