import * as React from "react";
import { styled } from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Image = styled.img`
    border-radius: 5px;
    /* filter: drop-shadow(0px 0px 3px white); */
    width: 100%;
`;
export default function ImageLightbox({ imageSrc, imageAlt }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Image src={imageSrc} onClick={() => setOpen(true)} width={350} />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    {
                        src: imageSrc,
                        alt: imageAlt,
                        width: 3840,
                        height: 2560,
                    },
                ]}
            />
        </>
    );
}
