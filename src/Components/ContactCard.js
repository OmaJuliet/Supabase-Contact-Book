import React from "react";
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const reactimages = "https://tqfruvglcoupvuwfhpzo.supabase.co/storage/v1/object/public/images"


const ContactCard = ({ contact, onDelete }) => {
    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("contacts")
            .delete()
            .eq("id", contact.id);

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            onDelete(contact.id);
        }
        window.location.reload();
    };

    return (
        <section>
            <div className="p-4 lg:w-full w-full">
                    <div className="h-full border-2 bg-gray-300 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-wrap">
                                <img src={`${reactimages}/${contact.fileUrl}`} className="w-12 h-12 rounded-full" alt="user" />
                                <h1 className="text-xl font-semibold text-gray-900 mt-3 ml-3">{contact.name}</h1>
                            </div>
                            <div className="mt-6">
                                <p className="leading-relaxed mb-1">Email: {contact.email}</p>
                                <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Phone Number: {contact.number}</p>
                            </div>
                            <div className="flex items-center flex-wrap mt-2">
                                <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 bg-gray-500 rounded-full p-4">
                                    <Link to={"/" + contact.id}>
                                        <FaEdit className="w-4 h-4" />
                                    </Link>
                                </span>
                                <span className="inline-flex items-center leading-none text-sm bg-gray-500 rounded-full p-2 cursor-pointer">
                                    <FaTrash className="w-4 h-4" onClick={handleDelete} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default ContactCard;