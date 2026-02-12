import { Button } from "./components/ui/button";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import ReasoningCards from "./components/ui/landingUI/ReasoningCards";
export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Container>
        <div className="flex flex-col gap-10 items-center justify-center py-40 px-20">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-5xl text-black font-bold text-center max-w-160 leading-14">
              Stop Losing Great Ideas To Buried Bookmarks.
            </p>
            <p className="text-xl text-black text-center max-w-125">
              Save, tag, and search links all in one clean dashboard. Start building a personal knowledge library.
            </p>
          </div>

          <Button text="Store My Links!" variant="default" />
        </div>

        {/* 3 reasons why */}
        <div className="flex gap-6 items-center justify-center bg-[#F8F8F8] py-40 px-20 rounded-md">
          <ReasoningCards
            heading="Built for thinking, not collecting."
            subheading="This isn’t a dumping ground for links. It’s a space designed to help you return to ideas when they’re actually useful."
            imageURL="/asset/collection.png"
          />
          <ReasoningCards
            heading="Everything you save stays findable."
            subheading="You save once, add a simple tag, and move on.
            When you need it again, you don’t search your memory → you search your library"
            imageURL="/asset/Makefindingeasier.png"
          />
          <ReasoningCards
            heading="We save everything, but forget what it meant."
            subheading="With Tags and Notes you remember exactly what you saved and for what purpose, making remembering easier."
            imageURL="/asset/why.png"
          />
        </div>


        {/* What's Next */}

        <div>

        </div>


        {/* RE-CTA Section */}
        <div className="flex flex-col gap-10 items-center py-40 px-20">
          <p className="font-semibold text-4xl text-black text-center max-w-250">
            A personal knowledge library that doesn’t demand attention until you need it.
          </p>
          <Button text="I’m Ready, Store my Links !" variant="default" />
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-10 py-5 bg-[#F8F8F8]">
          <div className="flex flex-col">
            <p className="text-black text-sm font-semibold">
              RECALL - Knowledge Base
            </p>
            <p className="text-black text-sm">
              Built to remember things for you
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-black text-sm">© 2026</p>
            <p className="text-black text-sm">
              Designed and Developed with intention
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
