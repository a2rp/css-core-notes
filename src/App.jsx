import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
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

const topics = [["about", "Overview", AboutCss], ["fundamentals", "CSS Fundamentals", CssFundamentals], ["apply", "Ways to Apply CSS", WaysToApplyCss], ["selectors", "Selectors", SelectorsDeepDive], ["box", "Box Model", BoxModel], ["units", "Units and Values", UnitsAndValues], ["colors", "Colors and Backgrounds", ColorsAndBackgrounds], ["type", "Typography", Typography], ["display", "Display and Visibility", DisplayAndVisibility], ["position", "Positioning", Positioning], ["flex", "Flexbox", Flexbox], ["grid", "CSS Grid", CssGrid], ["responsive", "Responsive Design", ResponsiveDesign], ["transitions", "Transitions", Transitions], ["animations", "Animations", Animations], ["effects", "Layout and Visual Effects", AdvancedLayoutVisualEffects], ["variables", "CSS Variables", CssVariables], ["architecture", "CSS Architecture", CssArchitecture], ["performance", "Performance", PerformanceBestPractices], ["accessibility", "Accessibility", AccessibilityInCss], ["modern", "Modern CSS", ModernCssFeatures]];

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const mainRef = useRef(null);
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutCss;
    useEffect(() => { mainRef.current?.scrollTo({ top: 0, behavior: "auto" }); requestAnimationFrame(() => mainRef.current?.querySelector('[aria-expanded="false"]')?.click()); }, [activeTopic]);
    return <Styled.Wrapper><Styled.Header><Header /></Styled.Header><Styled.Main ref={mainRef}><div className="workspaceLayout"><aside className="sideMenu" aria-label="CSS topics"><p className="menuLabel">Study guide</p><nav>{topics.map(([id, label]) => <button key={id} type="button" className={activeTopic === id ? "active" : ""} onClick={() => setActiveTopic(id)}>{label}</button>)}</nav></aside><section className="contentWrapper" aria-live="polite"><ActiveTopic /></section></div><button type="button" className="scrollTopButton" aria-label="Scroll content to top" title="Scroll to top" onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp /></button><div className="footerWrapper"><Footer /></div></Styled.Main></Styled.Wrapper>;
};

export default App;
