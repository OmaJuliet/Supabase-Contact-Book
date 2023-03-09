import React from "react";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import ContactCard from "../Components/ContactCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [contacts, setContacts] = useState(null);

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((sm) => sm.id !== id);
    });
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
      .from("contacts")
      .select();

      if (error) {
        setFetchError("Could not fetch contacts");
        setContacts(null);
        console.log(error);
      }

      if (data) {
        setContacts(data);
        setFetchError(null);
      }
    };

    fetchContacts();
  }, []);
  return (
    <>
      <div className="container px-5 py-8 mx-auto">
          {fetchError && <p>{fetchError}</p>}
          {contacts && (
            <div className="lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-3 grid -m-4 md:grid md:gap-3 md:grid-cols-2 md:grid-rows-2">
              {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
    </>
  );
};

export default Home;