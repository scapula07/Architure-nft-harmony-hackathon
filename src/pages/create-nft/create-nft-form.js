import { useState } from 'react';
import TextArea from 'component/input/text-area'
import TextInput from 'component/input/text-input'
import FileUpload from 'component/input/file-upload';
import Button from 'component/button';
import CheckBox from 'component/input/checkbox';

const CreateNftForm = ({setShowListNftModal}) => {
    const initialFormData = {
        name: '',
        url: '',
        amount: '',
        description: '',
        file: {},
        isCopyRight: false

    }

    const [formData, setFormData] = useState(initialFormData);

    const handleTextChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFile = (file) => setFormData(
        prev => ({
            ...prev,
            file,
        }))

    const handleChecked = () => setFormData(
        prev => ({
            ...prev,
            isCopyRight: !formData.isCopyRight
        })
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowListNftModal(true)
        console.log(formData)
    }


    return (
        <form className='space-y-8 mt-8'>
            <FileUpload handleFile={handleFile} title="upload file" />
            <TextInput
                title="name*"
                placeholder='Item Name'
                id="name"
                name="name"
                handleTextChange={handleTextChange}
                value={formData.name}
                required
            />
            <TextInput
                type="url"
                title="External link"
                placeholder='Your Site'
                handleTextChange={handleTextChange}
                id="link"
                name="url"
                value={formData.url}
            />
            <TextArea
                title="Item Description*"
                name="description"
                id="description"
                handleTextChange={handleTextChange}
                value={formData.description}
                placeholder="Detailed description of your item"
            />
            <TextInput
                type="number"
                title="buy now price"
                placeholder='Enter Amount'
                id="link"
                name="amount"
                value={formData.amount}
                handleTextChange={handleTextChange}
                required
            />
            <CheckBox title="Transfer copyright when purchased?" handleChecked={handleChecked} value={formData.isCopyRight} id='copyright' />
            <Button handleClick={handleSubmit} title="list item" className="h-12 rounded-lg" />
        </form>
    )
}

export default CreateNftForm