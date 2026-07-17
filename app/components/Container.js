export default function Container({children, classNames, as = 'div'}) {
    const Tag = as;
    return (
        <Tag className={`px-20 1024:px-40 px-20 1024:pb-40 ${classNames || ''}`}>
            {children}
        </Tag>
    )
}