// cssFundamentals/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiFeather,
    FiCode,
    FiLayers,
    FiTarget,
    FiGitCommit,
    FiHelpCircle,
} from "react-icons/fi";

const CssFundamentals = () => {
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
                    <FiFeather />
                </span>

                <span className="title">CSS Fundamentals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayers />
                        </span>
                        Core basics in one view
                    </div>

                    <p className="p">
                        CSS controls how HTML looks. These fundamentals explain
                        how rules are written and how the browser decides which
                        styles win.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">What is CSS</h3>
                    <p className="p">
                        CSS stands for Cascading Style Sheets. It is used to
                        style HTML: layout, spacing, colors, fonts, and
                        responsive behavior. HTML is structure. CSS is
                        presentation.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">How CSS works with HTML</h3>
                    <p className="p">
                        CSS targets HTML elements using selectors and applies
                        styling rules to them. The browser reads HTML, builds a
                        DOM tree, then reads CSS and applies it to matching
                        nodes.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">CSS syntax</h3>
                    <p className="p">
                        A CSS rule has a selector and a declaration block. The
                        declaration block contains property-value pairs.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic rule
                        </div>
                        <pre className="code">
                            {`selector {
  property: value;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Selectors overview</h3>
                    <p className="p">
                        Selectors decide which elements get styled. Common ones
                        are element selectors, class selectors, id selectors,
                        and combinations.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Element: <span className="mono">p</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Class: <span className="mono">.card</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Id: <span className="mono">#header</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Descendant: <span className="mono">.card p</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Property and value</h3>
                    <p className="p">
                        A property is what you change. A value is what you set
                        it to. Example: <span className="mono">color</span> is a
                        property, <span className="mono">red</span> is a value.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiTarget />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Property</div>
                                <div className="miniSub">color</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiGitCommit />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Value</div>
                                <div className="miniSub">#4ea1ff</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Comments</h3>
                    <p className="p">
                        Comments are notes for humans. They do not affect
                        styling. CSS comments use this format.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Comment format
                        </div>
                        <pre className="code">{`/* this is a comment */`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">How browser applies CSS</h3>
                    <p className="p">
                        The browser matches selectors against the DOM, then
                        calculates the final styles for each element using the
                        cascade rules. After that it runs layout and paint to
                        draw the UI.
                    </p>

                    <div className="flow">
                        <div className="flowItem">HTML → DOM</div>
                        <div className="arrow">→</div>
                        <div className="flowItem">CSS → rules</div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Cascade</div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Layout</div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Paint</div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Cascade concept</h3>
                    <p className="p">
                        Cascade means multiple rules can apply to the same
                        element. The browser chooses the final value based on
                        importance, specificity, and source order.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Simple rule
                        </div>
                        <div className="calloutText">
                            If two rules target the same property, the more
                            specific one wins. If specificity is same, the later
                            one wins.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Specificity basics</h3>
                    <p className="p">
                        Specificity is the priority score of a selector. In
                        simple terms: id selectors are stronger than class
                        selectors, and class selectors are stronger than element
                        selectors.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">#id</span> is strongest
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">.class</span> is medium
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">div</span> is weakest
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Inheritance basics</h3>
                    <p className="p">
                        Some properties flow from parent to child automatically
                        like text color and font. Many layout properties do not
                        inherit like margin, padding, width, and border.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiHelpCircle />
                            </span>
                            Quick tip
                        </div>
                        <div className="calloutText">
                            If a text style feels "automatic", it is probably
                            inherited. If a box style does not change children,
                            it usually does not inherit.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CssFundamentals;
