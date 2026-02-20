// accessibilityInCss/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiEye,
    FiTarget,
    FiSun,
    FiMoon,
    FiActivity,
    FiType,
    FiAlertCircle,
    FiCode,
} from "react-icons/fi";

const AccessibilityInCss = () => {
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
                    <FiEye />
                </span>

                <span className="title">Accessibility in CSS</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiTarget />
                        </span>
                        Make UI usable for everyone
                    </div>

                    <p className="p">
                        Accessibility in CSS means your UI should stay readable,
                        keyboard-friendly, and comfortable for people with low
                        vision, motion sensitivity, or different system theme
                        preferences.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Focus styles</h3>
                    <p className="p">
                        Focus styles show where the keyboard is currently
                        located. Without visible focus, keyboard users get lost.
                        Always keep focus outlines visible for buttons, links,
                        inputs, and custom controls.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiAlertCircle />
                            </span>
                            Avoid this
                        </div>
                        <div className="calloutText">
                            Do not remove outlines globally like
                            <span className="mono"> outline: none; </span>
                            unless you replace it with a better focus style.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">:focus-visible</h3>
                    <p className="p">
                        <span className="mono">:focus-visible</span> helps show
                        focus rings mainly for keyboard navigation, while mouse
                        clicks usually do not show the ring. This reduces visual
                        noise but keeps keyboard accessibility strong.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Recommended focus pattern
                        </div>
                        <pre className="code">
                            {`button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Color contrast</h3>
                    <p className="p">
                        Text must stand out from its background. Low contrast
                        makes reading hard for many users. Keep body text clear,
                        avoid light gray on white, and avoid dark gray on black.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use strong contrast for body text
                        </li>
                        <li>
                            <span className="dot" />
                            Do not rely only on color to show meaning
                        </li>
                        <li>
                            <span className="dot" />
                            Links should be visually obvious
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Reduced motion media query</h3>
                    <p className="p">
                        Some users feel discomfort from animations. Respect user
                        settings using
                        <span className="mono"> prefers-reduced-motion </span>
                        to reduce or disable motion.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Reduce motion safely
                        </div>
                        <pre className="code">
                            {`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">prefers-color-scheme</h3>
                    <p className="p">
                        Users can set system theme to dark or light. You can
                        automatically adjust colors using
                        <span className="mono"> prefers-color-scheme</span>.
                        This is great when you want a default theme that matches
                        the OS.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiMoon />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Dark</div>
                                <div className="miniSub">Default at night</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiSun />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Light</div>
                                <div className="miniSub">Bright background</div>
                            </div>
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
                            {`@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f1117;
    --color-text-primary: #f5f7fa;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Readable font sizing</h3>
                    <p className="p">
                        Readable text means comfortable size, spacing, and line
                        length. Avoid tiny fonts. Use a good line-height and
                        keep paragraphs at a readable width.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Body text around 14px to 18px feels safe
                        </li>
                        <li>
                            <span className="dot" />
                            Use line-height around 1.5 to 1.8 for paragraphs
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid very long lines, keep max-width for content
                        </li>
                    </ul>

                    <div className="flow">
                        <div className="flowItem">
                            <span className="flowIcon">
                                <FiType />
                            </span>
                            Font size
                        </div>
                        <div className="arrow">→</div>
                        <div className="flowItem">
                            <span className="flowIcon">
                                <FiActivity />
                            </span>
                            Line height
                        </div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Comfort</div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Focus ring visible for keyboard users
                        </li>
                        <li>
                            <span className="checkDot" />
                            Prefer :focus-visible over :focus everywhere
                        </li>
                        <li>
                            <span className="checkDot" />
                            Respect reduced motion setting
                        </li>
                        <li>
                            <span className="checkDot" />
                            Good text contrast and readable sizing
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AccessibilityInCss;
