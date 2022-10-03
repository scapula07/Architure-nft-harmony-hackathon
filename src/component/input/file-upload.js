import { useRef, useState } from 'react'
import withLabel from 'HOC/withLabel'
import FileIcon from 'assests/misc/file.png'
import Button from 'component/button'
import { XMarkIcon } from '@heroicons/react/24/solid'

const FileUpload = ({ handleFile }) => {
    const [fileImage, setFileImage] = useState({
        src: "",
        alt: "upload an image",
    });

    const hiddenFileInput = useRef(null)

    const handleClick = event => {
        event.preventDefault()
        hiddenFileInput.current.click()
    }

    const handleChange = e => {
        const fileUploaded = e.target.files[0]
        if (fileUploaded) {
            setFileImage({
                src: URL.createObjectURL(fileUploaded),
                alt: fileUploaded.name,
            });
        }
        handleFile(fileUploaded)
    }

    const handleRemoveFile = () => {
        setFileImage({})
        handleFile(null)
    }

    return (
        <div className='w-full h-[230px] relative rounded-[5px] border border-dashed border-[#8A92B2] grid place-items-center'>
            {
                fileImage.src ? (
                    <img src={fileImage.src} alt="" />
                ) : (
                    <div className="flex flex-col items-center">
                        <img src={FileIcon} alt="" />
                        <p className="text-sm leading-4 capitalize text-[#62646C] text-center mt-4 mb-3">Images, videos, gifs and music files (Maximum 100MB)</p>
                        <Button
                            handleClick={handleClick}
                            title="upload file"
                            className="w-[134px] rounded-lg h-[42px]"
                        />
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            className="hidden"
                        />
                    </div>
                )
            }
            {
                fileImage.src ? <XMarkIcon className='h-5 w-5 text-white absolute top-5 right-5 cursor-pointer' onClick={handleRemoveFile} /> : null

            }
        </div >
    )
}

export default withLabel(FileUpload)