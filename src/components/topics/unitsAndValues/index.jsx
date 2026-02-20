// unitsAndValues/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiHash,
    FiMove,
    FiSliders,
    FiCode,
} from "react-icons/fi";

const UnitsAndValues = () => {
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
                    <FiHash />
                </span>

                <span className="title">Units and Values</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiMove />
                        </span>
                        Sizing without confusion
                    </div>

                    <p className="p">
                        CSS units decide how big something is. Absolute units
                        are fixed. Relative units adapt to screen, font size, or
                        container. Functions help you calculate responsive
                        values cleanly.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Absolute Units</h3>
                    <p className="p">
                        Absolute units are fixed lengths. They do not depend on
                        screen size or parent font size. In web UI work,
                        <span className="mono">px</span> is the most common.
                    </p>

                    <div className="chips">
                        <span className="chip">
                            <span className="chipKey">px</span>
                            <span className="chipText">pixels (most used)</span>
                        </span>
                        <span className="chip">
                            <span className="chipKey">pt</span>
                            <span className="chipText">points (print)</span>
                        </span>
                        <span className="chip">
                            <span className="chipKey">cm</span>
                            <span className="chipText">
                                centimeters (print)
                            </span>
                        </span>
                        <span className="chip">
                            <span className="chipKey">mm</span>
                            <span className="chipText">
                                millimeters (print)
                            </span>
                        </span>
                        <span className="chip">
                            <span className="chipKey">in</span>
                            <span className="chipText">inches (print)</span>
                        </span>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiSliders />
                            </span>
                            Practical tip
                        </div>
                        <div className="calloutText">
                            For websites and apps, mostly use px, rem, and %.
                            cm, mm, pt, in are mainly for printing.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Relative Units</h3>
                    <p className="p">
                        Relative units change based on something else like font
                        size or viewport. They help build responsive layouts.
                    </p>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">Font based</div>
                            <ul className="list">
                                <li>
                                    <span className="mono">em</span> - relative
                                    to current element font size
                                </li>
                                <li>
                                    <span className="mono">rem</span> - relative
                                    to root (html) font size
                                </li>
                                <li>
                                    <span className="mono">ch</span> - width of
                                    "0" character (monospace like sizing)
                                </li>
                                <li>
                                    <span className="mono">ex</span> - x-height
                                    (rare, not consistent)
                                </li>
                            </ul>
                        </div>

                        <div className="card">
                            <div className="cardTitle">Viewport based</div>
                            <ul className="list">
                                <li>
                                    <span className="mono">vh</span> - 1% of
                                    viewport height
                                </li>
                                <li>
                                    <span className="mono">vw</span> - 1% of
                                    viewport width
                                </li>
                                <li>
                                    <span className="mono">vmin</span> - 1% of
                                    smaller side
                                </li>
                                <li>
                                    <span className="mono">vmax</span> - 1% of
                                    larger side
                                </li>
                            </ul>
                        </div>

                        <div className="card">
                            <div className="cardTitle">Container based</div>
                            <ul className="list">
                                <li>
                                    <span className="mono">%</span> - relative
                                    to parent or layout context
                                </li>
                            </ul>
                            <div className="note">
                                % depends on property: width uses parent width,
                                padding % also uses parent width, etc.
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Common choices
                        </div>
                        <pre className="code">
                            {`/* Typography: rem is predictable */
html { font-size: 16px; }
h1 { font-size: 2rem; } /* 32px */

/* Layout: % + max-width is common */
.container { width: 90%; max-width: 1100px; }

/* Full screen sections */
.hero { min-height: 100vh; }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Functions</h3>
                    <p className="p">
                        CSS functions help you calculate values and create
                        responsive sizing without too many media queries.
                    </p>

                    <div className="grid two">
                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">calc()</span>
                            </div>
                            <p className="cardSub">
                                Mix units and do math. Great for layouts.
                            </p>
                            <pre className="miniCode">
                                {`width: calc(100% - 32px);`}
                            </pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">clamp()</span>
                            </div>
                            <p className="cardSub">
                                Set a min, preferred, and max value.
                            </p>
                            <pre className="miniCode">
                                {`font-size: clamp(16px, 2vw, 22px);`}
                            </pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">min()</span>
                            </div>
                            <p className="cardSub">
                                Choose the smaller value from options.
                            </p>
                            <pre className="miniCode">{`width: min(90%, 1100px);`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">max()</span>
                            </div>
                            <p className="cardSub">
                                Choose the larger value from options.
                            </p>
                            <pre className="miniCode">
                                {`min-height: max(60vh, 520px);`}
                            </pre>
                        </div>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiSliders />
                            </span>
                            Beginner friendly rule
                        </div>
                        <div className="calloutText">
                            Use rem for font sizes, % for fluid widths, and
                            clamp() when you want responsive sizing with a safe
                            minimum and maximum.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default UnitsAndValues;
