import Hero from "@/component/section/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-20 bg-base-200">
      <div className="bg-base-200 p-2">
        <h1 className="text-center mx-auto font">This is a homepage</h1>
        <Hero />
      </div>
    </div>
  );
}
