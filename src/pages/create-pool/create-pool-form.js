import Button from "component/button"
import TextInput from "component/input/text-input"
import withTransactionModal from "HOC/withTransactionModal";
import { useState } from "react";

const CreatePoolForm = ({ setShowModal }) => {
    const initialFormData = {
        name: '',
        minimumStake: '',
        numberOfStakers: '',
        amount: ''

    }

    const [formData, setFormData] = useState(initialFormData);

    const handleTextChange = (e) => setFormData(
        prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
        console.log("pool created")
    }
    return (
        <form className='space-y-8 mt-8'>
            <TextInput
                title="name of pool*"
                name="name"
                id="name"
                placeholder="Pool#1002"
                value={formData.name}
                handleTextChange={handleTextChange}
                required
            />
            <TextInput
                title="minimum stake per user"
                type="number"
                name="minimumStake"
                id="minimumStake"
                placeholder="$0"
                value={formData.minimumStake}
                handleTextChange={handleTextChange}
                required
            />
            <TextInput
                title="number of stakers"
                type="number"
                name="numberOfStakers"
                id="numberOfStakers"
                placeholder="$0"
                value={formData.numberOfStakers}
                handleTextChange={handleTextChange}
                required
            />
            <TextInput
                title="end date"
                type="date"
                name="endDate"
                id="endDate"
                placeholder="$0"
                value={formData.endDate}
                handleTextChange={handleTextChange}
                required
            />
            <TextInput
                title="enter amount to stake"
                type="number"
                name="amount"
                id="amount"
                placeholder="$0"
                value={formData.amount}
                handleTextChange={handleTextChange}
                required
            />
            <Button handleClick={handleSubmit} title="create pool" className="h-12 rounded-lg" />
        </form>
    )
}

export default withTransactionModal(CreatePoolForm)