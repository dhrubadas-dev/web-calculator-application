import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";
import { AuroraText } from "../shadcnui/aurora-text";

const Header = () => {
  return (
    <header
      className="fixed right-0 left-0 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <AuroraText
            className="text-3xl font-bold"
            aria-label="App Name">
            CalculatorApp
          </AuroraText>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>Basic</Link>
          <Link href={"/advanced"}>Advanced</Link>
          <Link href={"/smart"}>Smart</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
