import React, { useState } from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem/ChatListItem'
import ChatIntro from './components/ChatListItem/ChatIntro'
import ChatWindow from './components/ChatListItem/ChatWindow'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

export default () => {

	const [chatList, setChatList] = useState([
		
		{
			chatId:1, 
			name:"Nattanzim",
			msg: "vai fazer o que hoje? bora tomar uma",
			datas: Date,
			img: "https://i0.statig.com.br/bancodeimagens/2m/vt/xo/2mvtxohmo1hruyptirvrfqybi.jpg",
		},
		{
			chatId:2, 
			name:"Wesley safadão",
			msg: "bora meu fii, hora de tomar uma",
			datas: "16 hrs",
			img: "https://midias.correiobraziliense.com.br/_midias/jpg/2022/06/09/675x450/1_wesley_safadao-25835226.jpg?20220609161502?20220609161502",
		},
		{
			chatId:3, 
			name:"Vitor Fernandes",
			msg: "Sextou antecipado, bora beber",
			datas: "18 horas",
			img: "https://s2.glbimg.com/UgDHIP30LwJVYjESg1iwu82fiU4=/0x0:768x757/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/x/o/ljuD9kQhAEV9BODk77JQ/vitor-fernandes.jpg",
		},

	]);

	const [activeChat, setActiveChat] = useState({})

	return (
		<div className='app-window'>
			<div className='sidebar'>
				<header>
				<img
					className='header--avatar'
					src='https://avatars.githubusercontent.com/u/65297688?v=4'
					alt='avatar'
				/>

				<div className='header--bottons'>
					<div className=' header--btn'>
					<DonutLargeIcon style={{ color: '#919191' }} />
					</div>

					<div className='header--btn'>
					<ChatIcon style={{ color: '#919191' }} />
					</div>

					<div className=' header--btn'>
					<MoreVertIcon style={{ color: '#919191' }} />
					</div>
				</div>
				</header>

				<div className='search'>
					<div className='search--input'>
						<SearchIcon
						style={{ fontSize: 'small', color: '#919191' }}
						/>
						<input type='search' placeholder='Procurar outra conversa' />
					</div>
				</div>

				<div className='chatlist'>
					{chatList.map((item,key)=>(
						<ChatListItem
							key={key}
							data={item}
							active = {activeChat.chatId === chatList[key].chatId}
							onClick = {()=> setActiveChat(chatList[key])}
						/>
					))}
				
				</div>
			</div>

			<div className='contentarea'>
				{activeChat.chatId !== undefined && 
					<ChatWindow/>
				}
				{activeChat.chatId === undefined &&
					<ChatIntro/>
				}
			</div>
		</div>
  )
}
