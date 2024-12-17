import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about our app" },
  ];
};

export default function About() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            About Our App
          </h1>
          <p className="text-center text-lg text-gray-700 dark:text-gray-200">
            {"Som about info. Doesn't matter what goes here"}
          </p>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">Useful Resources</p>
          <Link to={"/"}>Home</Link>
        </nav>
      </div>
    </div>
  );
}
