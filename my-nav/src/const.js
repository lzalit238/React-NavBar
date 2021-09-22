import {Home, Nav, About} from './Components'

export const links = [
    {
        id: 1,
        url: '/',
        text: "Home",
        page: <Home />
    },
    {
        id: 2,
        url: '/about',
        text: "About",
        page: <About />
    },
    {
        id: 3,
        url: '/nav',
        text: "Nav",
        page: <NavBar />
    }
]

export const socials = [
    {
        id: 1,
        url: '',
        name: 'Facebook'
    },
    {
        id: 2,
        url: '',
        name: 'Twitter'
    },{
        id: 3,
        url: '',
        name: 'Linkedn'
    },
]