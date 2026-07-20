export default function Grid({children, className}) {
    return (
        <div className={`grid grid-cols-12 gap-x-16 gap-y-24 ${className ?? ''}`}>
            {children}
        </div>
    )
}