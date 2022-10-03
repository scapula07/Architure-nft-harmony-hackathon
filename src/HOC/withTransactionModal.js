import { useState } from "react";
import TransactionAlertModal from "component/modal/transaction-alert-modal";


const withTransactionModal = (WrappedComponent) => {
    return (props) => {
        const [showModal, setShowModal] = useState(false);
        return (
            <>
                {showModal && <TransactionAlertModal {...{ setShowModal, showModal }} />}
                <WrappedComponent {...{ showModal, setShowModal, ...props }} />
            </>
        )
    }
}

export default withTransactionModal