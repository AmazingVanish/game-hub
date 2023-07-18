import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch, SiAtari, SiCommodore, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface PlatformIconListProps {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        nintendo: SiNintendoswitch,
        atari: SiAtari,
        'commodore-amiga': SiCommodore,
        sega: SiSega,
        web: BsGlobe,
    };

    return (
        <>
            <HStack marginY={1}>
                {platforms.map((platform) => (
                    <Icon
                        key={platform.id}
                        as={iconMap[platform.slug]}
                        color="gray.500"
                        fontSize="xl"
                        mr={2}
                    />
                ))}
            </HStack>
        </>
    );
};

export default PlatformIconList;
