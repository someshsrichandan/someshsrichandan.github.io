import { createAppStylesBaseline, createAppTheme } from "@arwes/react";

export const theme = createAppTheme({ settings: { dark: true } });
export const stylesBaseline = createAppStylesBaseline(theme);


export const octagonStyle = `
.octagon .arwes-react-frames-framesvgoctagon [data-name=bg] {
    color: ${theme.colors.primary.deco(2)};
    filter: drop-shadow(0 0 4px hsl(60, 75%, 10%))                           
}
.octagon .arwes-react-frames-framesvgoctagon [data-name=line] {
    color: hsl(${theme.hues.primary}, 75%, 50%);
    filter: drop-shadow(0 0 4px hsl(${theme.hues.primary}, 75%, 50%))                            
}
`



export const octagonStyle2 = `
.octagon .arwes-react-frames-framesvgoctagon [data-name=bg] {
    color: ${theme.colors.primary.deco(2)};
    filter: drop-shadow(0 0 4px hsl(${theme.hues.secondary}, 75%, 10%))                           

},
.octagon .arwes-react-frames-framesvgoctagon [data-name=line] {
    color: hsl(60, 75%, 50%);
    filter: drop-shadow(0 0 4px hsl(60, 75%, 50%))                            
}
`




export const underlineStyle = `
.underline .arwes-react-frames-framesvgunderline [data-name=bg] {
    color: ${theme.colors.primary.deco(2)};

},
`




export const kranoxStyle = `
.kranox .arwes-react-frames-framesvgkranox [data-name=bg] {
    color: ${theme.colors.primary.deco(1)};
    filter: drop-shadow(0 0 4px hsl(60, 75%, 10%))
}
.kranox .arwes-react-frames-framesvgkranox [data-name=line] {
    color: hsl(180, 75%, 50%);
    filter: drop-shadow(0 0 4px hsl(180, 75%, 50%))
}
`


export const linesStyle = `
.lines .arwes-react-frames-framesvglines [data-name=bg] {
    color: ${theme.colors.primary.deco(2)};
}
.lines .arwes-react-frames-framesvglines [data-name=line] {
    color: hsl(190, 75%, 50%);
    filter: drop-shadow(0 0 4px hsl(190, 75%, 50%))
}
`




export const animatorsSettings = {
    // Durations in seconds.
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04
    }
};


export const soundSettings = {
    master: {
        volume: 1
    },

    bleeps: {
        clickLink: {
            sources: [{ src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }]
        },

        clickHeader: {
            sources: [{ src: './sounds/click.mp3', type: 'audio/mpeg' }]
        },

        intro: {
            sources: [
                { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }
            ]
        },

        error: {
            sources: [{ src: 'https://arwes.dev/assets/sounds/error.mp3', type: 'audio/mpeg' }]
        },

        info: {
            sources: [{ src: 'https://arwes.dev/assets/sounds/info.mp3', type: 'audio/mpeg' }]
        },

        typeLong: {
            sources: [{ src: 'https://arwes.dev/assets/sounds/type.mp3', type: 'audio/mpeg' }]
        },


        typeShort: {
            sources: [{ src: './sounds/typing.mp3', type: 'audio/mpeg' }]
        },

        success: {
            sources: [{ src: './sounds/success.mp3', type: 'audio/mpeg' }]
        },

        abort: {
            sources: [{ src: './sounds/abort.mp3', type: 'audio/mpeg' }]
        },

    }
};



