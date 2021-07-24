import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserFrom } from "../interfaces/User.interface";
import { getUserFromStorage } from "../helpers/getUserFromStorage";

function WithAuth(Component: React.ComponentType) {
  const ComponentFC = () => {
    //hooks
    const router = useRouter();
    const [userForm, setUserForm] = useState<UserFrom | null | undefined>({
      desktop: null,
      nameUser: null,
    });

    //apenas renderice la pagina va a setear el estado
    useEffect(() => {
      setUserForm(getUserFromStorage());
    }, []);

    // validamos si existe el usuario en local storage
    // si en caso existe se redirecciona al escritorio
    if (userForm?.desktop && userForm?.nameUser) {
      router.replace("/escritorio-tickets");
      return null;
    }

    return <Component />;
  };

  return ComponentFC;
}

export default WithAuth;
