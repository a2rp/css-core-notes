// cssGrid/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGrid,
    FiCode,
    FiLayout,
    FiMap,
    FiColumns,
    FiCopy,
} from "react-icons/fi";

const CssGrid = () => {
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
                    <FiGrid />
                </span>

                <span className="title">CSS Grid</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayout />
                        </span>
                        Two-dimensional layout system
                    </div>

                    <p className="p">
                        CSS Grid is made for page layout. You define rows and
                        columns on a parent container, then place children into
                        the grid. It handles both directions: horizontal and
                        vertical.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">display: grid</h3>
                    <p className="p">
                        Turns an element into a grid container. Its direct
                        children become grid items and can be placed into rows
                        and columns.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Grid container
                        </div>
                        <pre className="code">
                            {`.wrapper {
  display: grid;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-template-columns</h3>
                    <p className="p">
                        Defines the column tracks. Each value sets a column
                        width. You can mix fixed units and flexible units.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiColumns />
                            </span>
                            Columns examples
                        </div>
                        <pre className="code">
                            {`.grid {
  grid-template-columns: 200px 1fr 1fr;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-template-rows</h3>
                    <p className="p">
                        Defines the row tracks. Same idea as columns, but for
                        height.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Rows example
                        </div>
                        <pre className="code">
                            {`.grid {
  grid-template-rows: auto 120px 1fr;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">repeat()</h3>
                    <p className="p">
                        Shortcut to repeat tracks. Useful when you want many
                        equal columns or rows.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            Repeat example
                        </div>
                        <pre className="code">
                            {`.grid {
  grid-template-columns: repeat(4, 1fr);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">minmax()</h3>
                    <p className="p">
                        Sets a minimum and maximum size for a track. Great for
                        responsive grids.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Minmax example
                        </div>
                        <pre className="code">
                            {`.grid {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">fr unit</h3>
                    <p className="p">
                        fr means "fraction of free space". After fixed sizes are
                        handled, leftover space is divided between fr tracks.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiMap />
                            </span>
                            Simple mental model
                        </div>
                        <div className="calloutText">
                            If you have <span className="mono">1fr 2fr</span>,
                            the second column gets twice the space of the first.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-gap (gap)</h3>
                    <p className="p">
                        Adds spacing between grid rows and columns. Modern name
                        is <span className="mono">gap</span>. It works for grid
                        and flex.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Gap example
                        </div>
                        <pre className="code">
                            {`.grid {
  gap: 12px;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-auto-flow</h3>
                    <p className="p">
                        Controls how items are automatically placed when you do
                        not specify positions. Default is row. You can also use
                        column or dense.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">row</span> fills row by row
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">column</span> fills column by
                            column
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">dense</span> tries to fill
                            gaps
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">grid-column</h3>
                    <p className="p">
                        Places an item across columns. You can use start and end
                        lines.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Column placement
                        </div>
                        <pre className="code">
                            {`.item {
  grid-column: 1 / 3;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-row</h3>
                    <p className="p">
                        Places an item across rows. Same idea as grid-column but
                        for vertical placement.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Row placement
                        </div>
                        <pre className="code">
                            {`.item {
  grid-row: 2 / 4;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">grid-area</h3>
                    <p className="p">
                        Shorthand to place an item with row start, column start,
                        row end, column end. Also used with named areas.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Area placement
                        </div>
                        <pre className="code">
                            {`.item {
  grid-area: 1 / 2 / 3 / 4;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Named grid areas</h3>
                    <p className="p">
                        You can name regions of your layout using
                        <span className="mono"> grid-template-areas</span>. Then
                        assign items to those names with
                        <span className="mono"> grid-area</span>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Named areas example
                        </div>
                        <pre className="code">
                            {`.layout {
  display: grid;
  gap: 12px;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { grid-area: main; }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Implicit vs explicit grid</h3>
                    <p className="p">
                        The explicit grid is what you define with
                        <span className="mono"> grid-template-columns</span> and
                        <span className="mono"> grid-template-rows</span>. The
                        implicit grid is created automatically when items
                        overflow the defined tracks.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayout />
                            </span>
                            Quick tip
                        </div>
                        <div className="calloutText">
                            If you did not define enough rows, Grid will create
                            extra rows in the implicit grid to place items.
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Define tracks with template rows and columns
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use repeat and minmax for responsive grids
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use named areas for clean page layouts
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CssGrid;
