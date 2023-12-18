'use client';

import { TiThMenu } from 'react-icons/ti'
import Avatar from '../avatar';
import { useCallback, useState } from 'react';
import MenuItem from './menuItem';
import useRegisterModal from '@/app/hooks/useRegisterModals';
import useLoginModal from '@/app/hooks/useLoginModals';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useSellModal';
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    const onSell = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);
    
    return(
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div 
                    onClick={onSell}
                    className="
                        hidden 
                        md:block 
                        text-sm  
                        py-3 
                        px-4 
                        rounded-full 
                        hover:bg-neutral-100 
                        transition 
                        cursor-pointer
                    "
                >
                    خودرو کرایه دهید
                </div>
                <div 
                    onClick={toggleOpen} 
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <TiThMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm '>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => router.push('/favorites')} label='علاقه مندی'/>
                                <MenuItem onClick={rentModal.onOpen} label='خودرو کرایه دهید'/>
                                <MenuItem onClick={() => router.push('/properties')} label='خودروهای من'/>
                                <MenuItem onClick={() => router.push('/trips')} label='رزرو شده'/>
                                <MenuItem onClick={() => router.push('/reservations')} label='کرایه داده شده'/>
                                <hr />
                                <MenuItem onClick={() => signOut()} label='خروج'/>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={loginModal.onOpen} label='ورود'/>
                                <MenuItem onClick={registerModal.onOpen} label='ثبت نام'/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;