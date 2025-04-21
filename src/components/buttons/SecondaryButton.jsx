export default function SecondaryButton({children,textColor, ...props}) {
    const cssStyles = "cursor-pointer border-b-4 border-indigo-500 rounded-md font-semibold transition duration-300 ease-in-out hover:shadow-md hover:shadow-indigo-500 px-5 py-2"
    return <button className={cssStyles + textColor} {...props}>{children}</button>
    // <button className="border-b-indigo-500"
}