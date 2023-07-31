import { CardListItem } from "@/models/models";
import { useInView } from 'react-intersection-observer';

type Props = {
    img: string;
    name: string;
    info: Array<CardListItem>;
    onClick?: () => void | undefined;
}

const Card = ({ img, name, info = [], onClick }: Props) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            {inView ? (
                <div
                    className='rounded-xl bg-secondary dark:bg-secondary_dark shadow-3xl cursor-pointer overflow-hidden dark:shadow-3xl_dark'
                    onClick={onClick}
                >

                    <img src={img} className='block w-full h-[150px] object-cover object-center shadow-sm' />
                    <div className='px-6 pt-4 pb-8 text-primary dark:text-primary_dark'>
                        <h3 className='m-0 text-base font-bold'>{name}</h3>
                        <ul className='list-none m-0 pt-4'>
                            {info.map(el => (
                                <div key={el.title}>
                                    <b>{el.title}: </b> <span className="text-sm">{el.description}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="block w-full h-[150px] object-cover object-center shadow-sm bg-gray-600"></div>
            )}

        </div>

    )
}

export default Card