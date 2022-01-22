import React from "react";

import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Option";
import "@ui5/webcomponents/dist/Tree";
import "@ui5/webcomponents/dist/TreeItem";
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/MessageStrip";
import "@ui5/webcomponents/dist/TreeListItem";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/DateRangePicker";
import "@ui5/webcomponents/dist/Button";

import "@ui5/webcomponents-icons/dist/user-settings";
import "@ui5/webcomponents-icons/dist/search";
import "@ui5/webcomponents-icons/dist/key-user-settings";
import "@ui5/webcomponents-icons/dist/employee-lookup";
import "@ui5/webcomponents-icons/dist/employee";
import "@ui5/webcomponents-icons/dist/employee-pane";
import "@ui5/webcomponents-icons/dist/trip-report";
import "@ui5/webcomponents-icons/dist/expense-report";

import "@ui5/webcomponents-icons/dist/chain-link";
import "@ui5/webcomponents-icons/dist/connected";
import "@ui5/webcomponents-icons/dist/x-ray";
import "@ui5/webcomponents-icons/dist/validate";

import SearchResults from "./SearchResults";

const SearchReports = () => {
  return (
    <>
      <ui5-messagestrip design="Information" hide-icon={true} hide-close-button={true}>Regions
      </ui5-messagestrip>
      {/*<ui5-select*/}
      {/*    className="select"*/}
      {/*    required={false}*/}
      {/*    valueState={"Warning"}*/}
      {/*    selected={true}*/}
      {/*>*/}
      {/*    <ui5-option icon="user-settings">gist_conf</ui5-option>*/}
      {/*</ui5-select>*/}
      <ui5-panel
        accessible-role="Complementary"
        className="full-width">

        <div slot="header"
             style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between"}}>
          <ui5-select
            className="select"
            required={false}
            valueState={"Warning"}
            selected={true}
          >
            <ui5-option icon="user-settings">EU-1</ui5-option>
          </ui5-select>
        </div>
        <ui5-label id="myLabel3" htmlFor="countryCode" show-colon={true}>Country Code</ui5-label>
        <ui5-title id="countryCode" level="H6">DE</ui5-title>
        <ui5-label id="myLabel3" htmlFor="cluster" show-colon={true}>Cluster</ui5-label>
        <ui5-title id="costCenter" level="H6">asdtybfg-1</ui5-title>
      </ui5-panel>
      <ui5-messagestrip design="Information" hide-icon={true} hide-close-button={true}>Search In Logs
      </ui5-messagestrip>
      <ui5-input id="reportIdInput" placeholder="Enter Correlation ID" style={{whiteSpace: "break-spaces"}}>
        <ui5-icon id="reportIdInput" slot="icon" name="chain-link"/>
      </ui5-input>
      <ui5-input id="employeeIdInput" placeholder="Enter Cluster Id">
        <ui5-icon id="employeeIdInput" slot="icon" name="connected"/>
      </ui5-input>
      <ui5-input id="userIdInput" placeholder="Enter Log Level">
        <ui5-icon id="userIdInput" slot="icon" name="x-ray"/>
      </ui5-input>
      <ui5-input id="lastNameInput" placeholder="Enter Service Name">
        <ui5-icon id="lastNameInput" slot="icon" name="validate"/>
      </ui5-input>
      <ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2021" max-date="4/5/2021"
                            format-pattern="dd/MM/yyyy"/>
      <ui5-label style={{display: "none"}} id="lblAdd" aria-hidden="true">Add</ui5-label>
      <ui5-label style={{display: "none"}} id="lblAdd" aria-hidden="true">Add</ui5-label>
      <ui5-button icon="search" design="Transparent" accessible-name-ref="lblCamera"/>
      <SearchResults/>
    </>
  );
}

export default SearchReports;