// responsiveDesign/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiSmartphone,
    FiMonitor,
    FiMaximize,
    FiSliders,
    FiType,
    FiGrid,
    FiCode,
} from "react-icons/fi";

const ResponsiveDesign = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiSmartphone />
                </span>

                <span className="title">Responsive Design</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pillRow">
                        <div className="pill">
                            <span className="pillIcon">
                                <FiMonitor />
                            </span>
                            Fits every screen
                        </div>
                        <div className="pill">
                            <span className="pillIcon">
                                <FiSliders />
                            </span>
                            Layout + type scaling
                        </div>
                    </div>

                    <p className="p">
                        Responsive design means the same UI adapts smoothly to
                        different screen sizes and containers. You do this with
                        media queries, flexible layouts, and fluid sizing.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Media queries</h3>
                    <p className="p">
                        Media queries apply CSS only when a condition is true,
                        like screen width. They are the main tool for switching
                        layouts at different sizes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic example
                        </div>
                        <pre className="code">
                            {`/* Apply styles when viewport is 768px and up */
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Breakpoints</h3>
                    <p className="p">
                        Breakpoints are chosen widths where your layout needs a
                        noticeable change. Pick breakpoints based on your
                        design, not on random device names.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiSmartphone />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Small</div>
                                <div className="miniSub">0 to 600px</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiMonitor />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Medium</div>
                                <div className="miniSub">600 to 1024px</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiMaximize />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Large</div>
                                <div className="miniSub">1024px and up</div>
                            </div>
                        </div>
                    </div>

                    <p className="p muted">
                        These ranges are common, but you can adjust them based
                        on your UI needs.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Mobile first approach</h3>
                    <p className="p">
                        Mobile first means you write the base CSS for small
                        screens, then add enhancements using min-width media
                        queries for larger screens. This keeps CSS cleaner and
                        avoids overrides.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiSmartphone />
                            </span>
                            Pattern
                        </div>
                        <div className="calloutText">
                            Base styles for mobile, then progressively enhance
                            for bigger screens using min-width.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Desktop first approach</h3>
                    <p className="p">
                        Desktop first means you write base CSS for large screens
                        and then adjust for smaller screens using max-width
                        queries. It works, but it often leads to more overrides
                        compared to mobile first.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiMonitor />
                            </span>
                            Pattern
                        </div>
                        <div className="calloutText">
                            Base styles for desktop, then reduce or simplify for
                            smaller screens using max-width.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Container queries</h3>
                    <p className="p">
                        Container queries let a component respond to the size of
                        its parent container, not the full viewport. This is
                        useful for reusable cards and widgets inside different
                        layouts.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic idea
                        </div>
                        <pre className="code">
                            {`/* 1) Create a container */
.cardWrap {
  container-type: inline-size;
}

/* 2) Style based on container width */
@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Fluid typography</h3>
                    <p className="p">
                        Fluid typography means font sizes scale smoothly between
                        a minimum and maximum, instead of jumping only at
                        breakpoints. This improves readability across devices.
                    </p>

                    <div className="miniGrid two">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiType />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Min size</div>
                                <div className="miniSub">
                                    Readable on mobile
                                </div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiType />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Max size</div>
                                <div className="miniSub">
                                    Looks strong on desktop
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">clamp for responsiveness</h3>
                    <p className="p">
                        clamp lets you set a minimum, preferred, and maximum
                        value. It is perfect for responsive font sizes, gaps,
                        padding, and widths.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            clamp example
                        </div>
                        <pre className="code">
                            {`/* font-size will scale with viewport
   but never go below 18px or above 42px */
.heading {
  font-size: clamp(18px, 4vw, 42px);
}

/* spacing example */
.section {
  padding: clamp(14px, 2.5vw, 28px);
}`}
                        </pre>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiGrid />
                            </span>
                            When to use clamp
                        </div>
                        <div className="calloutText">
                            Use it when you want smooth scaling without adding
                            extra breakpoints.
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Prefer mobile first with min-width queries
                        </li>
                        <li>
                            <span className="checkDot" />
                            Choose breakpoints based on layout needs
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use clamp for smoother typography and spacing
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use container queries for reusable components
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ResponsiveDesign;
