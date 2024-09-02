import { MovingLines } from '@arwes/react'
import BgPuffs from './puffs'
import { theme } from '../utlis/settings'

const Background = () => {
    return (
        <div className="fixed w-full h-full bg-opacity-50 bg-center bg-no-repeat bg-cover bg-big">
            <MovingLines
                lineColor={theme.colors.primary.deco(2)}
                lineWidth={3}
            />
            <BgPuffs />
        </div>
    )
}

export default Background
