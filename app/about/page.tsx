import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/metadata";
import { aboutJsonLd } from "@/lib/structured-data";

const description =
  "Hira Ahmed is an AI Engineer in Karachi, Pakistan, building production LLM pipelines, AI agents, and n8n automations, and providing B2B SaaS QA and API testing.";

export const metadata = buildMetadata({
  title: "About",
  description,
  path: "/about/",
});

const path = [
  { title: "QA", text: "Looking closely, writing down what broke, and not trusting the happy path." },
  { title: "Backend and automation", text: "Building the production systems behind a large AI tools directory." },
  { title: "AI engineering", text: "An assigned pipeline task that I had to figure out, and then didn't want to put down." },
  { title: "AI and reliability research", text: "The same habit, pointed at a harder question: how do you check what a model proposes?" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>Hi, I&apos;m Hira</h1>
        <div className="prose">
          <p>
            I&apos;m an engineer, but I&apos;m also the person who will probably notice the tiny thing
            everyone else skipped.
          </p>
          <p>
            I like figuring things out. When something doesn&apos;t make sense, I want to know why. When
            something doesn&apos;t work, I usually don&apos;t take &quot;that&apos;s not possible&quot; as the
            final answer. I&apos;ll research it, try a different route, and keep going until I understand what
            actually makes sense.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="solve-title">
        <h2 id="solve-title">How I Solve Problems</h2>
        <div className="prose">
          <p>
            When a problem is messy, I try not to jump at the first fix. I want to understand what I&apos;m
            actually looking at. Then I write down what I don&apos;t know yet. That list of questions is
            usually more useful than a guess.
          </p>
          <p>
            After that I research: docs, examples, constraints, the almost-right answer hiding in someone
            else&apos;s notes. I try a route. If that route is a dead end, I look for another one instead of
            deciding the tool just can&apos;t do it.
          </p>
          <p>
            I also know when I&apos;m stuck. If I&apos;ve been staring at the same gap for too long, I ask
            someone. I&apos;ve gotten much better at breaking a big problem into smaller, understandable pieces
            and asking for help with the exact part I can&apos;t see.
          </p>
          <p>
            A good example is a self-hosted n8n workflow that needed AWS CLI functionality. There wasn&apos;t a
            clean way to do that directly from the canvas, so I built a small HTTP sidecar next to it and let
            the workflow use that instead. I wasn&apos;t trying to be clever. I just didn&apos;t want the
            limitation to be the end of the sentence.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="impressions-title">
        <h2 id="impressions-title">First Impressions Aren&apos;t Always Accurate</h2>
        <div className="prose">
          <p>
            I can be a little awkward when I first meet people. I&apos;m usually quiet while I figure out the
            room and the people in it. But I&apos;m pretty adaptable, so I settle in quickly. Once I&apos;m
            comfortable, I&apos;m very friendly and probably a lot more talkative than my first impression
            suggests.
          </p>
          <p>
            I actually love meeting new people. I just don&apos;t always look like I do for the first few
            minutes.
          </p>
          <p>
            I also love my friends a lot. I&apos;m usually the person people come to when they need help with a
            project, a difficult decision, troubleshooting, industry questions, or figuring out what to do
            next.
          </p>
          <p>
            I&apos;m pretty detail-oriented, too. I notice things other people sometimes skip, and once I
            notice something, I have a hard time leaving it alone. Unfinished work bothers me. Missed details
            bother me. I like things done properly, not just done.
          </p>
          <p>
            That can make me efficient, but it can also make me spend too long trying to get something exactly
            right. One thing I&apos;ve had to learn is that doing everything myself isn&apos;t always the
            fastest way through. When something gets too big or messy, I break it into smaller pieces, figure
            out exactly where I&apos;m stuck, and ask for help. That&apos;s usually when things start moving
            again.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="ask-title">
        <h2 id="ask-title">What People Come to Me For</h2>
        <div className="prose">
          <p>I seem to have become the person people ask when they need help figuring something out.</p>
          <p>
            It might be a project that&apos;s stuck, a bug that doesn&apos;t make sense, a technical choice
            they don&apos;t want to guess at, or what to do next in their work. I like sitting with someone
            else&apos;s messy question and helping them find a route they can actually take.
          </p>
        </div>
      </section>

      <section id="how-i-got-here" className="section" aria-labelledby="path-title">
        <h2 id="path-title">How I Got Here</h2>
        <div className="prose">
          <p>I didn&apos;t plan to become an AI engineer.</p>
          <p>
            I started in QA, which trained the habit I still use: look closely, write down what broke, don&apos;t
            trust the screen if the API disagrees. Then I moved into backend and automation, building the
            production systems behind a large AI tools directory.
          </p>
          <p>
            At some point I was assigned a pipeline task that involved AI. I had to figure it out. Once I
            actually built it and started running it, something clicked. I liked this work more than I
            expected. That pipeline still processes 28,000+ records, with status-gated LLM stages that record
            a failure instead of skipping it.
          </p>
          <p>
            That&apos;s what pulled me into AI engineering. The research came later from the same instinct: if
            a model proposes a change, I want a way to check it. Sentinel-Mesh is that question, as a
            preprint.
          </p>
          <p>
            Want to see the work behind that path? See my{" "}
            <Link href="/#experience">Professional Experience →</Link>
          </p>
        </div>
        <ol className="timeline">
          {path.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="support">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="outside-title">
        <h2 id="outside-title">Outside the Screen</h2>
        <div className="prose">
          <p>
            I love walking alone. Long walks give me peace of mind and make me feel more like myself than
            almost anything else.
          </p>
          <p>
            I also like picking up a new tool or stack just to see what it can do. Trying things is how I
            learn, at work and outside it. I like new experiences, even small ones.
          </p>
          <p>
            And I enjoy shopping more than I probably need to admit. There&apos;s something oddly satisfying
            about buying something with money I earned myself.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title">{profile.education.degree}</h2>
        <p className="support">{profile.education.institution}</p>
      </section>

      <section className="section" aria-labelledby="about-links-title">
        <h2 id="about-links-title">More About My Work</h2>
        <ul className="link-list">
          <li>
            <Link href="/#experience">Professional Experience →</Link>
          </li>
          <li>
            <Link href="/#services">Services I Offer →</Link>
          </li>
          <li>
            <Link href="/case-studies/">Case Studies →</Link>
          </li>
          <li>
            <Link href="/research/">Research →</Link>
          </li>
          <li>
            <Link href="/contact/">Contact →</Link>
          </li>
        </ul>
      </section>

      <JsonLd data={aboutJsonLd(description)} />
    </>
  );
}
