type props = {
    align?: 'left' | 'right';
    caption: string;
    height: string;
    src: string;
    width: string;
};
export default function Figure({ align, caption, height, src, width }: props) {
    const classes = align === 'right' ? 'float-right ml-5' : 'float-left mr-5';
    return (
        <figure className={`${classes} mb-5`}>
            <img
                loading="lazy"
                src={src}
                alt={caption}
                className="p-2 border border-gray-300"
                width={width}
                height={height}
            />
            <figcaption className="text-sm pt-2">{caption}</figcaption>
        </figure>
    );
}
