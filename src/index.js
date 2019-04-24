import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAngleLeft,
    faAngleRight,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faCaretSquareRight,
    faCaretSquareLeft,
    faArrowCircleLeft,
    faChevronCircleLeft,
    faFemale,
    faAngleDown,
    faAngleUp,
    faPencilAlt,
    faPlus,
    faDragon,
} from '@fortawesome/free-solid-svg-icons'
import {
    faClone,
    faTrashAlt,

    } from '@fortawesome/free-regular-svg-icons'
library.add(
    faAngleLeft,
    faAngleRight,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faCaretSquareRight,
    faCaretSquareLeft,
    faArrowCircleLeft,
    faChevronCircleLeft,
    faFemale,
    faAngleDown,
    faAngleUp,
    faClone,
    faTrashAlt,
    faPencilAlt,
    faPlus,
    faDragon
    )
require('dotenv').config()



const App = () => {
    return(
        <BrowserRouter>
            <Routes />

        </BrowserRouter>
        )
}
ReactDOM.render(<App/>, document.getElementById('root'));