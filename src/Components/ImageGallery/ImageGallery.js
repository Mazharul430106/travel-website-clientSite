import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
]


const ImageGallery = () => {

    const viewimage =(img, i)=>{
        console.log(img, i);
    }



    return (
        <>
            <div className='xl:p-5 lg:p-5'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                                onClick={()=> viewimage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default ImageGallery;