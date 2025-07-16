'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface HeaderProps {
    className?: string;
    type: 'home' | 'back';
    title?: string;
}

export default function Header({ className, type, title }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const isReportPage = pathname === '/report/[id]';

    if (type === 'home')
        return (
            <header
                className={cn(
                    'h-12 flex items-center justify-end px-4',
                    className
                )}
            >
                <Link href="#">
                    <Image
                        src="/settings.svg"
                        alt="환경설정"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                </Link>
                <div className="text-[#0F172A] text-5 font-semibold">
                    {title}
                </div>
            </header>
        );

    if (type === 'back')
        return (
            <header className={cn('h-12 flex items-center', className)}>
                <Image
                    className="hover:cursor-pointer"
                    onClick={() => router.back()}
                    src={`/arrow_back${isReportPage ? '_white' : ''}.svg`}
                    alt="뒤로가기"
                    width={24}
                    height={24}
                />
                <div className="text-[#0F172A] text-5 font-semibold">
                    {title}
                </div>
            </header>
        );
}
