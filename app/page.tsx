import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
// import Footer from "@/components/layout/footer";
// import WhyJoin from "@/components/sections/whyjoinus";
// import Rules from "@/components/sections/rules";
// import FAQ from "@/components/sections/faq";
// import SignupCTA from "@/components/sections/signupCTA";

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden">
      <Header />
      <Hero />
      {/* <WhyJoin />
      <Rules />
      <FAQ />
      <SignupCTA />
      <Footer /> */}
    </main>
  );
}
