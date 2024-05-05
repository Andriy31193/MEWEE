import { FC, useState, useEffect } from "react";
import { decryptImage } from "../../entities/sharedStores/post-utils";

const DecryptedImg: FC<{ content: string }> = ({
    content
}) => {

    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        decryptImage(content).then(setImage).catch(console.error);
    }, []);
    return (
            <img style={{width: '50px', height:'50px'}} src={image}></img>
        
    );
};

export default DecryptedImg;
