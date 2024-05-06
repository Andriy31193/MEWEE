import { FC, useState, useEffect } from "react";
import { decryptImage } from "../../entities/sharedStores/post-utils";

const DecryptedImg: FC<{ content: string, className?:string, size?: string }> = ({
    content,
    className,
    size = '50px'
}) => {

    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        decryptImage(content).then(setImage).catch(console.error);
    }, []);
    return (
            <img className={className} style={size!=="noset"?{width: size, height:size}:{}} src={image}></img>
        
    );
};

export default DecryptedImg;
