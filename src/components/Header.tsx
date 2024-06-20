import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mt-5 sm:px-4 px-2">
      <Link
        href="/"
        className="sm:text-3xl text-xl font-bold ml-2 tracking-tight"
      >
        Unfade
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/" className=" hover:text-blue-400 transition">
          <p className="font-medium text-base">Home</p>
        </Link>
        <Link
          href="/restore"
          className="border-gray-300 hover:text-blue-400 transition"
        >
          <p className="font-medium text-base">Restore</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
