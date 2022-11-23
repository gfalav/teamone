import { atom } from "recoil";

export const drawerWidthState = atom({
    key: 'drawerWidthState',
    default: 240
})

export const isMobileState = atom({
    key: 'isMobileState',
    default: false
})

export const mainMenuState = atom({
    key: 'mainMenuState',
    default: false
})

export const userLogged = atom({
    key: 'userLogged',
    default: 'Gustavo Falavigna'
})