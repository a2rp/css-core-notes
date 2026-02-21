// styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        /* padding: 60px 20px; */
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,

    Content: styled.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 40px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .heading {
            font-size: 32px;
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 18px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 28px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family: monospace;
            color: var(--color-text-primary);
        }
    `,
};
