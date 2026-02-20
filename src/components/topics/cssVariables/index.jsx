// cssVariables/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiSliders,
    FiCode,
    FiLayers,
    FiSun,
    FiMoon,
    FiZap,
} from "react-icons/fi";

const CssVariables = () => {
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
                    <FiSliders />
                </span>

                <span className="title">CSS Variables</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiZap />
                        </span>
                        Reusable tokens for styling
                    </div>

                    <p className="p">
                        CSS Variables are also called custom properties. They
                        let you store values once and reuse them everywhere.
                        They are perfect for themes, spacing systems, and
                        consistent UI styling.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Custom properties</h3>
                    <p className="p">
                        Custom properties are variables you define in CSS using
                        names that start with <span className="mono">--</span>.
                        Example: <span className="mono">--primary</span> or{" "}
                        <span className="mono">--space-12</span>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Defining variables
                        </div>
                        <pre className="code">
                            {`:root {
  --primary: #4ea1ff;
  --radius: 14px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">var()</h3>
                    <p className="p">
                        You use the <span className="mono">var()</span> function
                        to read a CSS variable and apply it as a value in other
                        rules.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Using variables
                        </div>
                        <pre className="code">
                            {`.btn {
  background: var(--primary);
  border-radius: var(--radius);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Scope</h3>
                    <p className="p">
                        Variables follow normal CSS scoping rules. If you define
                        a variable on <span className="mono">:root</span>, it is
                        available everywhere. If you define it on a specific
                        container, it applies only inside that container and its
                        children.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiLayers />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Global</div>
                                <div className="miniSub">:root</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiLayers />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Local</div>
                                <div className="miniSub">.card</div>
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Global vs local scope
                        </div>
                        <pre className="code">
                            {`:root {
  --text: #f5f7fa;
}

.card {
  --text: #111827;
  color: var(--text);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Fallback values</h3>
                    <p className="p">
                        If a variable is missing, you can provide a fallback
                        value inside <span className="mono">var()</span>. The
                        browser will use the fallback when the variable is not
                        defined.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiCode />
                            </span>
                            Why fallback is useful
                        </div>
                        <div className="calloutText">
                            It prevents broken styles and makes components safer
                            to reuse in different pages.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            var() with fallback
                        </div>
                        <pre className="code">
                            {`.badge {
  background: var(--badge-bg, #2d333b);
  color: var(--badge-text, #f5f7fa);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Dynamic theming</h3>
                    <p className="p">
                        Dynamic theming means switching theme values without
                        rewriting component CSS. You simply change variables on
                        a parent like <span className="mono">html</span> or{" "}
                        <span className="mono">body</span>.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiMoon />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Dark</div>
                                <div className="miniSub">default</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiSun />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Light</div>
                                <div className="miniSub">data-theme</div>
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Theme switch example
                        </div>
                        <pre className="code">
                            {`:root {
  --bg: #0f1117;
  --text: #f5f7fa;
}

html[data-theme="light"] {
  --bg: #ffffff;
  --text: #111827;
}

body {
  background: var(--bg);
  color: var(--text);
}`}
                        </pre>
                    </div>

                    <p className="p muted">
                        Tip: This is exactly how your theme.css works.
                        Components stay the same, only tokens change.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CssVariables;
