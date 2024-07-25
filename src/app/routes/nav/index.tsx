import React from "react";
import { useNavigate } from "react-router-dom";

import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/divider/divider";

const pages = [
  {
    route: "/home",
    name: "home",
  },
  {
    route: "/contact",
    name: "contact",
  },
  {
    route: "/square",
    name: "square",
  },
  {
    route: "/mui",
    name: "mui",
  },
  {
    route: "/rxjs",
    name: "rxjs",
  },
  {
    route: "/zustand",
    name: "zustand",
  },
  // {
  //   route: "/shiori/home",
  //   name: "shiori",
  // },
  {
    route: "/dapp/home",
    name: "dapp",
  },
];

function NavPage() {
  const navigate = useNavigate();

  const onNav = page => {
    navigate(page?.route || "#");
  };

  return (
    <>
      <h1>a set of pages</h1>
      <tr-foo-a />
      <md-list style={{ maxWidth: 600, padding: "0 4px" }}>
        {pages.map((page, index) => (
          <React.Fragment key={page.route}>
            {index !== 0 && <md-divider></md-divider>}
            <md-list-item type="link" onClick={() => onNav(page)}>
              {page.name}
            </md-list-item>
          </React.Fragment>
        ))}
      </md-list>
    </>
  );
}

export default NavPage;
