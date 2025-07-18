import { cn } from '@/lib/utils';
import Header from './Header';

interface ContainerProps {
    children: React.ReactNode;
    bg?: string;
    headerType: 'home' | 'back';
}

export default function FullContainer({
    children,
    bg = 'bg-blue-50',
    headerType = 'home',
}: ContainerProps) {
    return (
        <div className={cn('border-l border-r ', bg)}>
            <Header type={headerType} />
            <main>{children}</main>
        </div>
    );
}
