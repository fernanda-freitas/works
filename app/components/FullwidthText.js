export default function FullwidthText({text, tag, className}) {
    const Tag = tag ? tag : 'h1'

    return (
        <Tag className={`container-fill-text font-normal ${className ?? ''}`}>
            <span className="container-fill-text__container text-trim">
                <span className="container-fill-text__display text-trim">{text}</span>
            </span>
            <span className="container-fill-text__reference text-trim" aria-hidden="true">{text}</span>
        </Tag>
    )
}