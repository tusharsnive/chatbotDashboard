import { useEffect } from "react";

import './pStyle.css'
import Headphone from './headphone.png'

const PlaygroundScreen = () => {
  useEffect(() => {
    document.getElementById("iconBtn").addEventListener("click", () => {
        document.getElementById("chatMain").classList.toggle("snive-hidden");
    });
    document.getElementById('chatbot-input').onkeydown = function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            var userInput = document.getElementById("chatbot-input").value;
            var AnsToAdd = document.createElement("div");
            console.log(userInput);
            const newQuesContent = `
            <div align="right">
                <div class="message-from-user">
                    <h2>${userInput}</h2>
                </div>
            </div>
            `
            document.getElementById("chatbot-input").value = ''
            const newQues = document.createElement("div");
            newQues.innerHTML = newQuesContent.trim();
            document.getElementById('chat-messages').appendChild(newQues)
            AnsToAdd.innerHTML = `
                <div class="message-from-bot">
                    <div class="loading">
                        <div class="loading__letter">.</div>
                        <div class="loading__letter">.</div>
                        <div class="loading__letter">.</div>
                    </div>
                </div>
            `
            document.getElementById('chat-messages').appendChild(AnsToAdd)
            fetch('http://localhost:5000/chatbot', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    domain: "hello.com",
                    token: "109455",
                    userInput: userInput
                })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(JSON.stringify(response))
                    const newAnsContent = `
                    <div align="left">
                    <div class="message-from-bot">
                        <h2>${response.message}</h2>
                    </div>
                </div>
            `
                    AnsToAdd.innerHTML = newAnsContent.trim();
                })
        }
    }
},[])
  return (
    <div className="flex w-full flex-col gap-5">
      {/* <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
      

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>

        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div> */}
      <div className="bot9-chat-bubble ">
                <div className="chat-div snive-hidden" id="chatMain">
                    <div className="top-div">
                        <img src={Headphone} ></img>
                        <h1>Company</h1>
                    </div>
                    <div className="message-input">
                        <div className="chat-area" id="chat-area">
                            <div className="chat-messages" id="chat-messages">
                                {/* <div align="right">
                                    <div className="message-from-user">
                                        <h2>Hello</h2>
                                    </div>
                                </div> */}
                                <div align="left">
                                    <div className="message-from-bot">
                                        <h2>How can I assist you.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="input-div">
                                <input id="chatbot-input" placeholder="Type something..." />
                                <p style={{textAlign: 'center'}}>powered by Snive</p>
                            </div>

                    </div>
                </div>
                <div className="icon-wrap">
                    <span className="icon" id="iconBtn">
                        <span className="feather-icon position-relative w-100 h-100">

                            <svg className="bot9-chat-bubble-open-btn bot9-chat-bubble-icon" width="40" height="40"
                                viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V28.75C3.75 29.413 4.01339 30.0489 4.48223 30.5178C4.95107 30.9866 5.58696 31.25 6.25 31.25L15.5469 31.2594L17.8562 35.0359C18.0778 35.4056 18.3912 35.7116 18.7659 35.9244C19.1407 36.1373 19.5641 36.2496 19.995 36.2505C20.426 36.2515 20.8498 36.141 21.2255 35.9298C21.6012 35.7187 21.9159 35.414 22.1391 35.0453L24.4578 31.25H33.75C34.413 31.25 35.0489 30.9866 35.5178 30.5178C35.9866 30.0489 36.25 29.413 36.25 28.75V8.75C36.25 8.08696 35.9866 7.45107 35.5178 6.98223C35.0489 6.51339 34.413 6.25 33.75 6.25ZM13.125 20.625C12.7542 20.625 12.3916 20.515 12.0833 20.309C11.775 20.103 11.5346 19.8101 11.3927 19.4675C11.2508 19.1249 11.2137 18.7479 11.286 18.3842C11.3584 18.0205 11.537 17.6864 11.7992 17.4242C12.0614 17.162 12.3955 16.9834 12.7592 16.911C13.1229 16.8387 13.4999 16.8758 13.8425 17.0177C14.1851 17.1596 14.478 17.4 14.684 17.7083C14.89 18.0166 15 18.3792 15 18.75C15 19.2473 14.8025 19.7242 14.4508 20.0758C14.0992 20.4275 13.6223 20.625 13.125 20.625ZM20 20.625C19.6292 20.625 19.2666 20.515 18.9583 20.309C18.65 20.103 18.4096 19.8101 18.2677 19.4675C18.1258 19.1249 18.0887 18.7479 18.161 18.3842C18.2334 18.0205 18.412 17.6864 18.6742 17.4242C18.9364 17.162 19.2705 16.9834 19.6342 16.911C19.9979 16.8387 20.3749 16.8758 20.7175 17.0177C21.0601 17.1596 21.353 17.4 21.559 17.7083C21.765 18.0166 21.875 18.3792 21.875 18.75C21.875 19.2473 21.6775 19.7242 21.3258 20.0758C20.9742 20.4275 20.4973 20.625 20 20.625ZM26.875 20.625C26.5042 20.625 26.1416 20.515 25.8333 20.309C25.525 20.103 25.2846 19.8101 25.1427 19.4675C25.0008 19.1249 24.9637 18.7479 25.036 18.3842C25.1084 18.0205 25.287 17.6864 25.5492 17.4242C25.8114 17.162 26.1455 16.9834 26.5092 16.911C26.8729 16.8387 27.2499 16.8758 27.5925 17.0177C27.9351 17.1596 28.228 17.4 28.434 17.7083C28.64 18.0166 28.75 18.3792 28.75 18.75C28.75 19.2473 28.5525 19.7242 28.2008 20.0758C27.8492 20.4275 27.3723 20.625 26.875 20.625Z"
                                    fill="white" />
                            </svg>
                            <svg className="bot9-chat-bubble-close-btn bot9-chat-bubble-icon" width="40" height="40"
                                viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_71_505)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M30.4142 9.58413C31.1953 10.3652 31.1953 11.6315 30.4142 12.4126L22.8284 19.9983L30.4142 27.5841C31.1953 28.3652 31.1953 29.6315 30.4142 30.4126C29.6332 31.1936 28.3668 31.1936 27.5858 30.4126L20 22.8268L12.4142 30.4126C11.6332 31.1936 10.3668 31.1936 9.58579 30.4126C8.80474 29.6315 8.80474 28.3652 9.58579 27.5841L17.1716 19.9983L9.58579 12.4126C8.80474 11.6315 8.80474 10.3652 9.58579 9.58413C10.3668 8.80309 11.6332 8.80309 12.4142 9.58413L20 17.1699L27.5858 9.58413C28.3668 8.80309 29.6332 8.80309 30.4142 9.58413Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_71_505">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </span>
                    </span>
                </div>
            </div>
    </div>
  );
};

export default PlaygroundScreen;
