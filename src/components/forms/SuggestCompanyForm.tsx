import React, {ChangeEvent, useState} from "react";
import Button from "@/components/Button";
import {createSuggestion} from "@/api/suggestion";

const SuggestCompanyForm = ({onSubmitted}: { onSubmitted?: () => void }) => {
    const [formData, setFormData] = useState({
        name: "",
        short_description: "",
        website : "",
        address: "",
    });

    const handleChange = (e: ChangeEvent<any>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createSuggestion(formData).then(() => {
                setFormData({
                    name: "",
                    short_description: "",
                    website: "",
                    address: "",
                });
                onSubmitted?.();
            }
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nom de l&apos;entreprise
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Courte description (max 256 char)
                </label>
                <textarea
                    name="short_description"
                    value={formData.short_description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 resize-none"
                    maxLength={256}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Lien (optionnel)
                </label>
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Adresse (optionnel)
                </label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="flex justify-center">
                <Button text={"Envoyer la suggestion"}/>
            </div>
        </form>
    );
};

export default SuggestCompanyForm;
