export default function Button(props: {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}) {
    return (
        <button
            className={`hover:bg-gray-900 bg-black text-white text-sm font-medium px-4 h-12 rounded-md  inline-block ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
}