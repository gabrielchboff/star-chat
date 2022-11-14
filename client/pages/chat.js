import React from 'react'


export default function chat() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-800 text-gray-800 p-10">

	<div className="flex flex-col flex-grow w-full max-w-xl bg-gray-800 shadow-xl rounded-lg overflow-hidden">
		<div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">Lorem ipsum dolor sit.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
		</div>
		
		<div className="bg-gray-300 p-6">
            <div className="flex">             
                <input className="flex-grow  w-80 items-center h-10 rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
                <button className="flex-none w-14" type="submit">
                    <svg className="w-5 h-5 ml-6 items-center text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </div>
        </div>
	</div>

</div>
  )
}
