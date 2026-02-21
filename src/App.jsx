// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutCss from "./components/aboutCss";

import CssFundamentals from "./components/topics/cssFundamentals";
import WaysToApplyCss from "./components/topics/waysToApplyCss";
import SelectorsDeepDive from "./components/topics/selectorsDeepDive";
import BoxModel from "./components/topics/boxModel";
import UnitsAndValues from "./components/topics/unitsAndValues";
import ColorsAndBackgrounds from "./components/topics/colorsAndBackgrounds";
import Typography from "./components/topics/typography";
import DisplayAndVisibility from "./components/topics/displayAndVisibility";
import Positioning from "./components/topics/positioning";
import Flexbox from "./components/topics/flexbox";
import CssGrid from "./components/topics/cssGrid";
import ResponsiveDesign from "./components/topics/responsiveDesign";
import Transitions from "./components/topics/transitions";
import Animations from "./components/topics/animations";
import AdvancedLayoutVisualEffects from "./components/topics/advancedLayoutVisualEffects";
import CssVariables from "./components/topics/cssVariables";
import CssArchitecture from "./components/topics/cssArchitecture";
import PerformanceBestPractices from "./components/topics/performanceBestPractices";
import AccessibilityInCss from "./components/topics/AccessibilityInCss";
import ModernCssFeatures from "./components/topics/modernCssFeatures";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    {/* about css */}

                    <AboutCss />

                    {/* <h1 className="category">CSS fundamentals</h1> */}
                    <CssFundamentals />

                    {/* <h1 className="category">Ways to Apply css</h1> */}
                    <WaysToApplyCss />

                    {/* <h1 className="category">Selectors deep dive</h1> */}
                    <SelectorsDeepDive />

                    {/* <h1 className="category">Box model</h1> */}
                    <BoxModel />

                    {/* <h1 className="category">Units and values</h1> */}
                    <UnitsAndValues />

                    {/* <h1 className="category">Colors and backgrounds</h1> */}
                    <ColorsAndBackgrounds />

                    {/* <h1 className="category">Typography</h1> */}
                    <Typography />

                    {/* <h1 className="category">Display and visibility</h1> */}
                    <DisplayAndVisibility />

                    {/* <h1 className="category">Positioning</h1> */}
                    <Positioning />

                    {/* <h1 className="category">Flexbox</h1> */}
                    <Flexbox />

                    {/* <h1 className="category">CSS grid</h1> */}
                    <CssGrid />

                    {/* <h1 className="category">Responsive design</h1> */}
                    <ResponsiveDesign />

                    {/* <h1 className="category">Transitions</h1> */}
                    <Transitions />

                    {/* <h1 className="category">Animations</h1> */}
                    <Animations />

                    {/* <h1 className="category">Advanced layout visual effects</h1> */}
                    <AdvancedLayoutVisualEffects />

                    {/* <h1 className="category">CSS variables</h1> */}
                    <CssVariables />

                    {/* <h1 className="category">CSS architecture</h1> */}
                    <CssArchitecture />

                    {/* <h1 className="category">Performance best practices</h1> */}
                    <PerformanceBestPractices />

                    {/* <h1 className="category">Accessibility in css</h1> */}
                    <AccessibilityInCss />

                    {/* <h1 className="category">Modern css features</h1> */}
                    <ModernCssFeatures />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
