import { Animated, Animator, Text, FrameSVGUnderline, aaFlicker, aaVisibility, useBleeps } from "@arwes/react"
import { theme, underlineStyle } from "../utlis/settings";

const HeadingComponent = ({ title, }) => {
    const bleeps = useBleeps();


    return (
        <Animated
            onMouseEnter={() => bleeps.clickHeader.play()}
            animated={[aaVisibility(), aaFlicker()]}
            className='underline mt-6 mx-auto sm:mx-0 w-[220px]'
            style={{
                position: 'relative',
                height: 45,
                textAlign: 'center',
                padding: theme.space(1.4),

            }}

        >

            <style>
                {underlineStyle}
            </style>

            <Animator>
                <FrameSVGUnderline
                    squareSize={32}
                    strokeWidth={2}
                />
            </Animator>



            <Animator>
                <Text
                    as="h1"
                    style={{ color: `hsla(60,85%,56%,1)` }}
                    className="font-medium tracking-normal uppercase text-[17px] font-primary hover:mix-blend-plus-lighter transition-all duration-150"
                >
                    {title}
                </Text>
            </Animator>
        </Animated>
    )
}

export default HeadingComponent;