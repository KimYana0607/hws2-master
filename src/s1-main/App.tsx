import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import HW1 from '../s2-homeworks/hw01/HW1';
import HW2 from "../s2-homeworks/hw02/HW2";
import HW3 from "../s2-homeworks/hw03/HW3";
import HW4 from "../s2-homeworks/hw04/HW4";
// import HW2 from '../s2-homeworks/hw02/HW2';
// import HW3 from '../s2-homeworks/hw03/HW3';
// import HW4 from '../s2-homeworks/hw04/HW4';
// import HW5 from '../s2-homeworks/hw05/HW5';

function App() {
    return (
        <div className={s.App}>
            <HashRouter>
                <Routes>
                    {/*<Route path="/" element={<HW1 />} />*/}
                    {/* Раскомментируй по мере добавления домашних */}
                    {/*<Route path="/" element={<HW2 />} />*/}
                    {/*<Route path="/hw2" element={<HW2 />} />*/}
                    {/*<Route path="/" element={<HW3 />} />*/}
                    {/* <Route path="/hw3" element={<HW3 />} />*/}
                    <Route path="/" element={<HW4 />} />
                     <Route path="/hw4" element={<HW4 />} />
                    {/* <Route path="/hw5" element={<HW5 />} /> */}
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
