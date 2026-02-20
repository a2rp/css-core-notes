// flexbox/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiColumns,
    FiCode,
    FiMove,
    FiAlignLeft,
    FiMaximize2,
    FiTrendingUp,
} from "react-icons/fi";

const Flexbox = () => {
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
                    <FiColumns />
                </span>

                <span className="title">Flexbox</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiMove />
                        </span>
                        One dimensional layout
                    </div>

                    <p className="p">
                        Flexbox is used to align and distribute items in a row
                        or a column. You set flex on a parent (container), then
                        control how children (items) behave.
                    </p>

                    <div className="tipRow">
                        <div className="tip">
                            <span className="tipKey">Main axis</span>
                            <span className="tipVal">
                                direction of flex items
                            </span>
                        </div>
                        <div className="tip">
                            <span className="tipKey">Cross axis</span>
                            <span className="tipVal">
                                perpendicular direction
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">display: flex</h3>
                    <p className="p">
                        Turns an element into a flex container. Its direct
                        children become flex items and can be aligned using
                        Flexbox properties.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Flex container
                        </div>
                        <pre className="code">{`.row { display: flex; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">flex-direction</h3>
                    <p className="p">
                        Controls the direction of the main axis. Items can flow
                        horizontally or vertically.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">row</span> (default)
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">row-reverse</span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">column</span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">column-reverse</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">flex-wrap</h3>
                    <p className="p">
                        Controls whether items stay on one line or wrap onto
                        multiple lines when space is not enough.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">nowrap</span> (default)
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">wrap</span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">wrap-reverse</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">justify-content</h3>
                    <p className="p">
                        Aligns items along the main axis. Use it to control
                        left-right spacing in a row or top-bottom spacing in a
                        column.
                    </p>

                    <div className="chips">
                        <span className="chip">flex-start</span>
                        <span className="chip">center</span>
                        <span className="chip">flex-end</span>
                        <span className="chip">space-between</span>
                        <span className="chip">space-around</span>
                        <span className="chip">space-evenly</span>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">align-items</h3>
                    <p className="p">
                        Aligns items along the cross axis (per item). It affects
                        how items line up inside the container.
                    </p>

                    <div className="chips">
                        <span className="chip">stretch</span>
                        <span className="chip">flex-start</span>
                        <span className="chip">center</span>
                        <span className="chip">flex-end</span>
                        <span className="chip">baseline</span>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">align-content</h3>
                    <p className="p">
                        Aligns lines of items when wrapping happens. Works only
                        when there are multiple lines (wrap enabled).
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiAlignLeft />
                            </span>
                            Important
                        </div>
                        <div className="calloutText">
                            If there is only one line, align-content does
                            nothing. Use align-items instead.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">gap</h3>
                    <p className="p">
                        Adds spacing between flex items without using margins.
                        Works nicely with wrap too.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Spacing
                        </div>
                        <pre className="code">{`.row { gap: 12px; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">flex-grow</h3>
                    <p className="p">
                        Controls how much an item can grow when extra space is
                        available. Higher number grows more.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">0</span> means do not grow
                            (default)
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">1</span> means grow to fill
                            space
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">flex-shrink</h3>
                    <p className="p">
                        Controls how much an item shrinks when there is not
                        enough space. Higher number shrinks more.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">1</span> is default shrink
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">0</span> prevents shrinking
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">flex-basis</h3>
                    <p className="p">
                        Sets the starting size of the item before grow or shrink
                        happens. Think of it as the initial width (in row) or
                        height (in column).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Initial size
                        </div>
                        <pre className="code">{`.item { flex-basis: 240px; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">order</h3>
                    <p className="p">
                        Changes the visual order of items without changing HTML
                        order. Default order is 0. Smaller values come first.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiMaximize2 />
                            </span>
                            Tip
                        </div>
                        <div className="calloutText">
                            Use order carefully. It can confuse keyboard tab
                            order and screen readers if overused.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">shorthand flex</h3>
                    <p className="p">
                        flex is a shorthand for flex-grow, flex-shrink, and
                        flex-basis.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Shorthand examples
                        </div>
                        <pre className="code">
                            {`/* grow shrink basis */
.itemA { flex: 1 1 0; }

/* common pattern: equal columns */
.itemB { flex: 1; } /* means 1 1 0% in most browsers */

/* fixed width item */
.itemC { flex: 0 0 240px; }`}
                        </pre>
                    </div>

                    <div className="footerNote">
                        <div className="footerTitle">
                            Quick mental model
                            <span className="badge">
                                <FiTrendingUp />
                                grow
                            </span>
                            <span className="badge">
                                <FiTrendingUp />
                                shrink
                            </span>
                            <span className="badge">basis</span>
                        </div>
                        <p className="p muted">
                            Start at basis, then grow if extra space, shrink if
                            not enough space.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Flexbox;
