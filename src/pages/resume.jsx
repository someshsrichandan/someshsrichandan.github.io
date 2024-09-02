import { Animated, Animator, BleepsOnAnimator, Text, useFrameSVGAssemblingAnimation, FrameSVGOctagon, GridLines, MovingLines, aaOpacity, } from "@arwes/react";
import Header from "../components/header";
import { useEffect, useRef, useState } from "react";
import { octagonStyle, octagonStyle2, theme } from "../utlis/settings";
import { resumeData } from "../data";
import Card from "../components/card";
import AnimationInView, { AnimatorUIListener } from "../components/animate-view";
import HeadingComponent from "../components/heading";
import NefraxFrame from "../components/nefrax-frame";
import Footer from "../components/footer";



const ResumePage = () => {
    const divRef = useRef(null);
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    const [active, setActive] = useState(false);
    const [isScrolled, setScroll] = useState(false);


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


    const { summaryData, skillsData, technologyData, InterestData, LanguageData, EducationData, CoursesData } = resumeData

    return (
        <section className="h-screen  overflow-hidden">
            <Header active={active} isScrolled={isScrolled} />

            <AnimationInView>
                <BleepsOnAnimator continuous transitions={{ entering: 'intro', }} />
                <div ref={divRef} className="pt-[120px] h-screen   overflow-y-scroll">
                    <div className="max-w-[1000px] md:px-10 px-2 space-y-[150px] mb-[150px] w-full mx-auto">

                        {/* intro title  */}
                        <Animator>
                            <AnimatorUIListener>
                                <HeadingComponent title={summaryData.title} active={active} />

                                <NefraxFrame >
                                    <Animator>
                                        <BleepsOnAnimator continuous transitions={{ entering: 'typeLong', }} />
                                        <Text as="p" style={{ color: theme.colors.secondary.text(0) }} className="font-secondary  font-medium text-lg leading-relaxed">
                                            {summaryData.description}
                                        </Text>
                                    </Animator>
                                </NefraxFrame>
                            </AnimatorUIListener>
                        </Animator>







                        {/* skill */}
                        <Animator>
                            <AnimatorUIListener>
                                <HeadingComponent title={skillsData.title} />
                                <NefraxFrame>
                                    <Animator>
                                        <BleepsOnAnimator continuous transitions={{ entering: 'typeLong', }} />
                                        <ul>
                                            {
                                                skillsData.description.map((desc, idx) =>
                                                    <li key={idx}>
                                                        <Text manager="sequence" as="p" style={{ color: theme.colors.secondary.text(1) }} className="font-secondary mb-1.5 font-normal text-lg leading-relaxed">
                                                            {desc}
                                                        </Text>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </Animator>
                                </NefraxFrame>
                            </AnimatorUIListener>
                        </Animator>



                        {/* technologies */}
                        <Animator>
                            <AnimatorUIListener>
                                <HeadingComponent title={technologyData.title} />

                                {/* tech images  */}
                                <Animator active={active}>
                                    <BleepsOnAnimator continuous transitions={{ entering: 'error', }} />
                                    <Animated
                                        as="div"
                                        className="relative  flex mt-16 mb-[200px] mx-auto  flex-wrap justify-center items-center md:max-w-[85%] w-full gap-x-12 gap-y-8"
                                    >

                                        {technologyData.techImages.map((element, idx) =>
                                            <div key={idx} className="octagon even:hover:rotate-12 odd:hover:-rotate-12 transition-all duration-500" style={{
                                                position: 'relative',
                                                height: 100,
                                                width: 100,
                                            }}>
                                                <style>
                                                    {octagonStyle}
                                                </style>
                                                <Animator active={active}>
                                                    <FrameSVGOctagon
                                                        elementRef={svgRef}
                                                        onRender={onRender}
                                                        padding={2}
                                                    />
                                                </Animator>

                                                <Animator active={active}>
                                                    <img className="object-contain    rounded-[25%] object-center h-full p-2 contrast-125 " src={element.url} alt={element.name} />
                                                </Animator>
                                            </div>
                                        )}

                                    </Animated>
                                </Animator>
                            </AnimatorUIListener>
                        </Animator>




                        {/* education  */}
                        <Animator>
                            <AnimatorUIListener>
                                <HeadingComponent title={EducationData.title} active={active} />

                                <Card theme={theme}>
                                    <Animator>
                                        <GridLines
                                            lineColor='hsla(180, 100%, 75%, 0.2)'
                                            lineWidth={2}
                                            distance={400}
                                        />
                                    </Animator>
                                    <Animator combine merge manager="stagger" active={active}>

                                        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 ">

                                            {
                                                EducationData.description.map((element, idx) =>
                                                    <div key={idx} className="flex gap-x-4 md:gap-x-6 items-start">
                                                        <div
                                                            className="octagon relative"
                                                        >
                                                            <style>
                                                                {octagonStyle2}
                                                            </style>

                                                            <div style={{
                                                                position: 'relative',
                                                                height: 100,
                                                                width: 100,
                                                            }}>
                                                                <FrameSVGOctagon
                                                                    elementRef={svgRef}
                                                                    onRender={onRender}
                                                                    padding={-8}
                                                                />

                                                                <Animated animated={[aaOpacity()]}>
                                                                    <img className="object-cover -translate-x-1  -translate-y-1  rounded-md object-center p-2 contrast-125 " src={element.image} alt="" />
                                                                </Animated>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <Text as="h2" style={{ color: `hsla(180, 78%, 50%, 1)` }} className="text-[20px] md:text-[22px] font-normal font-primary mb-2.5 lg:text-[23px]">
                                                                {element.title}
                                                            </Text>

                                                            <Text as="a" target="_blank" className=" font-thin font-secondary text-[17px]" style={{ color: theme.colors.primary.main(2) }} href={element.href}>
                                                                {element.linkText}
                                                                <svg className=" ml-1 mb-0.5 size-6 inline-block stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                                </svg>
                                                            </Text>


                                                            <Text className=" font-secondary font-medium" style={{ color: theme.colors.primary.text(2), fontSize: 16, }} as="p">
                                                                {element.date}
                                                            </Text>
                                                            <Text as="p" className="pt-6 font-secondary font-medium" style={{ color: theme.colors.primary.text(1), fontSize: 18, }}>
                                                                {element.subtitle}
                                                            </Text>
                                                        </div>

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Animator>
                                </Card>
                            </AnimatorUIListener>
                        </Animator>




                        {/* courses  */}
                        <Animator>
                            <AnimatorUIListener>
                                <HeadingComponent title={CoursesData.title} active={active} />

                                <Card theme={theme}>
                                    <Animator>
                                        <GridLines
                                            lineColor='hsla(180, 100%, 75%, 0.2)'
                                            lineWidth={2}
                                            distance={400}
                                        />
                                    </Animator>
                                    <Animator active={active} combine merge manager="stagger">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 ">

                                            {
                                                CoursesData.description.map((element, idx) =>
                                                    <div key={idx} className="flex gap-x-4 md:gap-x-6 items-center">
                                                        <div
                                                            className="octagon relative"
                                                        >
                                                            <style>
                                                                {octagonStyle2}
                                                            </style>

                                                            <div style={{
                                                                position: 'relative',
                                                                height: 90,
                                                                width: 90,
                                                            }}>
                                                                <FrameSVGOctagon
                                                                    elementRef={svgRef}
                                                                    onRender={onRender}
                                                                    padding={-8}
                                                                />

                                                                <img className="object-cover -translate-x-1  -translate-y-1  rounded-md object-center p-2 contrast-125 " src={element.image} alt={element.alt} />
                                                            </div>
                                                        </div>

                                                        <div className="font-secondary ">
                                                            <Text as="h2" style={{ color: `hsl(180, 75%, 65%)` }} className="text-[18px] font-primary tracking-wide font-normal mb-2 md:text-[20px]">
                                                                {element.title}
                                                            </Text>

                                                            <Text as="a" target="_blank" className="font-secondary font-thin text-[20px]" style={{ color: theme.colors.primary.text(1), }} href={element.href}>
                                                                {element.linkText}
                                                                <svg className=" ml-1 mb-0.5 size-6 inline-flex stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                                </svg>
                                                            </Text>


                                                            <Text style={{ color: theme.colors.primary.text(2), fontSize: 14, }} as="p">
                                                                {element.date}
                                                            </Text>
                                                        </div>

                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Animator>
                                </Card>
                            </AnimatorUIListener>
                        </Animator>


                        {/* Language  */}
                        <Animator>
                            <AnimatorUIListener>
                                <BleepsOnAnimator continuous transitions={{ entering: 'typeShort', }} />
                                <HeadingComponent title={LanguageData.title} active={active} />
                                <blockquote className="mt-10 mb-[200px]" data-arwes-global-palette='primary'>
                                    <ul>
                                        {LanguageData.description.map((element, idx) =>
                                            <li key={idx}>
                                                <Animator active={active}>
                                                    <Text style={{ color: theme.colors.secondary.text(0) }} className="font-secondary mb-1.5 font-medium tracking-wide text-lg leading-relaxed" as="p">
                                                        {element}
                                                    </Text>
                                                </Animator>
                                            </li>
                                        )}
                                    </ul>
                                </blockquote>
                            </AnimatorUIListener>
                        </Animator>


                        {/* interest  */}
                        <Animator>
                            <AnimatorUIListener>
                                <BleepsOnAnimator continuous transitions={{ entering: 'typeShort', }} />
                                <HeadingComponent title={InterestData.title} active={active} />
                                <blockquote className="my-10" data-arwes-global-palette='primary'>
                                    <ul>
                                        {InterestData.description.map((element, idx) =>
                                            <li key={idx}>
                                                <Animator active={active}>
                                                    <Text style={{ color: theme.colors.secondary.text(1) }} className="font-secondary tracking-wide mb-1.5  font-medium text-lg leading-relaxed" as="p">
                                                        {element}
                                                    </Text>
                                                </Animator>
                                            </li>
                                        )}
                                    </ul>
                                </blockquote>
                            </AnimatorUIListener>
                        </Animator>
                    </div>

                    <Animator>
                        <AnimatorUIListener>
                            <Footer active={active} />
                        </AnimatorUIListener>
                    </Animator>

                </div>
            </AnimationInView>



        </section >
    );
}

export default ResumePage;