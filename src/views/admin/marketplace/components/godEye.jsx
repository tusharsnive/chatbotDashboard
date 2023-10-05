function GodEye() {
    return (
        <div align="left">
            <label className="text-navy-700 dark:text-white">Website Link</label>
            <input className="w-full border-gray-700 rounded-lg border-2 text-lg px-3 py-2 mb-6 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1" placeholder="Enter website link" />
            {/* <label className="text-navy-700 dark:text-white">Article Content</label>
            <textarea className="w-full border-gray-700 rounded-lg border-2 text-lg px-3 py-2 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1" rows={8} /> */}
            <div align="right">
                <button className=" dark:bg-toggle-dark bg-toggle-light text-white py-1 px-16 rounded-lg ">Scan now</button>
            </div>
        </div>
    )
}

export default GodEye