import { useState } from "react";

import { Input, Button } from "@chakra-ui/react";

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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
        placeholder="password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default LogIn;
