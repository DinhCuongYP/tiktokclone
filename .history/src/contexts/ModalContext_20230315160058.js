import { createContext } from 'react';

export const ModalContextKey = createContext();
function ModalContext() {
    return <ModalContextKey.Provider></ModalContextKey.Provider>;
}

export default ModalContext;
