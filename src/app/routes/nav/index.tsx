import React from "react";
import { useNavigate } from "react-router-dom";

import { MdDivider, MdIcon, MdList, MdListItem } from "@components/index";

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
  {
    route: "/shiori",
    name: "shiori",
  },
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
      <MdIcon name="delete" />
      <MdIcon name="delete--outlined" />
      <MdIcon name="delete--rounded" />
      <MdIcon name="delete--sharp" style={{ color: "red" }} />
      <MdIcon name="delete--two-tone" style={{ fontSize: "32px" }} />
      <MdList style={{ maxWidth: 600, padding: "0 4px" }}>
        {pages.map((page, index) => (
          <React.Fragment key={page.route}>
            {index !== 0 && <MdDivider />}
            <MdListItem type="link" onClick={() => onNav(page)}>
              {page.name}
            </MdListItem>
          </React.Fragment>
        ))}
      </MdList>
    </>
  );
}

export default NavPage;
