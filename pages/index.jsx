import MainLayout from "layouts/main";
import Container from "components/container";
import SpecialTitle from "components/specialtitle";
import SectionTitle from "components/sectiontitle";
import SmallTitle from "components/smalltitle";
import Card from "components/card";
import ListItem from "components/listitem";
import ItemProficiency from "components/itemproficiency";
import Button from "components/button";
import ExhibitGrid from "components/exhibitgrid";
import Quote from "components/quote";

export default function Home() {
  return (

    <>

      <div className="hidden flex-col relative overflow-hidden">
        <div className="w-80 mx-auto relative">
          <SpecialTitle
            position={{
              top: "40px",
              left: "-20%"
            }}

          >
            SO<br />RRY
          </SpecialTitle>
        </div>
        <div className="text-center w-80 mx-auto py-12">
          <p className="text-sm uppercase font-bold text-gray-300">Stay Informed.</p>
          <p className="text-2xl text-center">Be the first  to see what's coming!</p>
          <img className="h-96 w-auto mx-auto" src="/images/site news image.jpg" alt="a man reading news about site" />
          <hr className="mb-8" />
          <p className="text-xs w-52 m-auto">This site is not currently available for small devices yet. <br /> Please use a bigger device <i>(preferrably a 15 in. computer)</i></p>
        </div>
      </div>

      <div className="">
        <MainLayout>
          {/* about me section */}
          <section className="min-h-screen relative pt-56 pb-32 overflow-hidden" id="about">
            <SpecialTitle position={{ top: "40px", left: "80px" }}>
              About Me
        </SpecialTitle>
            <Container>
              <SectionTitle addLine={true}>A little about me</SectionTitle>
              <p className="my-14 text-center mx-auto text-sm sm:text-base" style={{ maxWidth: "640px" }}>
                Single threaded, high performance.<br />
                Very focused and motivated, with high attention to details. Not being able to efficiently multitask is my weakness and it only goes to prove that I'm only human afterall.
                I like to work on cool projects that brings out every ounce of best in me.<br />
                The discovery is my "reward".
              </p>
              <SmallTitle addLine={true}>
                Explore my environments
              </SmallTitle>
              <div className="flex flex-col sm:flex-row items-stretch justify-center space-y-8 sm:space-y-0 space-x-0 sm:space-x-8 md:space-x-12 lg:space-x-16 mt-14">
                <Card title="Social Me">
                  <ListItem className="lg:mr-4" link="https://www.linkedin.com/in/frank-choongsaeng-9a6725176/">
                    <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-6" />
                    <p>linkedin</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="mailto:frankchoongsaeng@gmail.com">
                    <img src="/images/gmail logo.png" alt="gmail logo" className="h-6" />
                    <p>email</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="https://twitter.com/choongsaengF">
                    <img src="/images/twitter logo.png" alt="twitter logo" className="h-6" />
                    <p>twitter</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="https://www.facebook.com/frank.ebuka.94/">
                    <img src="/images/facebook logo.png" alt="facebook logo" className="h-6" />
                    <p>facebook</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="https://www.instagram.com/frank_choongsaeng/">
                    <img src="/images/instagram logo.png" alt="instagram logo" className="h-6" />
                    <p>instagram</p>
                  </ListItem>
                </Card>

                {/* horizontal for mobile */}
                <span className="block sm:hidden border-t border-black transform -translate-x-2/4 opacity-20"></span>
                {/* vertical for bigger screens */}
                <span className="hidden sm:block border-l border-black transform translate-y-1/4 opacity-20"></span>

                <Card title="Repos & Playgrounds">
                  <ListItem className="lg:mr-4" link="https://github.com/frankchoongsaeng">
                    <img src="/images/github logo.png" alt="github logo" className="h-6" />
                    <p>github</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="https://codepen.io/frankchoongsaeng/">
                    <img src="/images/codepen logo.png" alt="codepen logo" className="h-6" />
                    <p>codepen</p>
                  </ListItem>
                  <ListItem className="lg:mr-4" link="https://codesandbox.io/u/frankchoongsaeng">
                    <img src="/images/codesandbox logo.png" alt="codesandbox logo" className="h-6" />
                    <p>codesandbox</p>
                  </ListItem>
                </Card>
              </div>
            </Container>
          </section>

          {/* exhibit section */}
          <section className="min-h-screen relative pt-32 pb-32 bg-gray-900 text-gray-800 overflow-hidden">
            <SpecialTitle position={{
              bottom: "40px",
              right: "80px"
            }} variant='dark'
              animationDirection="left">
              Exhibition
        </SpecialTitle>
            <Container>
              <Quote className="mb-16" variant="light" author="Eduardo Galeano">I am not particularly interested in saving time; I prefer to enjoy it.</Quote>
              <SectionTitle addLine={true} lineDirection="left">
                Exhibits
          </SectionTitle>

              <ExhibitGrid />
              <div className="flex justify-center">
                <Button variant='light'>Enter Exhibition</Button>
              </div>
            </Container>
          </section>

          {/* why me section */}
          <section className="min-h-screen relative pt-56 pb-32 bg-gray-200 text-gray-800 overflow-hidden">


            <SpecialTitle position={{
              top: "40px",
              left: "80px"
            }}>
              Skill Set
        </SpecialTitle>
            <Container>
              <Quote className="relative -top-44" variant="dark" author="Martin Golding">Always code as if the guy who ends up maintaining your code will be <br /> a violent psychopath who knows where you live.</Quote>
              <SectionTitle addLine={true} lineDirection="left">
                Why me?
          </SectionTitle>
              <p className="my-14 text-center mx-auto text-sm sm:text-base" style={{ maxWidth: "640px" }}>
                Great question!.<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor id in id molestie vitae amet pellentesque. Potenti nulla sapien ullamcorper gravida sed in dolor massa. Et posuere sollicitudin turpis ac lacus. Neque mi commodo arcu risus, leo tortor risus.
          </p>

              <SmallTitle addLine={true}>
                Programming & Coding
          </SmallTitle>

              <div className="flex flex-col sm:flex-row flex-grow flex-wrap items-stretch mt-6 mb-16">
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/html logo.png" alt="html logo" className="h-8" />
                  <ItemProficiency item="HTML" proficiency="96" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/css logo.png" alt="css logo" className="h-8" />
                  <ItemProficiency item="CSS" proficiency="90" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/javascript logo.png" alt="javascript logo" className="h-8" />
                  <ItemProficiency item="Javascript" proficiency="91" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/php logo.png" alt="php logo" className="h-8" />
                  <ItemProficiency item="PHP" proficiency="76" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/nodejs logo.png" alt="nodejs logo" className="h-8" />
                  <ItemProficiency item="NodeJS" proficiency="88" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/reactjs logo.png" alt="reactjs logo" className="h-8" />
                  <ItemProficiency item="ReactJS" proficiency="89" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-8" />
                  <ItemProficiency item="Python" proficiency="70" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/linkedin logo.png" alt="linkedin logo" className="h-8" />
                  <ItemProficiency item="Wordpress" proficiency="70" />
                </ListItem>
              </div>

              <SmallTitle addLine={true}>
                Graphics Design, UI & Prototyping
          </SmallTitle>

              <div className="flex flex-col sm:flex-row flex-grow flex-wrap items-stretch mt-6">
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/coreldraw logo.png" alt="coreldraw logo" className="h-8" />
                  <ItemProficiency item="CorelDraw" proficiency="98" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
                  <img src="/images/photoshop logo.png" alt="photoshop logo" className="h-8" />
                  <ItemProficiency item="Photoshop" proficiency="75" />
                </ListItem>
                <ListItem className="sm:mr-4 font-medium text-sm items-center">
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
                  className="flex flex-col sm:flex-row flex-wrap items-stretch space-y-4 sm:space-y-0 sm:space-x-4 mx-auto text-sm"
                >
                  <div className="flex-1 h-48 sm:h-auto mt-4 sm:mt-0">
                    <textarea className="font-semibold transition-all h-full w-full resize-none p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" name="message" id="message" placeholder="Type your message here..."></textarea>
                  </div>
                  <div className="flex flex-col items-stretch space-y-4 flex-1 order-first sm:order-none">
                    <div className="ct-form-control">
                      <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Full Name" />
                    </div>
                    <div className="ct-form-control">
                      <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Email" />
                    </div>
                    <div className="ct-form-control">
                      <input className="transition-all w-full p-3 border-4 border-gray-500 rounded-md focus:opacity-100 outline-none focus:outline-none opacity-60" type="text" placeholder="Subject" />
                    </div>
                    <div className="hidden sm:block self-center sm:self-start">
                      <Button className="align" variant="dark">Send Message</Button>
                    </div>
                  </div>
                  <div className="self-center sm:hidden">
                    <Button className="align" variant="dark">Send Message</Button>
                  </div>
                </div>
              </form>

              <p className="pt-16 text-sm  text-center tracking-wide">
                <span className="opacity-90 font-bold">Does whatsapp or calling sound better?</span>
                <br />
                <span className="inline-block font-medium mt-2 ">
                  <span className="inline-block mb-2 sm:inline sm:mb-0">Here you go:</span> <br className="block sm:hidden" />
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
      </div>

    </>
  )
}
