"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

interface IAdminProtectedProps {
  children: React.ReactNode;
}

const AdminProtected: React.FunctionComponent<IAdminProtectedProps> = ({
  children,
}) => {
  // USE STATES
  const [conditionMeet, setConditionMeet] = React.useState<string | boolean>(
    ""
  );

  //   DECLARES
  const router = useRouter();

  // USE EFFECTS
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("minadoggledin") === "true";
    const admin = localStorage.getItem("_inlogegdwoh") === "admin";
    if (!admin || !isLoggedIn) {
      router.push("/");
      setConditionMeet(false);
    } else {
      setConditionMeet(true);
    }
  }, []);

  return conditionMeet ? <>{children}</> : null;
};

export default AdminProtected;
