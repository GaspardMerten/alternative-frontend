import React, {useState} from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {createCompanyRanking} from "@/api/ranking";
import Button from "@/components/Button";

const RankingForm = ({onSubmitted, companySlug}: { onSubmitted?: () => void, companySlug: string }) => {
    const [rating, setRating] = useState(0);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitted?.();
        await createCompanyRanking(companySlug, {
            rating: rating,
            username,
            comment,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg w-full">
            <div className="flex items-center justify-center space-x-1 p-4 text-xl">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className="cursor-pointer"
                        onClick={() => handleRatingChange(value)}
                    >
        {rating >= value ? (
            <AiFillStar className="text-primary text-xl"/>
        ) : (
            <AiOutlineStar className="text-gray-400 text-xl"/>
        )}
      </span>
                ))}
            </div>

            <div className="mt-4">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={showComment}
                        onChange={() => setShowComment(!showComment)}
                        className="rounded border-gray-400 focus:ring-black-500 focus:border-black-500"
                    />
                    <span className="text-sm">Laisser un commentaire</span>
                </label>
            </div>

                <>
                    <div className="mt-4">
                        <label className="block">
                            Nom d{"'"}utilisateur:
                            <input
                                type="text"
                                disabled={!showComment}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 p-2 w-full border rounded focus:ring-black-500 focus:border-black-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
                            />
                        </label>
                    </div>

                    <div className="mt-4">
                        <label className="block">
                            Commentaire:
                            <textarea
                                disabled={!showComment}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={4}
                                maxLength={500}
                                className="mt-1 p-2 w-full border rounded focus:ring-black-500 focus:border-black-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
                            />
                        </label>
                    </div>
                </>

            <div className="flex justify-center">
                <Button text={"Envoyer la note"} onClick={() => {
                    onSubmitted?.();
                }}/>
            </div>
        </form>

    );
};

export default RankingForm;
