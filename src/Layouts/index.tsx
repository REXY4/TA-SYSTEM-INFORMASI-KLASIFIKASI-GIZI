import { Layout, LayoutColumn, LayoutColumns, LayoutContainer, LayoutContent } from '@paljs/ui/Layout';
import React, { useEffect, useRef, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from './themes';
// import icons from '@paljs/icons';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { Sidebar, SidebarBody, SidebarRefObject } from '@paljs/ui/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO, { SEOProps } from 'components/SEO';
// import Link from 'next/link';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingPage from 'components/LoadingPage';
import ModalAlert from 'components/ModalAlert';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthUseCase from 'use-case/auth.action';
import Header from './Header';
import SimpleLayout from './SimpleLayout';
import menuItems from './menuItem';



const getDefaultTheme = (): DefaultTheme['name'] => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as DefaultTheme['name'];
  } else {
    const hours = new Date().getHours();
    return hours > 6 && hours < 19 ? 'default' : 'dark';
  }
};

const LayoutPage: React.FC<SEOProps> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const router = useRouter();
  const menuRef = useRef<MenuRefObject>(null);
  const [seeHeader, setSeeHeader] = useState(true);
  const { logout } = AuthUseCase();

  const getState = (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => {
    setSeeHeader(state !== 'compacted');
  };


  const changeTheme = (newTheme: DefaultTheme['name']) => {
    setTheme(newTheme);
    typeof localStorage !== 'undefined' && localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = getDefaultTheme();
    if (localTheme !== theme && theme === 'default') {
      setTheme(localTheme);
    }
  }, []);

  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };




  const authLayout = router.pathname.startsWith('/auth');


  return (
    <div>
      <div>
        <SEO title={''} res={rest} children={undefined} />
        <ThemeProvider theme={themes(theme, dir)}>
          <div>
            <SimpleLayout />
            <Layout dir={dir} className={!authLayout ? 'auth-layout' : ''}>
              {!authLayout && (
                <Header
                  dir={dir}
                  changeDir={changeDir}
                  theme={{ set: changeTheme, value: theme }}
                  toggleSidebar={() => sidebarRef.current?.toggle()}
                />
              )}
              <LayoutContainer>
                {!authLayout && (
                  <Sidebar
                    getState={getState}
                    ref={sidebarRef}
                    property="start"
                    containerFixed
                    responsive
                    className="menu-sidebar"
                  >
                    {seeHeader && (
                      <header>
                        <div className="d-flex">
                          <FontAwesomeIcon icon={faCircleUser} style={{
                            width: "50px",
                            height: "50px"
                          }} />
                          <p style={{
                            marginLeft: "15px",
                            marginTop: "10px",
                            fontWeight: "bold"
                          }}>Admin</p>
                        </div>
                      </header>
                    )}
                    <SidebarBody>
                      <Menu
                        nextJs
                        className="sidebar-menu"
                        Link={Link}
                        ref={menuRef}
                        items={menuItems}
                        currentPath={router.pathname}
                        toggleSidebar={() => sidebarRef.current?.hide()}
                      />
                      <div style={{
                        position: "fixed",
                        bottom: 20,
                      }}>
                        <a
                          onClick={logout}
                          href="#" style={{
                            textDecoration: "none",
                            textTransform: "none",
                            color: "lightred",
                            fontWeight: "bold"
                          }}>
                          <FontAwesomeIcon icon={faRightFromBracket} style={{
                            marginRight: "5px",
                            color: "lightred"
                          }} />
                          Logout
                        </a>
                      </div>
                    </SidebarBody>
                  </Sidebar>
                )}
                <ModalAlert />
                <LoadingPage />
                <LayoutContent>
                  <LayoutColumns>
                    <LayoutColumn className="main-content">{
                      children
                    }</LayoutColumn>
                  </LayoutColumns>
                </LayoutContent>
              </LayoutContainer>
            </Layout>
          </div>
        </ThemeProvider >
      </div >

    </div>
  );
};

export default LayoutPage;
