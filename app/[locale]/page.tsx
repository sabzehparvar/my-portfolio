import { getDictionary, type Locale } from "@/lib/dictionaries";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CertsAndLanguages from "@/components/CertsAndLanguages";
import Contact from "@/components/Contact";

export default function Page({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <Hero dict={dict} />
      <div className="divider wrap"></div>
      <Stats dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} />
      <Projects dict={dict} />
      <CertsAndLanguages dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
