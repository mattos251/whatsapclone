import React, { useState } from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem/ChatListItem'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

export default () => {

	const [chatList, setChatList] = useState([{},{},{},{}]);

	return (
		<div className='app-window'>
		<div className='sidebar'>
			<header>
			<img
				className='header--avatar'
				src='https://www.whodesigners.com.br/pixit/assets/img/avatars/avatar7_big.png'
				alt=''
			/>

			<div className='header--bottons'>
				<div className=' header--btn'>
				<DonutLargeIcon style={{ color: '#919191' }} />
				</div>

				<div className=' header--btn'>
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
					/>
				))}
			
			</div>
		</div>

		<div className='contentarea'>....</div>
		</div>
  )
}
