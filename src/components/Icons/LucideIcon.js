import {
    FlameIcon,
    AppleIcon,
    FramerIcon,
    AmbulanceIcon,
    SirenIcon,
    UserIcon,
    ZapOffIcon,
    BabyIcon,
    TramFrontIcon,
    AlarmSmokeIcon,
    HeartPulseIcon,
    SquareActivityIcon,
    PlugZapIcon
} from 'lucide-react-native';

const iconMap = {
    FlameIcon: FlameIcon,
    AppleIcon: AppleIcon,
    FramerIcon: FramerIcon,
    AmbulanceIcon: AmbulanceIcon,
    SirenIcon: SirenIcon,
    UserIcon: UserIcon,
    ZapOffIcon: ZapOffIcon,
    BabyIcon: BabyIcon,
    TramFrontIcon: TramFrontIcon,
    AlarmSmokeIcon: AlarmSmokeIcon,
    HeartPulseIcon: HeartPulseIcon,
    SquareActivityIcon: SquareActivityIcon,
    PlugZapIcon: PlugZapIcon
};

export const getIconComponent = (iconName) => {
    return iconMap[iconName] || null;
};
