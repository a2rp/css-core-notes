// performanceBestPractices/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiActivity,
    FiCpu,
    FiTarget,
    FiLayers,
    FiTool,
    FiCode,
} from "react-icons/fi";

const PerformanceBestPractices = () => {
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
                    <FiZap />
                </span>

                <span className="title">Performance and Best Practices</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiActivity />
                        </span>
                        Make UI fast and stable
                    </div>

                    <p className="p">
                        CSS performance is mostly about avoiding expensive work
                        in the browser. The big goals are stable layout, less
                        reflow, less repaint, and smoother animations.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Critical CSS</h3>
                    <p className="p">
                        Critical CSS means loading only the styles needed to
                        render the above-the-fold content first. This improves
                        first paint time because the page can show something
                        useful without waiting for all CSS to download.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Beginner tip
                        </div>
                        <div className="calloutText">
                            Keep your initial layout styles small. Load
                            non-essential styles later (for deep sections,
                            modals, or heavy pages).
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoiding layout shifts</h3>
                    <p className="p">
                        Layout shift happens when content jumps while loading.
                        The most common reason is images or ads without fixed
                        space. Always reserve space using width, height, or
                        aspect-ratio.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Give images width and height
                        </li>
                        <li>
                            <span className="dot" />
                            Use aspect-ratio for responsive media
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid inserting content above existing content
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Reserve space
                        </div>
                        <pre className="code">
                            {`.cardMedia {
  width: 100%;
  aspect-ratio: 16 / 9;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoiding heavy selectors</h3>
                    <p className="p">
                        Heavy selectors make matching slower and can create
                        confusing CSS. Prefer simple class-based selectors over
                        deep nesting and complex patterns.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiTarget />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Prefer</div>
                                <div className="miniSub">.btnPrimary</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiTarget />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Avoid</div>
                                <div className="miniSub">
                                    header nav ul li a
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Simple rule
                        </div>
                        <div className="calloutText">
                            If your selector depends on HTML structure too much,
                            it becomes fragile and harder to maintain.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">GPU acceleration</h3>
                    <p className="p">
                        Some animations can run smoother when handled by the GPU
                        (graphics processor). Usually, transforms and opacity
                        are the safest properties for smooth animations.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Animate transform and opacity for best results
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid animating width, height, top, left often
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">will-change</h3>
                    <p className="p">
                        will-change tells the browser that an element is likely
                        to change soon. This can improve animation smoothness,
                        but using it everywhere can waste memory and hurt
                        performance.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiCpu />
                            </span>
                            Use carefully
                        </div>
                        <div className="calloutText">
                            Apply will-change only to elements you animate often
                            and remove it when not needed.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`.card {
  will-change: transform;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Minimizing repaint and reflow</h3>
                    <p className="p">
                        Reflow (layout) happens when the browser recalculates
                        element sizes and positions. Repaint happens when pixels
                        are redrawn. Both are costly when repeated often.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Animate transform and opacity
                        </li>
                        <li>
                            <span className="dot" />
                            Batch DOM updates (avoid many small changes)
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid reading layout values repeatedly while writing
                            styles
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">DevTools performance tab</h3>
                    <p className="p">
                        Chrome DevTools Performance tab helps you record what
                        the browser is doing. You can see scripting, layout,
                        paint, and rendering work. This makes performance issues
                        visible instead of guessing.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiTool />
                            </span>
                            What to look for
                        </div>
                        <div className="calloutText">
                            Look for long layout and paint bars, frequent
                            recalculations, and heavy style recalculation.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PerformanceBestPractices;
