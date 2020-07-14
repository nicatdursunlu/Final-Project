type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    icon: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#ff6767",
    background: "#000",
    icon: "pink",
    card: "red",
    text: "blue",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

export const LightTheme: Theme = {
  dark: true,
  colors: {
    primary: "#ff6767",
    background: "#fff",
    icon: "pink",
    card: "blue",
    text: "red",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};
