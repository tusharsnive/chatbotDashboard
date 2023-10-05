function AppEle({icon,title,desc}) {
    return (
        <div className="w-full bg-white dark:bg-navy-700 p-5 rounded-lg">
            <img src={icon} className="w-4/12 pb-3"></img>
            <h1 className="text-lg font-semibold text-navy-700 dark:text-white">{title}</h1>
            <h4 className="text-navy-700 dark:text-white">{desc}</h4>
        </div>
    )
}

export default AppEle