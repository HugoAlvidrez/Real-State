import { useAuth } from "./AuthContext"; 
import { useRouter } from "expo-router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user.authenticated) {
      router.push("/login/index");
    }
  }, [user, router]);

  return user.authenticated ? children : null; 
};

export default ProtectedRoute;
