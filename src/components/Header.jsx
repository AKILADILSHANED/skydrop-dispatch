import { Plane } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <span className="grid size-9 place-items-center rounded-lg bg-brand-700 text-white">
          <Plane size={18} />
        </span>
        <div>
          <p className="font-semibold">SkyDrop Dispatch</p>
          <p className="text-sm text-slate-500">Kollupitiya hub · drone parcel delivery</p>
        </div>
        {/* F7: add navigation links here. S1: add live counts here. */}
      </div>
    </header>
  );
}

export default Header;
