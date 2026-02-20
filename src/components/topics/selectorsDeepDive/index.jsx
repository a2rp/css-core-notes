// selectorsDeepDive/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiTarget,
    FiCode,
    FiLayers,
    FiHash,
    FiFilter,
    FiZap,
} from "react-icons/fi";

const SelectorsDeepDive = () => {
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
                    <FiTarget />
                </span>

                <span className="title">Selectors Deep Dive</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiFilter />
                        </span>
                        Match elements precisely
                    </div>

                    <p className="p">
                        Selectors tell CSS which elements to style. Learn these
                        patterns and your CSS becomes faster to write and easier
                        to debug.
                    </p>
                </div>

                {/* Basic Selectors */}
                <div className="section">
                    <h3 className="h3">Basic Selectors</h3>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">
                                Universal selector{" "}
                                <span className="mono">*</span>
                            </div>
                            <p className="cardSub">
                                Matches every element on the page.
                            </p>
                            <pre className="code">{`* { box-sizing: border-box; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">Type selector</div>
                            <p className="cardSub">
                                Matches elements by tag name.
                            </p>
                            <pre className="code">{`p { line-height: 1.7; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                Class selector{" "}
                                <span className="mono">.class</span>
                            </div>
                            <p className="cardSub">
                                Matches elements that have a class.
                            </p>
                            <pre className="code">{`.card { padding: 16px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                ID selector <span className="mono">#id</span>
                            </div>
                            <p className="cardSub">
                                Matches the element with a specific id.
                            </p>
                            <pre className="code">{`#header { position: sticky; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">Grouping selector</div>
                            <p className="cardSub">
                                Apply the same rules to multiple selectors.
                            </p>
                            <pre className="code">{`h1, h2, h3 { font-weight: 800; }`}</pre>
                        </div>
                    </div>
                </div>

                {/* Combinators */}
                <div className="section">
                    <h3 className="h3">Combinators</h3>
                    <p className="p">
                        Combinators describe relationships between elements.
                        They help you target elements based on where they are in
                        the HTML structure.
                    </p>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">Descendant</div>
                            <p className="cardSub">
                                Matches any nested element inside another.
                            </p>
                            <pre className="code">{`.card p { margin-bottom: 12px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                Child <span className="mono">&gt;</span>
                            </div>
                            <p className="cardSub">
                                Matches direct children only.
                            </p>
                            <pre className="code">{`.list > li { padding: 8px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                Adjacent sibling <span className="mono">+</span>
                            </div>
                            <p className="cardSub">
                                Matches the very next sibling.
                            </p>
                            <pre className="code">{`h2 + p { margin-top: 6px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                General sibling <span className="mono">~</span>
                            </div>
                            <p className="cardSub">
                                Matches any later sibling.
                            </p>
                            <pre className="code">{`h2 ~ p { color: #8b949e; }`}</pre>
                        </div>
                    </div>
                </div>

                {/* Attribute Selectors */}
                <div className="section">
                    <h3 className="h3">Attribute Selectors</h3>
                    <p className="p">
                        Attribute selectors match elements based on attributes
                        like href, type, data-*, aria-* and more.
                    </p>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">[attr]</span>
                            </div>
                            <p className="cardSub">Has the attribute.</p>
                            <pre className="code">{`[disabled] { opacity: 0.6; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">[attr=value]</span>
                            </div>
                            <p className="cardSub">Exact value match.</p>
                            <pre className="code">{`input[type="email"] { border-color: #4ea1ff; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">[attr^=]</span>
                            </div>
                            <p className="cardSub">Starts with.</p>
                            <pre className="code">{`a[href^="https"] { font-weight: 800; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">[attr$=]</span>
                            </div>
                            <p className="cardSub">Ends with.</p>
                            <pre className="code">{`a[href$=".pdf"] { text-decoration: underline; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">[attr*=]</span>
                            </div>
                            <p className="cardSub">Contains substring.</p>
                            <pre className="code">{`img[src*="logo"] { filter: grayscale(1); }`}</pre>
                        </div>
                    </div>
                </div>

                {/* Pseudo Classes */}
                <div className="section">
                    <h3 className="h3">Pseudo Classes</h3>
                    <p className="p">
                        Pseudo classes select elements in a particular state
                        like hover, focus, visited, or based on position among
                        siblings.
                    </p>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:hover</span>
                            </div>
                            <p className="cardSub">Mouse is over element.</p>
                            <pre className="code">{`.btn:hover { transform: translateY(-1px); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:active</span>
                            </div>
                            <p className="cardSub">Being clicked/pressed.</p>
                            <pre className="code">{`.btn:active { transform: translateY(0); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:focus</span>
                            </div>
                            <p className="cardSub">Keyboard focus.</p>
                            <pre className="code">{`input:focus { outline: 2px solid var(--color-primary); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:visited</span>
                            </div>
                            <p className="cardSub">Visited link state.</p>
                            <pre className="code">{`a:visited { opacity: 0.85; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:link</span>
                            </div>
                            <p className="cardSub">Unvisited link state.</p>
                            <pre className="code">{`a:link { color: var(--color-link); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:first-child</span>
                            </div>
                            <p className="cardSub">First child of parent.</p>
                            <pre className="code">{`.list li:first-child { font-weight: 800; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:last-child</span>
                            </div>
                            <p className="cardSub">Last child of parent.</p>
                            <pre className="code">{`.list li:last-child { opacity: 0.8; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:nth-child()</span>
                            </div>
                            <p className="cardSub">Select by index.</p>
                            <pre className="code">{`.list li:nth-child(2) { color: var(--color-primary); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:nth-of-type()</span>
                            </div>
                            <p className="cardSub">
                                Index among same tag type.
                            </p>
                            <pre className="code">{`p:nth-of-type(2) { margin-top: 10px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:not()</span>
                            </div>
                            <p className="cardSub">Exclude matches.</p>
                            <pre className="code">{`.btn:not(.primary) { opacity: 0.9; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:is()</span>
                            </div>
                            <p className="cardSub">
                                Group selectors (keeps specificity).
                            </p>
                            <pre className="code">{`:is(h1, h2, h3) { letter-spacing: 0.2px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:where()</span>
                            </div>
                            <p className="cardSub">
                                Group selectors (zero specificity).
                            </p>
                            <pre className="code">{`:where(h1, h2, h3) { margin: 0; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">:has()</span>
                            </div>
                            <p className="cardSub">
                                Select parent based on children (modern CSS).
                            </p>
                            <pre className="code">{`.card:has(img) { padding-top: 10px; }`}</pre>
                        </div>
                    </div>

                    <div className="note">
                        <div className="noteTitle">
                            <span className="noteIcon">
                                <FiZap />
                            </span>
                            Note
                        </div>
                        <div className="noteText">
                            <span className="mono">:has()</span> is newer. It
                            works in modern browsers, but keep fallback in mind
                            for older environments.
                        </div>
                    </div>
                </div>

                {/* Pseudo Elements */}
                <div className="section">
                    <h3 className="h3">Pseudo Elements</h3>
                    <p className="p">
                        Pseudo elements style a specific part of an element or
                        create extra styling content.
                    </p>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::before</span>
                            </div>
                            <p className="cardSub">Insert content before.</p>
                            <pre className="code">{`.tag::before { content: "#"; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::after</span>
                            </div>
                            <p className="cardSub">Insert content after.</p>
                            <pre className="code">{`.tag::after { content: ""; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::first-letter</span>
                            </div>
                            <p className="cardSub">Style first letter.</p>
                            <pre className="code">{`p::first-letter { font-size: 22px; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::first-line</span>
                            </div>
                            <p className="cardSub">Style first line.</p>
                            <pre className="code">{`p::first-line { font-weight: 800; }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::selection</span>
                            </div>
                            <p className="cardSub">Selected text.</p>
                            <pre className="code">{`::selection { background: var(--color-primary); }`}</pre>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span className="mono">::placeholder</span>
                            </div>
                            <p className="cardSub">Placeholder styling.</p>
                            <pre className="code">{`input::placeholder { color: var(--color-text-muted); }`}</pre>
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick priority tip</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Prefer class selectors for reusable styling
                        </li>
                        <li>
                            <span className="checkDot" />
                            Avoid heavy nesting and overly specific selectors
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use pseudo classes for interaction and structure
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SelectorsDeepDive;
