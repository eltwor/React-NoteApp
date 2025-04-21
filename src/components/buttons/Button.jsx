export default function Button({children, ...props}) {
    const cssStyles = "cursor-pointer bg-indigo-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 hover:ring-2 hover:ring-indigo-800 hover:shadow-xl hover:shadow-indigo-500 focus:ring-indigo-300 focus:shadow-indigo-400 px-5 py-2"

    return <button className={cssStyles} {...props}>{children}</button>
}