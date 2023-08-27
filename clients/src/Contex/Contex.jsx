import { createContext, useState } from 'react';
export const mainContext = createContext(null);

function ContextApi({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const [todo, setTodo] = useState({
    title: '',
    comment: '',
    imageUrl: '',
    description: '',
  });
  const [todos, setTodos] = useState([]);
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem('user')
  );

  const values = {
    email,
    setEmail,
    password,
    todo,
    setTodo,
    todos,loading, setLoading,
    setTodos,
    setPassword,
    registerInformation,
    authenticated,
    setAuthenticated,
    setRegisterInformation,
    isRegistering,
    setIsRegistering,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}

export default ContextApi;
