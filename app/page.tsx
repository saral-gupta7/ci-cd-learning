import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground px-4">
      <div className="flex flex-col items-center gap-8 max-w-xl w-full">
        <Image
          src="/globe.svg"
          alt="CI/CD Globe Logo"
          width={80}
          height={80}
          className="mb-2 dark:invert"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-2 tracking-tight">
          Welcome to Your CI/CD Journey
        </h1>
        <p className="text-lg sm:text-xl text-center text-foreground/80 mb-6">
          Streamline your development process with automated builds, tests, and
          deployments. Experience the power of modern DevOps and continuous
          delivery.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/CI/CD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-foreground text-background px-8 py-3 text-lg font-semibold shadow-md hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Learn More About CI/CD
        </a>
      </div>
      <footer className="mt-16 text-sm text-foreground/60 text-center w-full">
        &copy; {new Date().getFullYear()} CI/CD DevOps Demo. All rights
        reserved.
      </footer>
    </div>
  );
}
