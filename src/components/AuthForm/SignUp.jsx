import { useState } from "react";

import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  return (
    <>
      <Input
        placeholder="email"
        fontSize={14}
        size={"sm"}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="userName"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.userName}
        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
      />
      <Input
        placeholder="fullName"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="password"
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"small"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} w="full">
            {error.message}
          </AlertIcon>
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        onClick={() => signup(inputs)}
        isLoading={loading}
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
