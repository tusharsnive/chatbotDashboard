const { default: Card } = require("components/card")
const blueGrad = require('../../../../assets/img/profile/blueGrad.jpg')
const greenGrad = require('../../../../assets/img/profile/greenGrad.jpg')
const orangeGrad = require('../../../../assets/img/profile/orangeGrad.jpg')

const Subscriptions = () => {
    return (
        <>
            {/* <Card extra={"w-full h-full p-4"}>
                <div className="mt-6 mb-3 grid gap-4 md:!gap-14 grid-cols-3">
                    <div>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white text-center">
                            Basic
                        </h4>
                        <p className="text-base font-normal text-gray-600 text-center">Essential features, budget-friendly.</p>
                        <div className="flex justify-center items-end my-5">
                            <h4 className="text-3xl font-bold text-navy-700 dark:text-white text-center">
                                $45
                            </h4>
                            <p className="text-lg font-normal text-gray-600 text-center">/month</p>
                        </div>
                        <div className="flex items-center flex-col gap-5">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">1 Active Chatbot</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">1000 Valid Chats/month</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">7 Day Training History</p>
                                </div>
                            </div>
                            <button className="border-2 px-4 py-1 rounded-lg">Get Started</button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white text-center">
                            Basic
                        </h4>
                        <p className="text-base font-normal text-gray-600 text-center">Essential features, budget-friendly.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white text-center">
                            Basic
                        </h4>
                        <p className="text-base font-normal text-gray-600 text-center">Essential features, budget-friendly.</p>
                    </div>
                </div>
            </Card> */}
            <div className="grid grid-cols-3 gap-3">
                <Card>
                    <div className="py-5 px-5">
                        <div className=" rounded-lg px-3 py-5" style={{ backgroundImage: `url(${blueGrad})`, backgroundSize: 'cover' }}>
                            <h4 className="text-4xl font-bold  text-white ">
                                Basic
                            </h4>
                            <p className="text-base font-normal text-white">Essential features, budget-friendly.</p>
                        </div>
                        <div className="flex px-3 items-end my-5 h-[60px]">
                            <h4 className="text-5xl font-bold text-navy-700 dark:text-white text-center">
                                $45
                            </h4>
                            <p className="text-lg font-normal text-gray-600 text-center">/month</p>
                        </div>
                        <div className="flex  flex-col gap-5 px-3">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">1 Active Chatbot</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">1000 Valid Chats/month</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">7 Day Training History</p>
                                </div>
                            </div>
                            <button className="border-2 px-4 py-1 rounded-lg uppercase mt-2 mb-4">Get Started</button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="py-5 px-5">
                        <div className=" rounded-lg px-3 py-5" style={{ backgroundImage: `url(${greenGrad})`, backgroundSize: 'cover' }}>
                            <h4 className="text-4xl font-bold  text-white ">
                                Premium
                            </h4>
                            <p className="text-base font-normal text-white">Enhanced capabilities, premium experience.</p>
                        </div>
                        <div className="flex px-3 items-end my-5 h-[60px]">
                            <h4 className="text-5xl font-bold text-navy-700 dark:text-white text-center">
                                $129
                            </h4>
                            <p className="text-lg font-normal text-gray-600 text-center">/month</p>
                        </div>
                        <div className="flex  flex-col gap-5 px-3">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">5 Active Chatbot</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">5000 Valid Chats/month</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">3 Month Training History</p>
                                </div>
                            </div>
                            <button className="border-2 px-4 py-1 rounded-lg uppercase mt-2 mb-4">Get Started</button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="py-5 px-5">
                    <div className=" rounded-lg px-3 py-5" style={{ backgroundImage: `url(${orangeGrad})`, backgroundSize: 'cover' }}>
                            <h4 className="text-4xl font-bold  text-white ">
                            Enterprise
                            </h4>
                            <p className="text-base font-normal text-white">Comprehensive solutions for growth.</p>
                        </div>
                        <div className="flex px-3 items-end my-5">
                            <h4 className="text-3xl font-bold text-navy-700 dark:text-white h-[60px]">
                            Get in touch with the team
                            </h4>
                            
                        </div>
                        <div className="flex  flex-col gap-5 px-3">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">Unlimited Active Chatbots</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">No Limits On Valid Chats</p>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10a37f" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                                    <p className="text-lg font-normal text-navy-700 dark:text-white">No Limits On Training History</p>
                                </div>
                            </div>
                            <button className="border-2 px-4 py-1 rounded-lg uppercase mt-2 mb-4">Consultation</button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Subscriptions