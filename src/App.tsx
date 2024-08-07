import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { checkLogined, checkTokenExpire } from 'utils/helpers';
import { renderRoutes } from 'routers';
import { adminRoutes, publicRoutes } from 'config/routePath.config';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth';
export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {

    const { loading, user } = useAuth();

    if (loading) {
        return (
            <LoadingWrapper>
                <Spin size="large" />
            </LoadingWrapper>
        );
    }

    return (
        <BrowserRouter>
            {!checkTokenExpire() || (user != null) || checkLogined()? (
                renderRoutes(adminRoutes)
            ) : (
                renderRoutes(publicRoutes)
            )}
        </BrowserRouter>
    );


    // return (
    //     <AuthProvider>
    //         <AppRouter />
    //     </AuthProvider>

    // )
}

export default App;

{/* <Routes >
<Route path="/" element={<Login />} />

</Routes> */}
