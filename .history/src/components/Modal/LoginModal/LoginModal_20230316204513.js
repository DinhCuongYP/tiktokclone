import { useState } from 'react';
import { loginModalData } from '~/temp/data/modal';
import ModalWrapper from '../ModalWrapper';
function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tabLists, setTabLists] = useState([loginModalData]);
    return (
        <ModalWrapper>
            <h1>Test</h1>
        </ModalWrapper>
    );
}

export default LoginModal;
