import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";

import { createContact, getContacts } from "./contacts";
import N from "./nodes";

export default function Root() {
  const [contacts, setContacts] = useState<any[]>([]);
  const navigation = useNavigation();
  const navigate = useNavigate();

  const init = async () => {
    const contacts = await getContacts();
    setContacts(contacts);
  };

  const create = async () => {
    const contact = await createContact();
    init();
    navigate(`/contact/${contact.id}/edit`);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <N.Page>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <button type="submit" onClick={create}>
              New
            </button>
            {/* <Form method="post">
            <button type="submit">New</button>
          </Form> */}
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map(contact => (
                  <li key={contact.id}>
                    <NavLink
                      to={`${contact.id}`}
                      className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}
                      {contact.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
          <Outlet />
        </div>
      </N.Page>
    </>
  );
}
