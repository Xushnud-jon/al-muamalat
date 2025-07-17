
import { useLocation } from 'react-router-dom';

export default function ShowLayout({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";

  return !(isLoginPage || isRegisterPage) ? children : null;
}
