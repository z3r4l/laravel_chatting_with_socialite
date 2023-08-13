import App from '@/Layouts/App'
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm, usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useRef, useState } from 'react'

const sts = (x, y, option = 'justify') => {
    if (option === 'justify') {
        return x === y ? 'justify-end' : 'justify-start';
    }
    if (option === 'background') {
        return x === y ? 'bg-green-100 text-green-900' : 'bg-gray-100 text-gray-900';
    }
}

export default function Show(props) {
    const {auth} = usePage().props;
    const [typing, setTyping]   = useState(false);
    const scrollRef = useRef(null);
    const messageRef  = useRef(null);
    const {user, chats} = props;
    const { data, setData, reset, errors, post} = useForm({ message : ''});
    const submitHandler = (e) => {
        e.preventDefault();
        post(route('chats.store', user.username), {
            onSuccess : ()=> {
                reset('message');
                scrollRef.current.scrollTo(0, 9999999)
            }
        });
    };
    const onTyping = () => {
        setTimeout(() => {
            Echo.private(`chats.${user.uuid}`)
                .whisper('isTyping', {name: user.name});
        }, 500);
    };
    Echo.private('chats.' + auth.user.uuid)
        .listenForWhisper('isTyping', (e) => {
            setTyping(true);
            setTimeout(() => setTyping(false), 5000);
        })
        .listen('Message', ({chat}) => {
            Inertia.reload({preserveScroll : true,
            onSuccess : () => {
                scrollRef.current.scrollTo(0, 9999999);
                setTyping(false)
            }
            
            })
    })

    useEffect(()=>{
        scrollRef.current.scrollTo(0, 9999999)
        messageRef.current.focus()
    },[])
    return (
    <div>
        <Head title={`Chat With ${user.name}`}/>
        <div className='flex flex-col justify-between h-screen'>
            <div className='border-b p-4'>
               <div className="font-semibold">
                    {user.name}
                    { typing &&
                        <div className="text-xs text-gray-500"> Sedang Mengetik . . .</div>
                    }
               </div>
            </div>
            <div className='overflow-y-auto flex-1 px-4 py-2 space-y-2' ref={scrollRef}>
                { chats.length ? chats.map((chat) => (
                    <div className={`flex text-sm ${sts(auth.user.id, chat.sender_id)}`} key={chat.id}>
                        <div className={`p-4 rounded-xl ${sts(auth.user.id, chat.sender_id, 'background')}`}>
                            {chat.message}
                        </div>
                    </div>
                ) ) 
                : 
                <div className="text-gray-500">
                    Mulai Chat Dengan {user.username}...
                </div>
                }
            </div>
            <div className='border-t px-4 py-2'> 
                <form onSubmit={submitHandler}>
                <input 
                    ref={messageRef}
                    value={data.message}
                    onKeyUp={onTyping}
                    onChange={(e)=> setData({...data, message: e.target.value})}
                    type="text" 
                    placeholder='Masukan Text...' 
                    name="message" id="message" 
                    className="form-text w-full focus:outline-none focus:border-0 border-0 focus:ring-0 p-0" 
                    autoComplete={'off'}
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

Show.layout = (page) => <App children={page}/>