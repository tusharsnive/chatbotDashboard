import { useEffect, useState } from "react"
import { ChatData } from "./dummyData"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { WrapItem } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import Card from "components/card";
import Dropdown from "components/dropdown";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";

function ChatsScreen() {
    const [category, setCategory] = useState(0);
    const [chatSelected, setChatSelected] = useState()
    const [chatHistory, setChatHistory] = useState({ chat: [] });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        for (let ele in ChatData) {
            if (ChatData[ele].category === 0) {
                setChatSelected(ChatData[ele].id);
                // setChatHistory(ChatData[ele].chat)
                // console.log("History",ChatData[ele].chat);
                changeChatHistory(ChatData[ele].id)
                break;
            }
        }
    }, [])

    function changeChatHistory(id) {
        for (let ele in ChatData) {
            if (ChatData[ele].id === id) {
                setChatHistory(ChatData[ele])
                setName(ChatData[ele].userName)
                break;
            }
        }
    }

    return (
        <div className="h-full min-h-[84vh] pt-4">
            <div className="mb-4">
                <Card>
                    <div className="flex justify-between px-10 py-4">
                        <h1 className="dark:text-white text-2xl  font-bold">Category</h1>
                        <Dropdown
                            button={
                                <button className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 rounded-xl px-5 py-3 text-base font-medium text-white transition duration-200 dark:text-white">
                                    Select
                                </button>
                            }
                            children={
                                <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-[0_20px_25px_-5px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                    <div className="mt-3 ml-4">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                PUBLIC
                                            </p>{" "}
                                        </div>
                                    </div>
                                    <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                                    <div className="mt-3 ml-4 flex flex-col">
                                        <p
                                            className="text-sm text-gray-800 dark:text-white hover:dark:text-white flex items-center"
                                        >
                                            <span className='text-green-400 text-2xl pr-2'>&#x2022;</span>Active
                                        </p>
                                        <p
                                            className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white flex items-center"
                                        >
                                            <span className='text-red-400 text-2xl pr-2'>&#x2022;</span>Closed
                                        </p>

                                    </div>
                                    <div className="mt-3 ml-4">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                PRIVATE
                                            </p>{" "}
                                        </div>
                                    </div>
                                    <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                                    <div className="mt-3 ml-4 flex flex-col">
                                        <p
                                            className="text-sm text-gray-800 dark:text-white hover:dark:text-white flex items-center"
                                        >
                                            <span className='text-green-400 text-2xl pr-2'>&#x2022;</span>Active
                                        </p>
                                        <p
                                            className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white flex items-center"
                                        >
                                            <span className='text-red-400 text-2xl pr-2'>&#x2022;</span>Closed
                                        </p>
                                    </div>
                                </div>
                            }
                            classNames={"py-2 mt-12 -left-[150px] w-max"}
                        />
                    </div>
                    {/* <h1 className="dark:text-white text-lg font-semibold">Public</h1>
                    <ul className="px-3">
                        <li onClick={() => { setCategory(0) }}><h1 className={`dark:text-white cursor-pointer px-2 rounded-lg ${category === 0 ? "bg-gray-200 dark:bg-gray-700" : ''} `} ><span className='text-green-400 text-2xl pr-2'>&#x2022;</span> Active</h1></li>
                        <li onClick={() => { setCategory(1) }}><h1 className={`dark:text-white cursor-pointer px-2 rounded-lg ${category === 1 ? "bg-gray-200 dark:bg-gray-700" : ''} `} ><span className='text-red-400 text-2xl pr-2'>&#x2022;</span>Closed</h1></li>
                    </ul>
                    <h1 className="dark:text-white text-lg font-semibold mt-4">Private</h1>
                    <ul className="px-3">
                        <li onClick={() => { setCategory(2) }}><h1 className={`dark:text-white cursor-pointer px-2 rounded-lg ${category === 2 ? "bg-gray-200 dark:bg-gray-700" : ''} `} ><span className='text-green-400 text-2xl pr-2'>&#x2022;</span> Active</h1></li>
                        <li onClick={() => { setCategory(3) }}><h1 className={`dark:text-white cursor-pointer px-2 rounded-lg ${category === 3 ? "bg-gray-200 dark:bg-gray-700" : ''} `} ><span className='text-red-400 text-2xl pr-2'>&#x2022;</span>Closed</h1></li>
                    </ul> */}
                </Card>
            </div>
            <Card>
                <div className="grid grid-cols-4 px-3 py-4 ">
                    <div className="h-full min-h-[80vh] col-span-1 px-2">
                        {/* <h1 className="dark:text-white">This is a chat screen</h1> */}
                        <Avatar  name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
                        <h1 className="dark:text-white text-2xl pb-4 font-bold">Users</h1>
                        {ChatData.map((item) => {
                            if (item.category === category) {
                                return <div className={`p-3 my-2 border-2 border-gray-700 rounded-lg cursor-pointer flex justify-between items-center ${chatSelected === item.id ? 'bg-gray-700' : ''}`} onClick={() => {
                                    setChatSelected(item.id)
                                    changeChatHistory(item.id)
                                }}>
                                    <h1 className={`dark:text-white ${chatSelected === item.id ? 'text-white' : ''}`}>{item.userName}</h1>
                                    <p className={`dark:text-white text-xs ${chatSelected === item.id ? 'text-white' : ''}`}>{item.time ? item.time : '7d'}</p>
                                </div>
                            }
                        })}
                    </div>
                    <div className="border-l-2 h-full min-h-[80vh] border-gray-700 col-span-2 px-3">
                        <h1 className="dark:text-white text-2xl pb-4 font-bold">{chatHistory.userName ? chatHistory.userName : "History"}</h1>
                        {chatHistory.chat.map((item) => {
                            if (item.source === 0) {
                                return <div align="left">
                                    <div className="message-from-bot">
                                        <h2>{item.message}</h2>
                                        <p className={`text-white text-xs mt-1 ml-1 `}>{item.time ? item.time : '12:45 PM'}</p>
                                    </div>
                                </div>
                            } else {
                                return <div align="right">
                                    <div className="message-from-user">
                                        <h2>{item.message}</h2>
                                        <p className={`text-white text-xs mt-1 ml-1 text-left `}>{item.time ? item.time : '12:45 PM'}</p>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className="border-l-2 h-full min-h-[80vh] border-gray-700 col-span-1 px-2">
                        {/* <h1 className="dark:text-white">This is a chat screen</h1> */}
                        <h1 className="dark:text-white text-2xl pb-4 font-bold">General Info</h1>
                        <div className="gap-2 flex flex-col">
                            <div className="grid grid-cols-3">
                                <h2 className="flex items-center dark:text-white">name</h2>
                                <input className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            </div>
                            <div className="grid grid-cols-3">
                                <h2 className="flex items-center dark:text-white">email</h2>
                                <input className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={email} type="email" onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="grid grid-cols-3">
                                <h2 className="flex items-center dark:text-white">phone</h2>
                                <input className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={phone} type="number" onChange={(e) => {
                                    setPhone(e.target.value)
                                }} />
                            </div>
                            <div className="grid grid-cols-3">
                                <h2 className="flex items-center dark:text-white">company</h2>
                                <input className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={company} onChange={(e) => {
                                    setCompany(e.target.value)
                                }} />
                            </div>
                            <div className="grid grid-cols-3">
                                <h2 className="flex items-center dark:text-white">location</h2>
                                <input className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={location} onChange={(e) => {
                                    setLocation(e.target.value)
                                }} />
                            </div>
                            <div className="grid grid-cols-3">
                                <h2 className="mt-1 dark:text-white">notes</h2>
                                <textarea className="w-full focus:border-gray-700 hover:border-gray-700 rounded-lg border-2 px-1 py-1 border-lightPrimary dark:border-navy-700 text-navy-700 dark:text-white bg-lightPrimary dark:bg-navy-700 mt-1 col-span-2 focus:outline-none" value={notes} onChange={(e) => {
                                    setNotes(e.target.value)
                                }} rows={3} />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-gray-700 text-white px-8 py-1 rounded-lg mt-2 mr-1">Save</button>
                            </div>
                        </div>
                        {/* {ChatData.map((item) => {
                        if (item.category === category) {
                            return <div className={`p-3 my-2 border-2 border-gray-700 rounded-lg cursor-pointer flex justify-between items-center ${chatSelected === item.id ? 'bg-gray-700' : ''}`} onClick={() => {
                                setChatSelected(item.id)
                                changeChatHistory(item.id)
                                }}>
                                <h1   className={`dark:text-white ${chatSelected === item.id ? 'text-white' : ''}`}>{item.userName}</h1>
                                <p className={`dark:text-white text-xs ${chatSelected === item.id ? 'text-white' : ''}`}>{ item.time ? item.time : '7d'}</p>
                            </div>
                        }
                    })} */}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ChatsScreen