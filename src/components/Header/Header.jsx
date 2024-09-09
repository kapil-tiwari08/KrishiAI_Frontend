import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
  ];

  return (
    <header className="py-2 shadow backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Logo className="logo" />
            <h1 className="header-title">कृषि.AI</h1>
          </div>

          {/* Navigation Items */}
          <ul className="flex ml-auto space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-6 py-2 duration-200 text-base hover:bg-green-500 rounded-full font-serif"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
