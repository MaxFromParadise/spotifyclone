import { CirclePlay } from 'lucide-react';

export function Logo() {
	return (
		<div className='w-[72px] h-16 flex items-center justify-center cursor-pointer overflow-hidden'>
			<CirclePlay className='w-8 h-8 bg-white rounded-full p-1' />
		</div>
	);
}
