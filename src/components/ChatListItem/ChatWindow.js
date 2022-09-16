import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css"

import SearchIcon from '@mui/icons-material/Search';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';

export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('')

    const handleEmojiClick = (e, emojiObject) =>{
       setText( text + emojiObject.emoji);
    }

    const handleOpenEmoji= ()=> {
        setEmojiOpen(true)
    }

    const handleCloseEmoji= ()=> {
        setEmojiOpen(false)
    }

    return(
        <div className="ChatWindow">
           <div className="ChatWindow--header">

                <div className="ChatWindow--headerinfo">
                    <img className="ChatWindow--avatar" src="https://i0.statig.com.br/bancodeimagens/2m/vt/xo/2mvtxohmo1hruyptirvrfqybi.jpg" />
                    <div className="ChatWindow--name"> Nattanzim</div>
                </div>

                <div className="ChatWindow--headerbuttons">
                    <div className="ChatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>

                    <div className="ChatWindow--btn">
                        <AttachFileOutlinedIcon style={{color: '#919191'}} />
                    </div>

                    <div className="ChatWindow--btn">
                        <MoreVertOutlinedIcon style={{color: '#919191'}} />
                    </div>
                </div>

            </div>

            <div className="ChatWindow--body"> 
           
            </div>

            <div className="ChatWindow--emojiarea" style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />

            </div>


            <div className="ChatWindow--footer">

                <div className="ChatWindow--pre" >

                    <div 
                        className="ChatWindow--btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40 : 0}}
                    >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>

                    <div className="ChatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <EmojiEmotionsIcon style={{color: emojiOpen ? '#009688' : '#919191'}}/>
                    </div>

                </div>

                <div className="ChatWindow--inputarea">

                    <input 
                        className="ChatWindow--input" 
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />

                </div> 

                <div className="ChatWindow--pos">

                    {text === "" &&
                        <div className="ChatWindow--btn">
                            <MicIcon style={{color: '#919191'}}/>
                        </div>

                    }

                    {text !== "" &&
                        <div className="ChatWindow--btn">
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }


                </div>

            </div>

        </div>
    );
}