export interface Theme {
    colors: {
      cyan: {
          strong: string;
          dark: string;
          darkGrayish: string;
          grayish: string;
          lightGrayish: string;
          extraLightGrayish: string;
      };
      white: string;
    };
    fonts: {
        primary: string;
    };
    background: string;
    inputBackground: string;
};

export const defaultTheme: Theme = {
    colors: {
      cyan: {
        strong: "hsl(172, 67%, 45%)",
        dark: "hsl(183, 100%, 15%)",
        darkGrayish: "hsl(186, 14%, 43%)",
        grayish: "hsl(184, 14%, 56%)",
        lightGrayish: "hsl(185, 41%, 84%)",
        extraLightGrayish: "hsl(189, 41%, 97%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    fonts: {
        primary: "Space Mono"
    },
    background: "hsl(185, 41%, 84%)",
    inputBackground: '#F3F9FA',
};