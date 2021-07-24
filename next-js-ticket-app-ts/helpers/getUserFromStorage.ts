import { UserFrom } from "../interfaces/User.interface";

export const getUserFromStorage = (): UserFrom | undefined => {
  const isServer = () => typeof window === `undefined`;

  if (!isServer()) {
    return {
      nameUser: window.localStorage.getItem("user") || null,
      desktop: window.localStorage.getItem("desktop") || null,
    };
  }
};
