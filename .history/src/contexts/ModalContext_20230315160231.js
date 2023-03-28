import { createContext } from 'react';

export const ModalContextKey = createContext();
function ModalContext({ children }) {
    return <ModalContextKey.Provider>{children}</ModalContextKey.Provider>;
}

export default ModalContext;
