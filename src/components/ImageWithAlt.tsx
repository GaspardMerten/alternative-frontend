import {IImage} from "@/models/IImage";
import React from "react";
import Image from "next/image";

export default function ImageWithAlt({image, width, height, className = ""}: {
    image?: IImage,
    width: number,
    height: number,
    className?: string
}) {
    if (!image) {
        return <div></div>
    }
    return <Image src={image.image} alt={image.alt} width={width} height={height}
                  className={className}>

    </Image>
}