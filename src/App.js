import Row2Post from './components/2RowPost';
import './App.css';
import AppHeader from './components/Appheader';
import ImagesDistric from './components/Image-distric';
import Districs from './data/distric';
import { useState } from 'react';
import Appsearch from './components/Appsearch';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { AuthProvider } from './components/Auth';
import React from 'react';
import firebaseConfig from './config';
import ImageGoogle from './components/imageGooglemaptest';



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function App() {
  const [selecteddistric, setSeclecteddistric] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [user] = useAuthState(auth);

  function onImageDistricClick(popdistric) {
    setSeclecteddistric(popdistric);
  }

  function onImageCloseClick() {
    setSeclecteddistric(null)
  }

  const filteredDistrics = Districs.filter((distric) => {
    return distric.title.includes(searchText);

  });

  const districElements = filteredDistrics.map((distric, index) => {
    return <ImagesDistric key={index} distric={distric} onDistricclick={onImageDistricClick}/>;

  });

  let row223post = null;
  if (!!selecteddistric) {
    row223post = <Row2Post districx={selecteddistric} onBgClick={onImageCloseClick}/>

  }
  return (
<div className="app">
      <AppHeader />
      <AuthProvider> {/*ห่อไว้เข้าตรงก่อนเลยนี้*/}
        {user ? (
          // ถ้าสมัครแล้วลงตรงนี้
          <>
            <section className="app-section">
              <div className="app-container">
                <Appsearch value={searchText} onValueChange={setSearchText} />
                <div className="app-grid">{districElements}</div>
              </div>
            </section>
            {row223post}
            <ImageGoogle />
            <Logout />
          </>
        ) : (
          // ยังไม่ได้สมัครลงตรงนี้
          <div className="auth-container">
            <Login />
            <Signup />
          </div>
        )}
      </AuthProvider>
    </div>
  )
}

export default App;
