'use client';
import { usePathname } from 'next/navigation';

export default function AnalyticsPage() {
	const router = usePathname();
	const pageId: number = parseInt(router.split('/').pop() || '', 10);
	return <div>hello {pageId}</div>;
}
