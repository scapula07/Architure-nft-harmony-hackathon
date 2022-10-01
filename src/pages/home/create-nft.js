import Button from 'component/button';
import React from 'react'

const CreateNft = () => {
    return (
        <section className='bg-[#282828] layout-container rounded-2xl mt-10 md:mt-[60px] py-10 md:py-[60px] px-5 mb-[70px] md:px-10'>
            <div className="md:grid grid-cols-[2fr_1fr] items-center">
                <div className="text-white text-center mb-3 md:text-left">
                    <h1 className="font-bold text-2xl mb-[15px] md:text-4xl md:leading-[41px]">Create your own NFT!</h1>
                    <p className="text-[18px] leading-[29px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum aspernatur quis rem excepturi natus et voluptates, neque totam dolores quo earum voluptatum! Expedita quidem ex accusamus doloribus tenetur cupiditate at.</p>
                </div>
                <div>
                    <Button
                        href='/create-nft'
                        title="create nft"
                        className="w-[100px] font-medium h-8 mx-auto md:mx-0 md:ml-auto md:w-[105px] md:h-10 md:rounded-[40px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default CreateNft;