import { Animated, Animator, FrameSVGKranox, Text, aa, aaFlicker, aaOpacity, aaVisibility, useBleeps, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { kranoxStyle, theme } from "../utlis/settings";
import { useRef, } from "react";
import { homeData, socialLinksData } from "../data/index";



const SocialLinks = () => {
    const bleeps = useBleeps();
    return (
        <>
            {
                socialLinksData.map((element, idx) =>
                    <a target='_blank' key={idx} onMouseEnter={() => bleeps.clickLink?.play()} href={element.href} className="flex items-center gap-x-2" >
                        {element.icon}
                        <h6 style={{ color: theme.colors.primary.text(1) }} className="hidden sm:block font-secondary  capitalize  text-[15px]">{element.text}</h6>
                    </a>
                )
            }
        </>



    );
}


const Header = ({ active, isScrolled }) => {
    const bleeps = useBleeps();

    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    return (
        <>
            <header className={`${isScrolled ? " backdrop-blur-[4px]" : " backdrop-blur-0"} fixed top-0 w-full  z-50 transition-all duration-200 `}>
                <Animator active={active} duration={{ enter: 1.4, }} manager="stagger">
                    <div style={{
                        width: '100%',
                        backgroundColor: theme.colors.primary.deco(1),
                        boxShadow: '3px 0 4px rgba(180,249,251,0.65)'

                    }}
                        className="flex justify-center sm:justify-between  relative  items-center md:px-10 px-2 pt-4 pb-2.5"
                    >

                        <Animated animated={[aaVisibility()]} as="div" className="relative z-10 flex items-center gap-x-5">
                            <a
                                onMouseEnter={() => bleeps.clickHeader?.play()}
                                href="/"
                                className="kranox"
                                style={{
                                    backgroundColor: 'transparent',
                                    position: 'relative',
                                    width: 55,
                                    height: 50,
                                }}
                            >
                                <style>{kranoxStyle}</style>

                                <Animator>
                                    <FrameSVGKranox
                                        elementRef={svgRef}
                                        onRender={onRender}
                                        padding={1}
                                        strokeWidth={2}
                                        squareSize={0}
                                    />
                                </Animator>

                                <Animator active={active}>
                                    <img className="object-cover contrast-[102%] brightness-110 pl-2  -translate-y-1   h-full" src={homeData.avator} alt="" />
                                </Animator>
                            </a>

                            <Animator active={active}>
                                <Text onMouseEnter={() => bleeps.clickHeader?.play()} as="a" href="/" className="font-primary font-normal  uppercase text-[23px]" style={{ color: theme.colors.primary.text(1), textShadow: '0 0 4px rgba(180,249,251,0.65)', }}>
                                    Somesh
                                </Text>
                                <Animator active={true}>
                                    <Animated animated={[aa('transform', 'rotate(0deg)', 'rotate(45deg)')]}>
                                        <svg style={{ stroke: theme.colors.primary.main(3) }} className="size-6 mb-0.5 translate-y-0.5 -rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                        </svg>
                                    </Animated>
                                </Animator>
                            </Animator>
                        </Animated>


                        {/* social links  */}
                        <Animator duration={{ enter: 1.2 }}>
                            <Animated animated={[aaVisibility(), aaFlicker()]} className="relative z-10 flex-wrap items-center justify-center hidden mt-2 mb-4 sm:flex gap-x-6 gap-y-1">
                                <SocialLinks />
                            </Animated>
                        </Animator>


                    </div>
                </Animator>
            </header>
        </>
    );
}

export default Header;