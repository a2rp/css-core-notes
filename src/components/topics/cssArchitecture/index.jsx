// cssArchitecture/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLayers,
    FiBox,
    FiGrid,
    FiPackage,
    FiHash,
    FiPenTool,
    FiTag,
} from "react-icons/fi";

const CssArchitecture = () => {
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
                    <FiLayers />
                </span>

                <span className="title">CSS Architecture</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayers />
                        </span>
                        How to organize CSS in real projects
                    </div>

                    <p className="p">
                        CSS architecture is about keeping styles readable,
                        scalable, and easy to maintain as the project grows.
                        These approaches solve the same problem in different
                        ways.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">BEM methodology</h3>
                    <p className="p">
                        BEM stands for Block, Element, Modifier. It is a naming
                        style that keeps class names predictable and avoids
                        clashes. You write classes like a small system.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTag />
                            </span>
                            Example naming
                        </div>
                        <pre className="code">
                            {`.card { }
.card__title { }
.card--featured { }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Utility classes</h3>
                    <p className="p">
                        Utility classes are small single-purpose classes like
                        padding, margin, text colors, and flex helpers. You
                        build UI by combining utilities instead of writing new
                        CSS for every component.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiGrid />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Example</div>
                                <div className="miniSub">
                                    .mt-10 .p-12 .text-center
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Atomic CSS</h3>
                    <p className="p">
                        Atomic CSS is an extreme form of utilities where every
                        class maps to one very specific style. It reduces
                        duplication because many components reuse the same tiny
                        classes.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Small reusable classes
                        </li>
                        <li>
                            <span className="dot" />
                            Less custom CSS over time
                        </li>
                        <li>
                            <span className="dot" />
                            More classes in HTML
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Component based styling</h3>
                    <p className="p">
                        Styles live with components. Each component owns its own
                        CSS so changes stay localized. This fits modern UI
                        development where UI is built from reusable parts.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiBox />
                            </span>
                            Simple idea
                        </div>
                        <div className="calloutText">
                            One component = one styling boundary.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">CSS Modules</h3>
                    <p className="p">
                        CSS Modules scope class names locally by default. This
                        prevents global class conflicts. You write normal CSS,
                        and the build tool generates unique class names.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiPackage />
                            </span>
                            Idea in one line
                        </div>
                        <pre className="code">
                            {`// styles.module.css
.button { }

/* used as */
styles.button`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Styled Components</h3>
                    <p className="p">
                        Styled Components is CSS-in-JS. You write styles inside
                        JavaScript and attach them to components. It supports
                        dynamic styling using props and makes scoping automatic.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiPenTool />
                            </span>
                            When it is useful
                        </div>
                        <div className="calloutText">
                            Great for component libraries, theming, and reusable
                            UI patterns.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Tailwind concept</h3>
                    <p className="p">
                        Tailwind is a utility-first CSS framework. Instead of
                        writing custom CSS, you compose UI using pre-defined
                        utility classes. It is basically a big, consistent
                        utility system.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiHash />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Core idea</div>
                                <div className="miniSub">
                                    build UI by combining utilities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Design tokens</h3>
                    <p className="p">
                        Design tokens are reusable values like colors, spacing,
                        font sizes, radius, and shadows. Tokens keep the UI
                        consistent and make theme changes easy.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTag />
                            </span>
                            Token example
                        </div>
                        <pre className="code">
                            {`:root {
  --color-primary: #4ea1ff;
  --radius-lg: 18px;
  --space-12: 12px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick take</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            BEM keeps naming consistent
                        </li>
                        <li>
                            <span className="checkDot" />
                            Utilities reduce custom CSS
                        </li>
                        <li>
                            <span className="checkDot" />
                            Modules and styled-components avoid conflicts
                        </li>
                        <li>
                            <span className="checkDot" />
                            Tokens keep themes consistent
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CssArchitecture;
