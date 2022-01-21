import React, {createRef, useEffect} from "react";

import profile from './logo.png';
// import logo from '../../public/logo.png';
// imports CSS from the main package
// import "@ui5/webcomponents/dist/json-imports/Themes"
// imports CSS from the fiori package
import '@ui5/webcomponents-base/dist/config/Theme';

import {setTheme} from '@ui5/webcomponents-base/dist/config/Theme';
import "@ui5/webcomponents-fiori/dist/ShellBarItem";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Option";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents-icons/dist/AllIcons";
import "@ui5/webcomponents-icons/dist/sys-help";
import "@ui5/webcomponents-icons/dist/log";
import "@ui5/webcomponents-icons/dist/palette";
import "@ui5/webcomponents-icons/dist/desktop-mobile";
import "@ui5/webcomponents-icons/dist/download-from-cloud";


const AppBar = () => {
  const shellbarRef = createRef();
  const popoverRef = createRef();
  const selectRef = createRef();
  const compactSwitchRef = createRef();
  const name = "test_auditor#1";
  const role = "Auditor";
  const sap_logo = "SAP_logo.png";
  const recordsDownloaded = 4;

  useEffect(() => {
    shellbarRef.current.addEventListener("profile-click", (event) => {
      console.log(popoverRef.current);
      popoverRef.current.showAt(event.detail.targetRef);
    });

    selectRef.current.addEventListener("change", event => {
      const themeId = event.detail.selectedOption.getAttribute("data-theme-id");

      setTheme(themeId);
    });

    compactSwitchRef.current.addEventListener("change", event => {
      document.body.classList.toggle("ui5-content-density-compact", !!event.target.checked);
    });

  }, []);

  return (
    <div className="app-bar">
      <ui5-shellbar
        ref={shellbarRef}
        id="shellbar"
        // logo={logo}
        profile={profile}
        primary-title="Log Viewer 0.1"
        secondary-title={"Welcome " + name}
        show-notifications={true}
        show-product-switch={true}
        show-co-pilot={true}
      >
        <ui5-avatar slot="profile">
          <img src="logo.png"/>
        </ui5-avatar>
        <img slot="logo" src={sap_logo}/>
        {/*<ui5-button icon="nav-back" slot="startButton"/>*/}

        {/*<ui5-shellbar-item id="disc" icon="disconnected" text="Disconnect"/>*/}
        <ui5-shellbar-item id="download-from-cloud" icon="download-from-cloud" text="Incoming Calls"
                           count={recordsDownloaded}/>

        {/*<ui5-input slot="searchField"/>*/}
      </ui5-shellbar>
      <ui5-popover id="profile-popover"
                   hide-header={true}
                   placement-type="Bottom"
                   ref={popoverRef}
                   horizontal-align="Right"
      >
        <div className="profile-header centered">
          <img alt="" className="profile-img" src={profile}/>
          <ui5-title level="3">{name}</ui5-title>
          <ui5-label>{role}</ui5-label>
        </div>

        <div className="profile-content">
          <ui5-list separators="None">
            <ui5-li-custom type="Inactive">
              <div className="profile-hcb-switch centered">
                <ui5-li icon="desktop-mobile" type="Inactive">Compact Size</ui5-li>
                <ui5-switch ref={compactSwitchRef}/>
              </div>
            </ui5-li-custom>

            <ui5-li-custom type="Inactive">
              <div className="profile-hcb-switch centered">
                <ui5-li icon="palette" type="Inactive">Theme</ui5-li>
                <ui5-select ref={selectRef}>
                  <ui5-option data-theme-id="sap_fiori_3">Fiori 3</ui5-option>
                  <ui5-option data-theme-id="sap_fiori_3_dark">Fiori 3 Dark</ui5-option>
                  <ui5-option data-theme-id="sap_belize_hcb">Belize HCB</ui5-option>
                </ui5-select>
              </div>
            </ui5-li-custom>

            <ui5-li icon="sap-icon://settings">Settings</ui5-li>
            <ui5-li icon="sap-icon://sys-help">Help</ui5-li>
            <ui5-li icon="sap-icon://log">Sign out</ui5-li>
          </ui5-list>
        </div>
      </ui5-popover>
    </div>
  )
}

export default AppBar;
