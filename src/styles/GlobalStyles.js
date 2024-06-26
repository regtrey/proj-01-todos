import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* Grey */
        --color-grey-0: #fff;
        --color-grey-50:#f9fafb;
        --color-grey-100:#f3f4f6;
        --color-grey-200:#e5e7eb;
        --color-grey-300:#d1d5db;
        --color-grey-400:#9ca3af;
        --color-grey-500:#71717a;
        --color-grey-600:#4b5563;
        --color-grey-700:#374151;
        --color-grey-800:#1f2937;

        /* Brand */
        --color-brand-50: #eff6ff;
        --color-brand-100: #dbeafe;
        --color-brand-200: #bfdbfe;
        --color-brand-300: #93c5fd;
        --color-brand-400: #60a5fa;
        --color-brand-500: #3b82f6;
        --color-brand-600: #2563eb;
        --color-brand-700: #1d4ed8;
        --color-brand-800: #1e40af;
        --color-brand-900: #1e3a8a;
        --color-brand-950: #172554;
    }

    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        transition: all 0.5s;
    }

    button:focus, input:focus {
      outline: 2px solid var(--color-brand-500);
      outline-offset: 1.5px;
    }

    button:has(svg):focus {
        outline: none;
    }

    button svg {
        height: 2rem;
        width: 2rem;
    }  
`;

export default GlobalStyles;
