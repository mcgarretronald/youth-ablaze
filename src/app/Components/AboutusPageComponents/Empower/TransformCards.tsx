import Image from "next/image";
interface TransformCardProps {
    image: string;
    title: string;
    text: string;
}

const TransformCard: React.FC<TransformCardProps> = ({ image, title, text }) => {
    return (
        <div className="borde flex relative  ">
            <Image
                src={image}
                alt={title}
                width={30}
                height={30}
                className="rounded-full absolute"
            />
            <div className="ml-8">
                <h5 className="font-semibold ">{title}</h5>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default TransformCard;
