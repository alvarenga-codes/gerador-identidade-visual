// Preview cards: Hero, Packaging, Business Card

const { useMemo } = React;

function PreviewFrame({ label, children, aspect = "16/10" }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          {label}
        </span>
        <span className="text-[11px] text-neutral-400">Live preview</span>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.18)]"
        style={{ aspectRatio: aspect }}
      >
        {children}
      </div>
    </div>
  );
}

// 1. HERO SECTION
function HeroPreview({ identity, brandName, slogan }) {
  const { palette, fonts } = identity;
  return (
    <PreviewFrame label="Landing Page · Hero" aspect="16/9">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: palette.surface, color: palette.ink }}
      >
        {/* Top nav */}
        <div className="flex items-center justify-between px-8 pt-6">
          <div className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded-md"
              style={{ backgroundColor: palette.primary }}
            />
            <span
              className="text-sm tracking-tight"
              style={{
                fontFamily: `'${fonts.heading}', serif`,
                fontWeight: 600,
              }}
            >
              {brandName || "Brand"}
            </span>
          </div>
          <div
            className="hidden md:flex items-center gap-6 text-[12px]"
            style={{
              fontFamily: `'${fonts.body}', sans-serif`,
              color: palette.muted,
            }}
          >
            <span>Product</span>
            <span>Studio</span>
            <span>Journal</span>
            <span>Contact</span>
          </div>
          <button
            className="rounded-full px-3.5 py-1.5 text-[11px] font-medium"
            style={{
              backgroundColor: palette.primary,
              color: palette.surface,
              fontFamily: `'${fonts.body}', sans-serif`,
            }}
          >
            Get started →
          </button>
        </div>

        {/* Hero body */}
        <div className="px-8 pt-10 md:pt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
              style={{
                backgroundColor: palette.secondary,
                color: palette.muted,
                fontFamily: `'${fonts.body}', sans-serif`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: palette.accent }}
              />
              {identity.descriptor}
            </div>
            <h1
              className="mt-5 text-[clamp(28px,5.4cqw,68px)] leading-[1.02] tracking-tight"
              style={{
                fontFamily: `'${fonts.heading}', serif`,
                fontWeight: fonts.headingWeight,
                color: palette.ink,
              }}
            >
              {slogan || "A new chapter, designed for the curious."}
            </h1>
            <p
              className="mt-4 max-w-md text-[13px] leading-relaxed"
              style={{
                fontFamily: `'${fonts.body}', sans-serif`,
                color: palette.muted,
              }}
            >
              {brandName || "Brand"} brings together craft and clarity —
              products made with intention, for people who notice the details.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                className="rounded-full px-5 py-2.5 text-[12px] font-medium"
                style={{
                  backgroundColor: palette.primary,
                  color: palette.surface,
                  fontFamily: `'${fonts.body}', sans-serif`,
                }}
              >
                Explore the collection
              </button>
              <button
                className="rounded-full px-5 py-2.5 text-[12px] font-medium ring-1"
                style={{
                  color: palette.ink,
                  fontFamily: `'${fonts.body}', sans-serif`,
                  borderColor: palette.ink,
                  // ring-1 + currentColor effect via box-shadow
                  boxShadow: `inset 0 0 0 1px ${palette.ink}22`,
                }}
              >
                Watch film
              </button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="col-span-12 md:col-span-5 relative">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(140deg, ${palette.secondary} 0%, ${palette.surface} 60%)`,
              }}
            >
              <div
                className="absolute -right-6 -top-6 h-40 w-40 rounded-full opacity-90"
                style={{ backgroundColor: palette.accent }}
              />
              <div
                className="absolute left-6 bottom-6 right-10 h-24 rounded-xl"
                style={{
                  backgroundColor: palette.primary,
                  opacity: 0.92,
                }}
              />
              <div
                className="absolute left-10 top-10 text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: palette.ink,
                  fontFamily: `'${fonts.body}', sans-serif`,
                  opacity: 0.5,
                }}
              >
                Vol. 01
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

// 2. PACKAGING MOCKUP
function PackagingPreview({ identity, brandName }) {
  const { palette, fonts, materialHint } = identity;

  // Material: glass vs paper vs aluminum
  const isGlass = materialHint === "frosted-glass";
  const isPaper =
    materialHint === "kraft-paper" || materialHint === "matte-paper";
  const isAluminum =
    materialHint === "matte-aluminum" || materialHint === "matte-tech";

  return (
    <PreviewFrame label="Packaging Mockup" aspect="4/5">
      <div
        className="absolute inset-0 flex items-end justify-center p-6"
        style={{
          background: `radial-gradient(110% 70% at 50% 10%, ${palette.secondary} 0%, ${palette.surface} 60%, ${palette.surface} 100%)`,
        }}
      >
        {/* Floor shadow */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-3 w-2/3 rounded-full blur-md"
          style={{ backgroundColor: palette.ink, opacity: 0.18 }}
        />

        {/* Bottle/box */}
        <div
          className="relative h-[78%] w-[44%] rounded-t-[28px] rounded-b-[12px] overflow-hidden"
          style={{
            background: isGlass
              ? `linear-gradient(160deg, ${palette.secondary}cc 0%, ${palette.surface}aa 50%, ${palette.secondary}cc 100%)`
              : isPaper
                ? palette.secondary
                : isAluminum
                  ? `linear-gradient(160deg, ${palette.primary} 0%, #1f1f1f 50%, ${palette.primary} 100%)`
                  : palette.secondary,
            boxShadow: isGlass
              ? `inset 0 0 60px ${palette.ink}10, inset 0 -20px 40px ${palette.ink}15`
              : isAluminum
                ? `inset 0 0 60px ${palette.ink}80`
                : `inset 0 -30px 60px ${palette.ink}10`,
          }}
        >
          {/* Highlight */}
          <div
            className="absolute left-3 top-4 bottom-10 w-2 rounded-full"
            style={{
              backgroundColor: isAluminum ? "#ffffff" : palette.surface,
              opacity: isGlass ? 0.5 : isAluminum ? 0.18 : 0.35,
            }}
          />

          {/* Label panel */}
          <div
            className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[78%] aspect-[3/4] rounded-md flex flex-col items-center justify-between py-5 px-3 text-center"
            style={{
              backgroundColor: isAluminum ? palette.surface : palette.surface,
              color: palette.ink,
              boxShadow: `0 1px 0 ${palette.ink}10, 0 8px 20px -8px ${palette.ink}30`,
            }}
          >
            <div
              className="text-[8px] uppercase tracking-[0.3em]"
              style={{
                color: palette.muted,
                fontFamily: `'${fonts.body}', sans-serif`,
              }}
            >
              {identity.vibe}
            </div>

            <div className="flex flex-col items-center gap-2">
              <div
                className="h-px w-6"
                style={{ backgroundColor: palette.accent }}
              />
              <div
                className="text-[clamp(14px,3cqw,22px)] leading-tight tracking-tight"
                style={{
                  fontFamily: `'${fonts.heading}', serif`,
                  fontWeight: fonts.headingWeight,
                  color: palette.ink,
                }}
              >
                {brandName || "Brand"}
              </div>
              <div
                className="text-[8px] uppercase tracking-[0.25em]"
                style={{
                  color: palette.muted,
                  fontFamily: `'${fonts.body}', sans-serif`,
                }}
              >
                No. 01 · Origin
              </div>
            </div>

            <div
              className="text-[7px] uppercase tracking-[0.2em]"
              style={{
                color: palette.muted,
                fontFamily: `'${fonts.body}', sans-serif`,
              }}
            >
              50 ml · e 1.7 fl.oz
            </div>
          </div>

          {/* Cap */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[38%] h-[12%] rounded-t-[10px]"
            style={{
              background: isAluminum
                ? `linear-gradient(180deg, #2a2a2a 0%, ${palette.primary} 100%)`
                : palette.primary,
            }}
          />
        </div>
      </div>
    </PreviewFrame>
  );
}

// 3. BUSINESS CARD (glassmorphism)
function BusinessCardPreview({ identity, brandName }) {
  const { palette, fonts } = identity;

  return (
    <PreviewFrame label="Business Card · Glassmorphism" aspect="16/10">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.ink} 100%)`,
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -left-10 -top-10 h-48 w-48 rounded-full blur-2xl opacity-60"
          style={{ backgroundColor: palette.accent }}
        />
        <div
          className="absolute right-0 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: palette.secondary }}
        />

        {/* Card */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div
            className="relative w-[78%] aspect-[1.7/1] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: `${palette.surface}22`,
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: `1px solid ${palette.surface}33`,
              boxShadow: `0 30px 60px -20px ${palette.ink}aa, inset 0 1px 0 ${palette.surface}33`,
            }}
          >
            {/* Top */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-7 w-7 rounded-lg flex items-center justify-center text-[12px] font-bold"
                    style={{
                      backgroundColor: palette.accent,
                      color: palette.ink,
                      fontFamily: `'${fonts.heading}', serif`,
                    }}
                  >
                    {(brandName || "B").charAt(0).toUpperCase()}
                  </div>
                  <span
                    className="text-[13px] tracking-tight text-white"
                    style={{
                      fontFamily: `'${fonts.heading}', serif`,
                      fontWeight: fonts.headingWeight,
                    }}
                  >
                    {brandName || "Brand"}
                  </span>
                </div>
                <div
                  className="text-[9px] uppercase tracking-[0.25em] text-white/60"
                  style={{ fontFamily: `'${fonts.body}', sans-serif` }}
                >
                  {identity.vibe}
                </div>
              </div>

              <div>
                <div
                  className="text-[clamp(14px,2.6cqw,22px)] tracking-tight text-white"
                  style={{
                    fontFamily: `'${fonts.heading}', serif`,
                    fontWeight: fonts.headingWeight,
                  }}
                >
                  Rodrigo Alvarenga
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-white/70 mt-0.5"
                  style={{ fontFamily: `'${fonts.body}', sans-serif` }}
                >
                  Developer & Designer
                </div>
              </div>

              <div
                className="flex items-end justify-between text-[10px] text-white/70"
                style={{ fontFamily: `'${fonts.body}', sans-serif` }}
              >
                <div className="space-y-0.5">
                  <div>
                    seuproduto@
                    {(brandName || "brand").toLowerCase().replace(/\s+/g, "")}
                    .com
                  </div>
                  <div>+55 61 9 9100 2109</div>
                </div>
                <div
                  className="h-[2px] w-10"
                  style={{ backgroundColor: palette.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

window.Previews = { HeroPreview, PackagingPreview, BusinessCardPreview };
