type IconName = "shopee" | "facebook" | "tiktok" | "youtube";

type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

const chunkyHeadsLinks: SocialLink[] = [
  { label: "Shopee", href: "https://shopee.ph/shop/1847353238", icon: "shopee" },
  { label: "Facebook", href: "https://www.facebook.com/ChunkyHeads", icon: "facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@chunkyheads", icon: "tiktok" },
];

const neyMiclatLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/neymiclat", icon: "facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@neymiclat", icon: "tiktok" },
  { label: "YouTube", href: "https://www.youtube.com/@neymiclat/videos", icon: "youtube" },
];

function SocialIcon({ name }: { name: IconName }) {
  if (name === "shopee") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.4 7.5h11.2l.8 12H5.6l.8-12Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        <path d="M14.8 11.2c-.7-.5-1.5-.7-2.4-.7-1.4 0-2.4.6-2.4 1.6 0 2.4 5 1.3 5 4 0 1.2-1.2 2-2.8 2-1.1 0-2.1-.3-2.9-.9" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 21v-8h2.8l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.8V4a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4V10H8v3h2.7v8H14Z" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 7.2a2.8 2.8 0 0 0-2-2C16.2 4.7 12 4.7 12 4.7s-4.2 0-6 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 3.5 12 29 29 0 0 0 4 16.8a2.8 2.8 0 0 0 2 2c1.8.5 6 .5 6 .5s4.2 0 6-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" />
        <path d="m10 9 5 3-5 3V9Z" className="icon-cutout" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 4c.4 2.3 1.8 3.8 4 4.2v3.1a8 8 0 0 1-4-1.2v5.6a5.5 5.5 0 1 1-4.8-5.5v3.2a2.4 2.4 0 1 0 1.7 2.3V4h3.1Z" />
    </svg>
  );
}

function SocialCard({ item, owner }: { item: SocialLink; owner: string }) {
  return (
    <a
      className="social-card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${owner} on ${item.label}`}
    >
      <span className="social-icon">
        <SocialIcon name={item.icon} />
      </span>
      <span>{item.label}</span>
      <span className="social-arrow">↗</span>
    </a>
  );
}

export default function Home() {
  const shopee = chunkyHeadsLinks[0];

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="ChunkyHeads home">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet="/chunkyheads-logo-dark.png" />
            <img className="brand-logo" src="/chunkyheads-logo-official.png" alt="ChunkyHeads" />
          </picture>
        </a>
        <span className="nav-note">
          <span className="nav-dot" />
          Full website coming soon
        </span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Premium aquaculture nutrition
          </div>

          <h1>
            Built for color.
            <span>Made for serious keepers.</span>
          </h1>

          <p className="lead">
            Purpose-built nutrition and aquarium essentials for ornamental fish
            keepers who care about color, health, and quality.
          </p>

          <div className="actions">
            <a
              className="primary-button"
              href={shopee.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the ChunkyHeads Shopee store"
            >
              <SocialIcon name="shopee" />
              Shop on Shopee
              <span className="arrow">↗</span>
            </a>
            <a className="text-link" href="#connect">
              Official channels <span>↓</span>
            </a>
          </div>

        </div>

        <div className="hero-art">
          <div className="product-stage">
            <img
              className="product-pouch"
              src="/chunkyheads-astaxanthin-transparent.png"
              alt="ChunkyHeads Premium Astaxanthin Powder sticker applied to a white resealable pouch"
            />
            <div className="product-badge">
              <span>First release</span>
              <strong>Premium Astaxanthin</strong>
              <small>Natural red pigment · 10g</small>
            </div>
          </div>
          <p className="art-caption">The first of what we&apos;re building.</p>
        </div>
      </section>

      <section className="connect" id="connect" aria-labelledby="connect-title">
        <div className="section-intro">
          <p className="section-label">Official product channels</p>
          <h2 id="connect-title">Shop &amp; follow ChunkyHeads</h2>
          <p>
            Find our products, new releases, restocks, and official brand
            announcements through these channels.
          </p>
        </div>

        <div className="social-list">
          {chunkyHeadsLinks.map((item) => (
            <SocialCard key={item.label} item={item} owner="ChunkyHeads" />
          ))}
        </div>
      </section>

      <section className="founder" id="ney-miclat" aria-labelledby="founder-title">
        <div className="founder-photo-wrap">
          <img
            className="founder-photo"
            src="/ney-miclat-flowerhorn.webp"
            alt="Ney Miclat holding bags of ornamental fish"
          />
        </div>

        <div className="founder-copy">
          <h2 id="founder-title">Ney Miclat</h2>
          <p className="founder-role">Founder of ChunkyHeads</p>
          <p className="founder-description">
            Follow Ney for available Flowerhorn, grooming and competition
            videos, fishkeeping experiences, and practical educational content
            for fellow hobbyists.
          </p>
          <div className="founder-links">
            {neyMiclatLinks.map((item) => (
              <SocialCard key={item.label} item={item} owner="Ney Miclat" />
            ))}
          </div>
        </div>
      </section>

      <section className="community" aria-labelledby="community-title">
        <div>
          <p className="community-label">Local Flowerhorn community</p>
          <h2 id="community-title">Support Local FH 🇵🇭</h2>
          <p>
            Join fellow Filipino keepers, share your progress, learn from the
            community, and support the local Flowerhorn scene.
          </p>
        </div>
        <a
          className="community-button"
          href="https://www.facebook.com/groups/1440736557490353"
          target="_blank"
          rel="noreferrer"
          aria-label="Join the Support Local FH Facebook group"
        >
          Join the Facebook group <span>↗</span>
        </a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} ChunkyHeads</span>
        <span>Philippines</span>
      </footer>
    </main>
  );
}
