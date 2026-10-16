
function Footer() {
  return (
    <footer className="border-t border-gray-800 px-4 py-6">
      <p className="text-center text-sm text-gray-400">
        Made with{" "}
        <span className="text-red-500" aria-label="love">
          ♥
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/itisrudraa/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white transition hover:text-indigo-400"
        >
          Rudra
        </a>
      </p>
    </footer>
  );
}

export default Footer;
