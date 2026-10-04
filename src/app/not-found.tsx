import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">404 / A little detour</p>
        <h1 className="headline mt-7">
          Let’s find your
          <br />
          <span className="serif">next step.</span>
        </h1>
        <p className="copy mt-7">
          We couldn’t find this page. Explore SBC’s work or head back home.
        </p>
        <div className="actions mt-9">
          <Link className="button" href="/">
            Back home
          </Link>
          <Link className="button outline" href="/portfolio">
            Explore our work
          </Link>
        </div>
      </div>
    </section>
  );
}
