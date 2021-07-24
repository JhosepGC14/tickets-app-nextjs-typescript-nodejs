import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { UserFrom } from "../interfaces/User.interface";
import { getUserFromStorage } from "../helpers/getUserFromStorage";

function WithoutAuth(Component: React.ComponentType) {
  const ComponentFC = () => {
    //hooks
    const isServer = () => typeof window === `undefined`;
    const router = useRouter();
    const [userForm] = useState<UserFrom | null | undefined>(
      getUserFromStorage()
    );

    if (!isServer()) {
      if (!userForm?.desktop && !userForm?.nameUser) {
        router.replace("/login");
        return null;
      }
    }

    return <Component />;
  };

  return ComponentFC;
}

export default WithoutAuth;
