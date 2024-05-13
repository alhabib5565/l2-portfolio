

const uploadImage = async (image: File) => {
    try {
        const formData = new FormData();
        formData.append("image", image);
        console.log(process.env.VITE_IMGBB_API)
        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=92b030c52508bcf328cbed22ad096660`,
            {
                method: "POST",
                body: formData,
            }
        );

        if (response.ok) {
            const { data } = await response.json();
            return data;
        } else {
            throw new Error('Image upload failed');
        }
    } catch (error) {
        throw new Error(`An error occurred during image upload: ${error}`);
    }
};

export { uploadImage };