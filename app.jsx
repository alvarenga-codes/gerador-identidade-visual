const { useState, useMemo, useEffect } = React;
const { VIBE_LIST, VIBE_PRESETS, generateIdentity } = window.BrandEngine;
const { HeroPreview, PackagingPreview, BusinessCardPreview } = window.Previews;

// ---------- Sidebar ----------
function Field({ label, hint, children }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
          {label}
        </span>
        {hint && <span className="text-[10px] text-neutral-400">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

function VibeChip({ vibe, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "relative rounded-xl px-3 py-2.5 text-left text-[12px] font-medium ring-1 transition " +
        (active
          ? "bg-neutral-950 text-white ring-neutral-950 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)]"
          : "bg-white text-neutral-800 ring-black/10 hover:ring-black/30")
      }
    >
      {vibe}
      {active && (
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white/80" />
      )}
    </button>
  );
}

function SwatchRow({ label, hex, onCopy }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-black/5 px-3 py-2.5">
      <div
        className="h-8 w-8 rounded-lg ring-1 ring-black/10 shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
          {label}
        </div>
        <div className="font-mono text-[12px] text-neutral-900 tabular-nums">
          {hex.toUpperCase()}
        </div>
      </div>
      <button
        onClick={onCopy}
        className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 hover:text-neutral-900 transition"
      >
        copy
      </button>
    </div>
  );
}

function Sidebar({ state, setState, onGenerate, identity, copiedKey, onCopy }) {
  return (
    <aside className="w-full md:w-[360px] shrink-0 border-b md:border-b-0 md:border-r border-black/5 bg-[#FAFAF7] flex flex-col md:h-full">
      {/* Header */}
      <div className="px-6 pt-6 pb-5 border-b border-black/5">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-neutral-950 flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-sm bg-white" />
          </div>
          <div>
            <div className="text-[13px] font-semibold tracking-tight text-neutral-950">
              Brand Playground
            </div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              Identity Studio
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable controls */}
      <div className="md:flex-1 md:overflow-y-auto px-6 py-5 space-y-6">
        {/* Inputs */}
        <div className="space-y-4">
          <Field label="Brand Name">
            <input
              type="text"
              value={state.brandName}
              onChange={(e) =>
                setState({ ...state, brandName: e.target.value })
              }
              placeholder="e.g. Solene"
              className="w-full rounded-xl bg-white ring-1 ring-black/10 px-3.5 py-2.5 text-[13px] text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-neutral-950 focus:ring-2 transition"
            />
          </Field>

          <Field label="Tagline" hint="One short line">
            <input
              type="text"
              value={state.slogan}
              onChange={(e) => setState({ ...state, slogan: e.target.value })}
              placeholder="e.g. A quieter way to glow."
              className="w-full rounded-xl bg-white ring-1 ring-black/10 px-3.5 py-2.5 text-[13px] text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-neutral-950 focus:ring-2 transition"
            />
          </Field>

          <Field label="Vibe">
            <div className="grid grid-cols-2 gap-2">
              {VIBE_LIST.map((v) => (
                <VibeChip
                  key={v}
                  vibe={v}
                  active={state.vibe === v}
                  onClick={() => setState({ ...state, vibe: v })}
                />
              ))}
            </div>
          </Field>
        </div>

        {/* Generate button */}
        <button
          onClick={onGenerate}
          className="w-full rounded-2xl bg-neutral-950 text-white py-3.5 text-[13px] font-semibold tracking-tight hover:bg-neutral-800 active:scale-[0.99] transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
        >
          ✦ Generate identity
        </button>

        {/* Palette readout */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Palette
            </div>
            <div className="text-[10px] text-neutral-400">
              {identity.descriptor}
            </div>
          </div>
          <div className="space-y-2">
            <SwatchRow
              label="Primary"
              hex={identity.palette.primary}
              onCopy={() => onCopy("primary", identity.palette.primary)}
            />
            <SwatchRow
              label="Secondary"
              hex={identity.palette.secondary}
              onCopy={() => onCopy("secondary", identity.palette.secondary)}
            />
            <SwatchRow
              label="Accent"
              hex={identity.palette.accent}
              onCopy={() => onCopy("accent", identity.palette.accent)}
            />
          </div>
          {copiedKey && (
            <div className="text-[10px] text-neutral-500">
              Copied <span className="font-mono">{copiedKey}</span> to clipboard
            </div>
          )}
        </div>

        {/* Type */}
        <div className="space-y-3">
          <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
            Type pairing
          </div>
          <div className="rounded-xl bg-white ring-1 ring-black/5 px-4 py-3.5 space-y-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Heading
              </div>
              <div
                className="text-[22px] leading-tight text-neutral-950 mt-0.5"
                style={{
                  fontFamily: `'${identity.fonts.heading}', serif`,
                  fontWeight: identity.fonts.headingWeight,
                }}
              >
                {identity.fonts.heading}
              </div>
            </div>
            <div className="h-px bg-black/5" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Body
              </div>
              <div
                className="text-[14px] leading-snug text-neutral-700 mt-0.5"
                style={{
                  fontFamily: `'${identity.fonts.body}', sans-serif`,
                  fontWeight: identity.fonts.bodyWeight,
                }}
              >
                {identity.fonts.body} — the quick brown fox jumps over the lazy
                dog.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-black/5 text-[10px] uppercase tracking-[0.16em] text-neutral-400">
        Press generate to remix
      </div>
    </aside>
  );
}

// ---------- Main canvas ----------
function Canvas({ identity, brandName, slogan }) {
  return (
    <main className="flex-1 md:overflow-y-auto bg-[#F4F2EC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-6 md:py-8">
        {/* Top bar */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-1">
              Identity preview
            </div>
            <h2 className="text-[28px] tracking-tight text-neutral-950 font-semibold">
              {brandName || "Untitled brand"}
            </h2>
            <div className="text-[13px] text-neutral-500 mt-1">
              {slogan || "—"}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: identity.palette.primary }}
            />
            <div
              className="h-3 w-3 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: identity.palette.secondary }}
            />
            <div
              className="h-3 w-3 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: identity.palette.accent }}
            />
            <div className="ml-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              {identity.vibe}
            </div>
          </div>
        </div>

        {/* Hero - full width */}
        <div className="mb-6" style={{ containerType: "inline-size" }}>
          <HeroPreview
            identity={identity}
            brandName={brandName}
            slogan={slogan}
          />
        </div>

        {/* Two cards row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div
            className="md:col-span-5"
            style={{ containerType: "inline-size" }}
          >
            <PackagingPreview identity={identity} brandName={brandName} />
          </div>
          <div
            className="md:col-span-7"
            style={{ containerType: "inline-size" }}
          >
            <BusinessCardPreview identity={identity} brandName={brandName} />
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 text-center mt-10 pb-4">
          Brand Playground · Live identity surface
        </div>
      </div>
    </main>
  );
}

// ---------- App root ----------
function App() {
  const [state, setState] = useState({
    brandName: "Solene",
    slogan: "A quieter way to glow.",
    vibe: "Luxo Minimalista",
  });
  const [seed, setSeed] = useState(1);
  const [copiedKey, setCopiedKey] = useState(null);

  const identity = useMemo(
    () => generateIdentity(state.vibe, seed),
    [state.vibe, seed],
  );

  // Re-seed whenever the user changes vibe so the visible palette updates immediately
  useEffect(() => {
    setSeed((s) => s + 1);
  }, [state.vibe]);

  const handleGenerate = () => setSeed((s) => s + 7);

  const handleCopy = async (key, hex) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1400);
    } catch (e) {}
  };

  return (
    <div className="min-h-screen md:h-screen w-screen flex flex-col md:flex-row font-[Inter] text-neutral-900 antialiased md:overflow-hidden">
      <Sidebar
        state={state}
        setState={setState}
        onGenerate={handleGenerate}
        identity={identity}
        copiedKey={copiedKey}
        onCopy={handleCopy}
      />
      <Canvas
        identity={identity}
        brandName={state.brandName}
        slogan={state.slogan}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
