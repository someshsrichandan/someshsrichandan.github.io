import { Animator, FrameSVGNefrex, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { useRef } from "react";
import { theme } from "../utlis/settings";

const NefraxFrame = ({ children, squareSize, padding }) => {
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    return (
        <div
            className="Nefrex mt-10 mb-[150px] md:py-14     w-full "
            style={{
                padding: theme.space(padding ?? [15, 10]),
                position: 'relative',
                textAlign: 'left',
            }}
        >

            <style>{`
                        .Nefrex .arwes-react-frames-framesvgnefrex [data-name=bg] {
                            color: ${theme.colors.primary.deco(5)};
                            filter: drop-shadow(0 0 4px hsl(180, 75%, 10%))
                        }
                        .Nefrex .arwes-react-frames-framesvgnefrex [data-name=line] {
                            color: hsl(180, 75%, 50%);
                            filter: drop-shadow(0 0 4px hsl(180, 75%, 50%))
                        }
                    `}</style>

            <Animator>
                <FrameSVGNefrex
                    elementRef={svgRef}
                    onRender={onRender}
                    padding={4}
                    strokeWidth={2}
                    squareSize={squareSize ?? 50}
                    smallLineLength={32}
                    largeLineLength={128}
                />
            </Animator>

            {children}

        </div>
    )
}


export default NefraxFrame;