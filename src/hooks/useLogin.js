import useShowToast from "./useShowToast";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import useAuthStore from "../store/authStore";

const useLogin = () => {
  const showToast = useShowToast();

  const [signInWithEmailAndPassWord, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    console.log(inputs.email, inputs.password);
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Please fill all the fields", "error");
    }

    try {
      const userCred = await signInWithEmailAndPassWord(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, login };
};

export default useLogin;