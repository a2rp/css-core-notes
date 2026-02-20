// positioning/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiMove,
    FiMapPin,
    FiLayers,
    FiCornerUpRight,
    FiCrosshair,
    FiInfo,
} from "react-icons/fi";

const Positioning = () => {
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
                    <FiMove />
                </span>

                <span className="title">Positioning</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiMapPin />
                        </span>
                        Control where elements sit
                    </div>

                    <p className="p">
                        Positioning changes how an element is placed in the
                        page. The key idea is "normal flow" vs "taken out of
                        flow", plus how offsets and layering work.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiCrosshair />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Offsets</div>
                                <div className="miniSub">
                                    top right bottom left
                                </div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiLayers />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Layering</div>
                                <div className="miniSub">
                                    z-index and stacking
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">static</h3>
                    <p className="p">
                        Default position. The element follows normal document
                        flow. Offsets like top or left do not move it.
                    </p>

                    <div className="hint">
                        <span className="hintIcon">
                            <FiInfo />
                        </span>
                        If you never set position, it is static.
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">relative</h3>
                    <p className="p">
                        The element stays in normal flow, but you can nudge it
                        using top, left, right, bottom. Space is still reserved
                        in the layout.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCornerUpRight />
                            </span>
                            Common use
                        </div>
                        <pre className="code">
                            {`.badge {
  position: relative;
  top: 6px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">absolute</h3>
                    <p className="p">
                        The element is taken out of normal flow. It is placed
                        using offsets relative to its nearest positioned
                        ancestor (an ancestor with position not static). If none
                        exists, it uses the initial containing block (often the
                        page).
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Beginner rule
                        </div>
                        <div className="calloutText">
                            For predictable absolute positioning, set the parent
                            as position: relative, then child position:
                            absolute.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCornerUpRight />
                            </span>
                            Parent + child pattern
                        </div>
                        <pre className="code">
                            {`.card {
  position: relative;
}

.card .closeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fixed</h3>
                    <p className="p">
                        Taken out of flow and positioned relative to the
                        viewport. It stays in the same place even when the page
                        scrolls.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Sticky headers (sometimes)
                        </li>
                        <li>
                            <span className="dot" />
                            Floating action buttons
                        </li>
                        <li>
                            <span className="dot" />
                            Back to top button
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCornerUpRight />
                            </span>
                            Fixed footer example
                        </div>
                        <pre className="code">
                            {`.footerBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">sticky</h3>
                    <p className="p">
                        Acts like relative until a scroll threshold is reached,
                        then behaves like fixed within its scroll container. It
                        needs at least one offset like top to stick.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiMapPin />
                            </span>
                            Common mistake
                        </div>
                        <div className="calloutText">
                            sticky breaks if any parent has overflow: hidden or
                            overflow: auto in unexpected ways. Also, set top for
                            it to work.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCornerUpRight />
                            </span>
                            Sticky sidebar
                        </div>
                        <pre className="code">
                            {`.side {
  position: sticky;
  top: 20px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">top, left, right, bottom</h3>
                    <p className="p">
                        These are offset properties. They work when position is
                        relative, absolute, fixed, or sticky. They do nothing on
                        static elements.
                    </p>

                    <div className="miniGrid two">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiCrosshair />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">absolute</div>
                                <div className="miniSub">
                                    placed inside parent box
                                </div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiCrosshair />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">fixed</div>
                                <div className="miniSub">
                                    placed inside viewport
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">z-index</h3>
                    <p className="p">
                        z-index controls which element appears on top when
                        elements overlap. It only works on positioned elements
                        (not static) and within the same stacking context.
                    </p>

                    <div className="hint">
                        <span className="hintIcon">
                            <FiInfo />
                        </span>
                        Bigger z-index does not always win if stacking contexts
                        are different.
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Simple overlap
                        </div>
                        <pre className="code">
                            {`.modal {
  position: fixed;
  z-index: 50;
}

.toast {
  position: fixed;
  z-index: 60;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">stacking context</h3>
                    <p className="p">
                        A stacking context is like a mini layering world. An
                        element with its own stacking context controls how its
                        children stack, and those children cannot escape above
                        elements outside that context using z-index alone.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Common creators
                        </div>
                        <div className="calloutText">
                            position with z-index, transform, opacity less than
                            1, filter, and a few other properties can create a
                            new stacking context.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Typical case
                        </div>
                        <pre className="code">
                            {`.parent {
  position: relative;
  z-index: 1; /* creates stacking context */
}

.child {
  position: absolute;
  z-index: 9999; /* still stuck inside parent context */
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick rules to remember</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            absolute positions inside nearest positioned parent
                        </li>
                        <li>
                            <span className="checkDot" />
                            fixed positions inside viewport
                        </li>
                        <li>
                            <span className="checkDot" />
                            sticky needs top (or left etc) to work
                        </li>
                        <li>
                            <span className="checkDot" />
                            z-index works only within stacking context
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Positioning;
