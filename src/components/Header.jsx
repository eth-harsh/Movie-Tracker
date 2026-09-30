export default function Header() {
  return (
    <header className="mx-auto mt-6 mb-8 w-full max-w-3xl px-4 sm:mt-8 sm:mb-10 sm:px-6">
      {" "}
      <nav className="flex items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-3 font-jakarta text-sm text-amber-50 backdrop-blur-xl sm:gap-10 sm:px-8 sm:py-4 sm:text-base">
        {" "}
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange-400"
        >
          {" "}
          HOME{" "}
        </a>{" "}
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange-400"
        >
          {" "}
          CONTACT{" "}
        </a>{" "}
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange-400"
        >
          {" "}
          BLOG{" "}
        </a>{" "}
      </nav>{" "}
    </header>
  );
}
