// modernCssFeatures/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiCode,
    FiLayers,
    FiGrid,
    FiSliders,
    FiCopy,
    FiDroplet,
    FiCompass,
    FiTarget,
} from "react-icons/fi";

const ModernCssFeatures = () => {
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

                <span className="title">Modern CSS Features</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiZap />
                        </span>
                        Newer CSS that reduces hacks
                    </div>

                    <p className="p">
                        These features make CSS more powerful and more
                        maintainable. Use them when supported, and keep
                        fallbacks in mind for older browsers.
                    </p>

                    <div className="note">
                        <div className="noteTitle">
                            <span className="noteIcon">
                                <FiCompass />
                            </span>
                            Beginner note
                        </div>
                        <div className="noteText">
                            Modern CSS is about writing less custom code and
                            fewer "workarounds". The browser can now do many
                            things directly.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">:has()</h3>
                    <p className="p">
                        :has() is like a parent selector. It lets you style an
                        element based on what it contains. Example: style a card
                        differently if it has a warning badge inside.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Parent style based on child
                        </div>
                        <pre className="code">
                            {`.card:has(.badge.warning) {
  border-color: var(--color-warning);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Container queries</h3>
                    <p className="p">
                        Media queries depend on the viewport size. Container
                        queries depend on the size of a component's container.
                        This makes responsive components easier to build.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiSliders />
                            </span>
                            Component based responsiveness
                        </div>
                        <pre className="code">
                            {`.cardGrid {
  container-type: inline-size;
}

@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">subgrid</h3>
                    <p className="p">
                        subgrid lets nested grid items align with the parent
                        grid tracks. Useful when you want consistent column
                        alignment across multiple cards or rows.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiGrid />
                            </span>
                            Inherit parent grid tracks
                        </div>
                        <pre className="code">
                            {`.parent {
  display: grid;
  grid-template-columns: 140px 1fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Logical properties</h3>
                    <p className="p">
                        Logical properties are direction aware. Instead of
                        margin-left or padding-right, you use margin-inline,
                        padding-block. This works better for RTL languages and
                        different writing modes.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">margin-inline</span> replaces
                            left and right
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">padding-block</span> replaces
                            top and bottom
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            RTL friendly spacing
                        </div>
                        <pre className="code">
                            {`.box {
  padding-block: 12px;
  padding-inline: 16px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Writing modes</h3>
                    <p className="p">
                        writing-mode changes text flow direction, like vertical
                        text layouts. It also affects logical properties and how
                        inline and block directions work.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            Vertical text example
                        </div>
                        <pre className="code">
                            {`.verticalLabel {
  writing-mode: vertical-rl;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">color-mix()</h3>
                    <p className="p">
                        color-mix() lets you blend two colors. Useful for
                        creating hover colors, borders, and subtle surfaces
                        without hardcoding many color values.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiDroplet />
                            </span>
                            Mixing two colors
                        </div>
                        <pre className="code">
                            {`.chip {
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
  border-color: color-mix(in srgb, var(--color-primary) 40%, var(--color-border));
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Nesting</h3>
                    <p className="p">
                        CSS nesting allows you to write nested rules similar to
                        SCSS, but now in CSS itself. It improves readability for
                        component style blocks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Nested rules
                        </div>
                        <pre className="code">
                            {`.card {
  padding: 16px;

  & .title {
    font-weight: 800;
  }

  &:hover {
    border-color: var(--color-primary);
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Cascade layers</h3>
                    <p className="p">
                        Cascade layers let you control which group of styles
                        wins, independent of specificity. This makes large
                        projects more predictable.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Why it helps
                        </div>
                        <div className="calloutText">
                            You can keep utilities, components, and overrides in
                            separate layers and define a clear priority order.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">@layer</h3>
                    <p className="p">
                        @layer is how you create layers. You can declare layer
                        order and put CSS rules inside each layer.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Layer order and rules
                        </div>
                        <pre className="code">
                            {`@layer reset, base, components, utilities;

@layer base {
  body { color: var(--color-text-primary); }
}

@layer utilities {
  .mt-2 { margin-top: 8px; }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">@scope</h3>
                    <p className="p">
                        @scope helps limit where styles apply. It allows you to
                        write rules that only affect a specific part of the DOM.
                        This reduces accidental styling conflicts.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTarget />
                            </span>
                            Scoped styling
                        </div>
                        <pre className="code">
                            {`@scope (.card) {
  .title {
    font-weight: 900;
  }
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick takeaway</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Prefer container queries for component layouts
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use logical properties for RTL readiness
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use @layer to keep cascade predictable
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ModernCssFeatures;
