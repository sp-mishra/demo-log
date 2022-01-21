import React from 'react';
import { FlexBox, FlexBoxJustifyContent, FlexBoxWrap, ThemeProvider, } from '@ui5/webcomponents-react';
import { spacing } from "@ui5/webcomponents-react-base";
import AppBar from "./Components/AppBar";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <ThemeProvider withToastContainer={true}>
      <AppBar />
      <Tabs />
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        displayInline={false}
        fitContainer={true}
        style={{ ...spacing.sapUiResponsiveMargin }}
      />
    </ThemeProvider>
  );
}

export default App;
