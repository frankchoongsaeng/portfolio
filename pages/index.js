import MainLayout from "layouts/main";
import Container from "components/container";
import SpecialTitle from "components/specialtitle";
import SectionTitle from "components/sectiontitle";
import SmallTitle from "components/smalltitle";
import Card from "components/card";
import ListItem from "components/listitem";
import ItemProficiency from "components/itemproficiency";
import Button from "components/button";

export default function Home() {
  return (
    <MainLayout>
      {/* about me section */}
      <section className="min-h-screen relative pt-56 pb-32" id="about">
        <SpecialTitle position={{ top: "40px", left: "-80px" }}>
          About Me
        </SpecialTitle>
        <Container>
          <SectionTitle addLine={true}>A little about me</SectionTitle>
          <p className="my-14 text-center mx-auto" style={{ maxWidth: "640px" }}>
            Single threaded, high performance.<br />
            Very focused and motivated, with high attention to details. Not being able to efficiently multitask is my weakness and it only goes to prove that I'm only human afterall.
            I like to work on cool projects that brings out every ounce of best in me.<br/>
            The discovery is my "reward".
          </p>
          <SmallTitle addLine={true}>
            Explore my environments
          </SmallTitle>
          <div className="flex flex-grow items-stretch space-x-16 mt-14">
            <Card title="Social Me">
              <ListItem className="mr-4" link="https://www.linkedin.com/in/frank-choongsaeng-9a6725176/">
                <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-6" />
                <p>linkedin</p>
              </ListItem>
              <ListItem className="mr-4" link="mailto:frankchoongsaeng@gmail.com">
                <img src="/images/gmail logo.png" alt="gmail logo" className="h-6" />
                <p>email</p>
              </ListItem>
              <ListItem className="mr-4" link="https://twitter.com/choongsaengF">
                <img src="/images/twitter logo.png" alt="twitter logo" className="h-6" />
                <p>twitter</p>
              </ListItem>
              <ListItem className="mr-4" link="https://www.facebook.com/frank.ebuka.94/">
                <img src="/images/facebook logo.png" alt="facebook logo" className="h-6" />
                <p>facebook</p>
              </ListItem>
              <ListItem className="mr-4" link="https://www.instagram.com/frank_choongsaeng/">
                <img src="/images/instagram logo.png" alt="instagram logo" className="h-6" />
                <p>instagram</p>
              </ListItem>
            </Card>

            <span className="block border-l border-black transform translate-y-2/4 opacity-20"></span>

            <Card title="Repos & Playgrounds">
              <ListItem className="mr-4" link="https://github.com/frankchoongsaeng">
                <img src="/images/github logo.png" alt="github logo" className="h-6" />
                <p>github</p>
              </ListItem>
              <ListItem className="mr-4" link="https://codepen.io/frankchoongsaeng/">
                <img src="/images/codepen logo.png" alt="codepen logo" className="h-6" />
                <p>codepen</p>
              </ListItem>
              <ListItem className="mr-4" link="https://codesandbox.io/u/frankchoongsaeng">
                <img src="/images/codesandbox logo.png" alt="codesandbox logo" className="h-6" />
                <p>codesandbox</p>
              </ListItem>
            </Card>
          </div>
        </Container>
      </section>

      {/* exhibit section */}
      <section className="min-h-screen relative pt-56 pb-32 bg-gray-900 text-gray-800">


        <SpecialTitle position={{
          bottom: "40px",
          right: "-100px"
        }}>
          Exhibition
        </SpecialTitle>
        <Container>
          <SectionTitle addLine={true} lineDirection="left">
            Exhibits
          </SectionTitle>
        </Container>
      </section>

      {/* why me section */}
      <section className="min-h-screen relative pt-56 pb-32 bg-gray-200 text-gray-800">


        <SpecialTitle position={{
          top: "40px",
          left: "-60px"
        }}>
          Skill Set
        </SpecialTitle>
        <Container>
          <SectionTitle addLine={true} lineDirection="left">
            Why me?
          </SectionTitle>
          <p className="my-14 text-center mx-auto" style={{ maxWidth: "640px" }}>
            Single threaded, high performance.<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor id in id molestie vitae amet pellentesque. Potenti nulla sapien ullamcorper gravida sed in dolor massa. Et posuere sollicitudin turpis ac lacus. Neque mi commodo arcu risus, leo tortor risus.
          </p>

          <SmallTitle addLine={true}>
            Programming & Coding
          </SmallTitle>

          <div className="flex flex-grow flex-wrap items-stretch mt-6 mb-16">
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/html logo.png" alt="html logo" className="h-8" />
              <ItemProficiency item="HTML" proficiency="96" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/css logo.png" alt="css logo" className="h-8" />
              <ItemProficiency item="CSS" proficiency="90" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/javascript logo.png" alt="javascript logo" className="h-8" />
              <ItemProficiency item="Javascript" proficiency="91" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/php logo.png" alt="php logo" className="h-8" />
              <ItemProficiency item="PHP" proficiency="76" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/nodejs logo.png" alt="nodejs logo" className="h-8" />
              <ItemProficiency item="NodeJS" proficiency="88" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/reactjs logo.png" alt="reactjs logo" className="h-8" />
              <ItemProficiency item="ReactJS" proficiency="89" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-8" />
              <ItemProficiency item="Wordpress" proficiency="70" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-8" />
              <ItemProficiency item="Python" proficiency="70" />
            </ListItem>
          </div>

          <SmallTitle addLine={true}>
            Graphics Design, UI & Prototyping
          </SmallTitle>

          <div className="flex flex-grow flex-wrap items-stretch mt-6">
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/coreldraw logo.png" alt="coreldraw logo" className="h-8" />
              <ItemProficiency item="CorelDraw" proficiency="98" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/photoshop logo.png" alt="photoshop logo" className="h-8" />
              <ItemProficiency item="Photoshop" proficiency="75" />
            </ListItem>
            <ListItem className="mr-4 font-medium text-sm items-center">
              <img src="/images/figma logo.png" alt="figma logo" className="h-8" />
              <ItemProficiency item="Figma" proficiency="76" />
            </ListItem>
          </div>
        </Container>
      </section>

      {/* contact section */}
      <section className="relative py-32 bg-gray-400 text-gray-800" id="contact">
        <Container>
          <SectionTitle>
            Ready to talk?
          </SectionTitle>

          <form onSubmit={(e) => e.preventDefault()} className="mt-16">
            <div
              style={{
                maxWidth: "728px"
              }}
              className="flex flex-wrap items-stretch space-x-4 mx-auto text-sm"
            >
              <div className="flex-1 border-4 border-gray-500 overflow-hidden rounded">
                <textarea className="transition-all h-full w-full resize-none p-3 focus:opacity-100 outline-none focus:outline-none opacity-60" name="message" id="message" placeholder="Type your message here..."></textarea>
              </div>
              <div className="flex flex-col items-stretch space-y-4 flex-1">
                <div className="ct-form-control">
                  <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Full Name" />
                </div>
                <div className="ct-form-control">
                  <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Email" />
                </div>
                <div className="ct-form-control">
                  <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Subject" />
                </div>
                <div className="self-start">
                  <Button className="align" variant="dark">Send Message</Button>
                </div>
              </div>
            </div>
          </form>

          <p className="pt-16 text-sm  text-center tracking-wide">
            <span className="opacity-90 font-bold">Does whatsapp or calling sound better?</span>
            <br />
            <span className="inline-block font-medium mt-2 ">
              Here you go:
              <span className="inline-block font-bold tracking-wider mx-2">
                <img className="inline-block mr-2 overflow-hidden rounded-full" src="/images/ghana.svg" alt="svg flag of ghana" width="20" />
                <a href="tel:+233502655122" className="inline-block focus:outline-none focus:underline hover:underline">+233502655122</a>
              </span>
              or
              <span className="inline-block font-bold tracking-wider mx-2">
                <img className="inline-block mr-2 overflow-hidden rounded-full" src="/images/nigeria.svg" alt="svg flag of ghana" width="20" />
                <a href="tel:+2348101511645" className="inline-block focus:outline-none focus:underline hover:underline">+2348101511645</a>
                
              </span>
            </span>
          </p>
        </Container>
      </section>

    </MainLayout>
  )
}
