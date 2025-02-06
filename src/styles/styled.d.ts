import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            font: string,
            element: string,
            hover: string
        },
        images: {
            desktop: string,
            tablet: string,
            mobile: string
        }
    }
}