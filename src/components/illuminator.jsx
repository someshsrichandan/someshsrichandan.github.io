import { createFrameOctagonClip } from '@arwes/frames'
import { Illuminator } from '@arwes/react-frames'

const Lighter = () => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                overflow: 'clip',
                clipPath: createFrameOctagonClip({ squareSize: 100 }),
                borderBottom: '2px solid hsl(180 75% 60%)',
            }}
        >
            <Illuminator color="hsl(180 50% 50% / 20%)" size={300} />
        </div>
    )
}

export default Lighter
