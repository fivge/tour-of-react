import { useState } from "react";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";

import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button";
import "@material/web/checkbox/checkbox";

import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/divider/divider";
import "@material/web/icon/icon";

function NavPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <label>
        Material 3<md-checkbox checked></md-checkbox>
      </label>
      <tr-foo-a>as</tr-foo-a>
      <md-outlined-button>Back</md-outlined-button>
      <md-filled-button>Next</md-filled-button>
      <div>---</div>
      {/* <md-list style="max-width: 300px;"> */}
      <md-list style={{ maxWidth: 300 }}>
        <md-list-item>Fruits</md-list-item>
        <md-divider></md-divider>
        <md-list-item>Apple</md-list-item>
        <md-list-item>Banana</md-list-item>
        <md-list-item>
          <div slot="headline">Cucumber</div>
          <div slot="supporting-text">Cucumbers are long green fruits that are just as long as this multi-line description</div>
        </md-list-item>
        <md-list-item type="link" href="https://google.com/search?q=buy+kiwis&tbm=shop" target="_blank">
          <div slot="headline">Shop for Kiwis</div>
          <div slot="supporting-text">This will link you out in a new tab</div>
          <md-icon slot="end">open_in_new</md-icon>
        </md-list-item>
      </md-list>
      <div>----</div>

      <md-list style={{ maxWidth: 300 }}>
        <md-list-item>Fruits</md-list-item>
        <md-divider></md-divider>
        <md-list-item>Apple</md-list-item>
        <md-list-item>Banana</md-list-item>
        <md-list-item>
          <div slot="headline">Cucumber</div>
          <div slot="supporting-text">Cucumbers are long green fruits that are just as long as this multi-line description</div>
        </md-list-item>
        <md-list-item type="link" href="https://google.com/search?q=buy+kiwis&tbm=shop" target="_blank">
          <div slot="headline">Shop for Kiwis</div>
          <div slot="supporting-text">This will link you out in a new tab</div>
          <md-icon slot="end">open_in_new</md-icon>
        </md-list-item>
        <md-list-item type="link">
          <NavLink to={`/home`} className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}>
            ★home
            {/* <div slot="headline">Shop for Kiwis</div> */}
            {/* <div slot="supporting-text">This will link you out in a new tab</div> */}
            {/* <md-icon slot="end">open_in_new</md-icon> */}
          </NavLink>
        </md-list-item>
        <md-list-item type="link" href="/home">
          <div slot="headline">★home</div>
          {/* <div slot="supporting-text">This will link you out in a new tab</div> */}
          <md-icon slot="end">open_in_new</md-icon>
        </md-list-item>
      </md-list>
    </>
  );
}

export default NavPage;
