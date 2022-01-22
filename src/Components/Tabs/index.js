import React from "react";
import "@ui5/webcomponents-icons/dist/search";
import "@ui5/webcomponents-icons/dist/download";
import SearchReports from "../SearchReports";

const Tabs = () => {
  const recordsDownloaded = 3;
  return (
    <ui5-tabcontainer className="full-width" show-overflow={true}>
      <ui5-tab icon="search" text="Search Reports" selected={true}>
        <SearchReports/>
      </ui5-tab>
      <ui5-tab icon="download" text="Analytics" additional-text={recordsDownloaded}>
        <ui5-label>
          <ui5-product-switch>
            <ui5-product-switch-item title-text="Home" subtitle-text="Central Home"
                                     icon="home"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud"
                                     icon="business-objects-experience"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Catalog" subtitle-text="Tools"
                                     icon="contacts"></ui5-product-switch-item>
            {/* <ui5-product-switch-item title-text="Travel & Expense" subtitle-text="Concur"
                                     icon="flight"></ui5-product-switch-item> */}
          </ui5-product-switch>
        </ui5-label>
      </ui5-tab>
    </ui5-tabcontainer>
  );
}
export default Tabs;