import { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import { Animated, Animator, BleepsOnAnimator, FrameSVGOctagon, Text, aaOpacity, useBleeps, useFrameSVGAssemblingAnimation } from "@arwes/react";
import AnimationInView, { AnimatorUIListener } from "../components/animate-view";
import HeadingComponent from "../components/heading";
import NefraxFrame from "../components/nefrax-frame";
import { projectData, socialLinksData } from "../data";
import Footer from "../components/footer";
import { octagonStyle, theme } from "../utlis/settings";
import useScreenWidth from "../hook/use-screen-width";


const ProjectPage = () => {
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    const bleeps = useBleeps();
    const divRef = useRef(null);
    const [active, setActive] = useState(false);
    const [isScrolled, setScroll] = useState(false);
    const screenWidth = useScreenWidth();



    const handleScroll = (event) => {
        event.target.scrollTop > 66 ? setScroll(true) : setScroll(false)
    }

    useEffect(() => {
        const div = divRef.current;
        if (div) div.addEventListener('scroll', handleScroll);
    }, [])


    useEffect(() => {
        setActive(active => !active);
    }, []);

    return (
        <section className="h-scrhsla(80,81%,83.06%,1)een  overflow-hidden">
            <Header active={active} isScrolled={isScrolled} />

            <BleepsOnAnimator continuous transitions={{ entering: 'intro', }} />
            <div ref={divRef} className="pt-[120px] h-screen  overflow-y-scroll">
                <div className="max-w-[1000px] md:px-10   mb-[150px] w-full mx-auto">
                    <Animator active={active}>
                        <div className="flex justify-between px-3 md:px-0 items-end">
                            <Animated animated={aaOpacity()}>
                                <HeadingComponent title="Projects" active={active} />
                            </Animated>

                            <a href={socialLinksData[1].href} target="_blank" onMouseEnter={() => bleeps.click?.play()} className="octagon hidden sm:block cursor-pointer" style={{
                                position: 'relative',
                                height: 50,
                                width: 150,
                                textAlign: 'center'
                            }}>
                                <style>
                                    {octagonStyle}
                                </style>
                                <FrameSVGOctagon
                                    elementRef={svgRef}
                                    onRender={onRender}
                                    padding={2}
                                />
                                <Animator active={active}>
                                    <Text as="p" className="pt-3.5" >
                                        {projectData.length} public project
                                    </Text>
                                </Animator>
                            </a>
                        </div>
                    </Animator>

                    <AnimationInView>
                        {
                            projectData.map((project, idx) =>

                                <Animator key={idx}>
                                    <AnimatorUIListener>
                                        <div className="md:mb-[200px] mb-[100px]">
                                            <NefraxFrame padding={screenWidth < 700 ? [6, 3] : [15, 10]} squareSize={0}  >
                                                <Animator>
                                                    <img style={{ borderColor: 'hsl(60, 75%, 50%)' }} className="w-full max-h-[450px] h-full border-b-4 object-cover object-top" src={project.image} alt="image" />
                                                </Animator>
                                                <Animator duration={{ enter: 2 }}>
                                                    <BleepsOnAnimator continuous transitions={{ entering: 'typeLong' }} />
                                                    <div style={{ backgroundColor: theme.colors.info.deco(10) }} className="w-full text-center sm:text-left  my-1  py-4 px-4">

                                                        <Text as="h1" style={{ color: `hsla(60,75%,55%,1)` }} className="font-primary mb-4 text-2xl fontLight">
                                                            {project.title}
                                                        </Text>
                                                        <Text as="p" style={{ color: theme.colors.secondary.text(1) }} className="font-secondary leading-relaxed mb-4 text-[16px] font-medium">
                                                            {project.description}
                                                        </Text>
                                                        <div className="flex flex-wrap justify-center sm:justify-start items-center mb-6 gap-x-6">
                                                            <div className="flex items-center gap-x-2">
                                                                <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                                <Text as="p" className=" font-secondary font-medium " >{project.date}</Text>
                                                            </div>

                                                            <div className="flex items-center gap-x-2">
                                                                <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7.4 7H4.6a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM19.4 7h-2.8a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 14.4V9.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H1.6a.6.6 0 01-.6-.6zM23 14.4V9.6a.6.6 0 00-.6-.6h-1.8a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6h1.8a.6.6 0 00.6-.6zM8 12h8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                                <Text as="p" className=" font-secondary font-medium ">{project.effort}</Text>
                                                            </div>


                                                            <div className="flex items-center  gap-x-2">
                                                                {project.work === 'code'
                                                                    ? <img className="size-6" src="./assets/code1.svg" alt="code" />
                                                                    : <img className="size-6" src="./assets/design.svg" alt="design" />
                                                                }
                                                                <Text as="p" className=" font-secondary font-medium " >{project.work}</Text>
                                                            </div>
                                                        </div>




                                                        <button onMouseEnter={() => bleeps.clickLink?.play()} className="border-[1px] py-2.5 px-1 bg-transparent border-[hsla(80,91%,83.06%,1)]" tabIndex="-1" >
                                                            <Animator>
                                                                <a href={project.link} target="_blank" style={{ color: theme.colors.info.bg(0), }} className="py-2 px-5 bg-[#cee9e9] hover:bg-[#f4dcff] transition-all duration-300  font-primary uppercase">
                                                                    {idx === 0 ? 'working' : 'see more'}
                                                                </a>
                                                            </Animator>
                                                        </button>
                                                    </div>
                                                </Animator>
                                            </NefraxFrame>
                                        </div>
                                    </AnimatorUIListener>
                                </Animator>
                            )
                        }
                    </AnimationInView>




                </div>

                <Animator>
                    <AnimatorUIListener>
                        <Footer active={active} />
                    </AnimatorUIListener>
                </Animator>

            </div>



        </section >
    );
}

export default ProjectPage;