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
      <section>
        {fetchError && <p>{fetchError}</p>}
        {contacts && (
          <article>
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDelete}
              />
            ))}
          </article>
        )}
      </section>
    </>
  );
};

export default Home;